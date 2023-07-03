var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import cheerio from "cheerio";
import crystalProperties from "../data/properties.js";
const createCrystalObject = (crystalObject, text) => __awaiter(void 0, void 0, void 0, function* () {
    for (let crystalProp of crystalProperties) {
        let regex = RegExp(`${crystalProp}:`, "i");
        if (regex.test(text)) {
            crystalObject[crystalProp] = text.split(":")[1];
        }
    }
});
const fetchHTML = (urls) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = [];
    for (let url of urls) {
        const response = yield axios.get(url);
        const html = yield response.data;
        const $ = cheerio.load(html);
        const crystalObject = {};
        $("table.table-params tbody tr", html).each(function () {
            const text = $(this).find("td").text();
            createCrystalObject(crystalObject, text);
        });
        collection.push(crystalObject);
    }
    return collection;
});
const service = {
    fetchHTML,
};
export default service;
//# sourceMappingURL=service.js.map