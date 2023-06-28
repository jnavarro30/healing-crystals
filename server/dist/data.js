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
const mainUrl = "https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html";
const singleUrl = "https://www.healingcrystals.com/Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html";
const crystalProps = [
    "Crystal Name:",
    "Summary:",
    "Affirmation:",
    "Astrological Sign:",
    "Primary Chakra:",
    "Color:",
    "Shape:",
    "Category:",
    "Location:",
    "Rarity:",
    "Mineral Class:",
    "Crystal System:",
    "Hardness:",
    "Numerical Vibration:",
    "Chemical Composition:",
    "Physical:",
    "Emotional:",
    "Spiritual:",
];
export const crystalPages = [];
export const crystalInfo = {};
const fetchNestedCrystalPages = (href) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios.get(href);
        const hrefHtml = res.data;
        const $2 = cheerio.load(hrefHtml);
        const href2 = $2("a.imgover").attr("href");
        crystalPages.push(href2);
    }
    catch (err) {
        console.log(err);
    }
});
const fetchCrystalPages = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(mainUrl);
        const html = response.data;
        const $ = cheerio.load(html);
        $("a.imgover", html).each(function () {
            const href = $(this).attr("href");
            let query = RegExp("sort_view=all");
            if (query.test(href)) {
                fetchNestedCrystalPages(href);
            }
            else {
                crystalPages.push(href);
            }
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Do this for all Crystals
const fetchCrystalInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(singleUrl);
        const html = response.data;
        const $ = cheerio.load(html);
        $("tr", html).each(function () {
            const tdText = $(this).find("td").text();
            crystalProps.forEach((item) => {
                let regex = RegExp(`${item}`);
                if (regex.test(tdText)) {
                    let value = tdText.split(":")[1];
                    crystalInfo[item] = value;
                }
            });
        });
    }
    catch (err) {
        console.log(err);
    }
});
fetchCrystalPages();
fetchCrystalInfo();
//     // $('img.img-responsive', html).each(function() {
//     //     const image = $(this).attr('src')
//     //     result.push({
//     //         ...result,
//     //         image
//     //     })
//     // })
//# sourceMappingURL=data.js.map