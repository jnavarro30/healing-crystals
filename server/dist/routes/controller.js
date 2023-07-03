var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import data from "../data/data.js";
import service from "./service.js";
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service.fetchHTML(data);
    res.json({ data: result });
});
// const listInfo = (req: any, res: any) => {
//     res.json({ data: allCrystalInfo});
// }
// const read = (req: any, res: any) => {
//     res.json({ data: crystalInfo })
// }
export const controller = {
    list,
    // read,
    // listInfo
};
// list array of objects of each crystal
// read specific crsytal
//# sourceMappingURL=controller.js.map