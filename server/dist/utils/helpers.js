var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from "puppeteer";
import fs from "fs";
import crystalPages from "../data/data.js";
import crystalProperties from "../data/properties.js";
const allCrystalInfo = [];
const fetchHTMLPage = (html) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch();
    const page = yield browser.newPage();
    yield page.goto(html);
    const link = yield page.evaluate(() => {
        const node = document.querySelector(".products_listingBox .product__inside__name a");
        return node.href;
    });
    return link;
});
const fetchHTMLPages = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch();
    const page = yield browser.newPage();
    yield page.goto("https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html");
    const links = yield page.evaluate(() => {
        const nodes = document.querySelectorAll(".pageHeading1 .stone_links");
        const names = [...nodes].map((node) => {
            return node.href;
        });
        const unique = new Set(names);
        return [...unique];
    });
    yield browser.close();
    return links;
});
const formatLinks = (links) => __awaiter(void 0, void 0, void 0, function* () {
    const formatted = [];
    for (let link of links) {
        const newLink = yield fetchHTMLPage(link);
        formatted.push(newLink);
    }
    return formatted;
});
const crystalInfo = {};
const createCrystalObject = (crystalPage) => __awaiter(void 0, void 0, void 0, function* () {
    // const crystalPage = crystalPages[0];
    const browser = yield puppeteer.launch();
    const page = yield browser.newPage();
    yield page.goto(crystalPage);
    const allTdElementText = yield page.evaluate(() => {
        const tdElements = document.querySelectorAll(".tab-content tbody tr td");
        const tdElementText = [...tdElements].map((tdElement) => {
            return tdElement.innerText;
        });
        return tdElementText;
    });
    for (let i = 0; i < allTdElementText.length; i++) {
        let word = yield allTdElementText[i].slice(0, -1);
        let nextWord = yield allTdElementText[i + 1];
        if (crystalProperties.includes(word))
            crystalInfo[word] = nextWord;
    }
    yield browser.close();
    return yield crystalInfo;
});
export const createCrystalObjectArray = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let page of crystalPages) {
        const info = yield createCrystalObject(page);
        yield allCrystalInfo.push(info);
    }
    return allCrystalInfo;
});
const createJson = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const pages = [];
    for (let da of data) {
        let result = yield fetchHTMLPage(da);
        yield pages.push(result);
    }
    fs.writeFile("cp.json", JSON.stringify(pages), (err) => console.log(err));
});
//# sourceMappingURL=helpers.js.map