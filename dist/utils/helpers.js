// import puppeteer from "puppeteer";
// import fs from "fs";
// import crystalPages from "../data/data.js";
// import crystalProperties from "../data/properties.js";
export {};
// const allCrystalInfo: any = [];
// const fetchHTMLPage = async (html: string) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(html);
//   const link = await page.evaluate(() => {
//     const node: any = document.querySelector(
//       ".products_listingBox .product__inside__name a"
//     );
//     return node.href;
//   });
//   return link;
// };
// const fetchHTMLPages = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html"
//   );
//   const links = await page.evaluate(() => {
//     const nodes = document.querySelectorAll(".pageHeading1 .stone_links");
//     const names = [...nodes].map((node: any) => {
//       return node.href;
//     });
//     const unique = new Set(names);
//     return [...unique];
//   });
//   await browser.close();
//   return links;
// };
// const formatLinks = async (links: any[]) => {
//   const formatted = [];
//   for (let link of links) {
//     const newLink = await fetchHTMLPage(link);
//     formatted.push(newLink);
//   }
//   return formatted;
// };
// const crystalInfo: any = {};
// const createCrystalObject = async (crystalPage: string) => {
//   // const crystalPage = crystalPages[0];
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(crystalPage);
//   const allTdElementText = await page.evaluate(() => {
//     const tdElements: any = document.querySelectorAll(
//       ".tab-content tbody tr td"
//     );
//     const tdElementText = [...tdElements].map((tdElement) => {
//       return tdElement.innerText;
//     });
//     return tdElementText;
//   });
//   for (let i = 0; i < allTdElementText.length; i++) {
//     let word = await allTdElementText[i].slice(0, -1);
//     let nextWord = await allTdElementText[i + 1];
//     if (crystalProperties.includes(word)) crystalInfo[word] = nextWord;
//   }
//   await browser.close();
//   return await crystalInfo;
// };
// export const createCrystalObjectArray = async () => {
//   for (let page of crystalPages) {
//     const info = await createCrystalObject(page);
//     await allCrystalInfo.push(info);
//   }
//   return allCrystalInfo;
// };
// const createJson = async (data: []) => {
//   const pages = [];
//   for (let da of data) {
//     let result = await fetchHTMLPage(da);
//     await pages.push(result);
//   }
//   fs.writeFile("cp.json", JSON.stringify(pages), (err) => console.log(err));
// };
//# sourceMappingURL=helpers.js.map