// import puppeteer from "puppeteer";
// import fs from "fs";
// import links from './data/data.js';
// console.log(
//   'hellow'
// )
// const run = () => {
//   setTimeout(() => {
//     console.log('howdy')
//     console.log(links)
//   }, 2000)
// }
// run();
// const sortView = data.filter((link: string) => !/sort_view/.test(link));
// fs.writeFile('sf.json', JSON.stringify(sortView), err => console.log(err));
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
export const allCrystalInfo = [];
// const fetchHTMLPage = async(html: string) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(html);
//   const link = await page.evaluate(() => {
//    const node: any = document.querySelector(".products_listingBox .product__inside__name a");
//    return node.href;
//   });
//   return link;
// }
// fetchHTMLPage(mainUrl)
// fetchHTMLPage('https://www.healingcrystals.com/natural-crystals-and-minerals-by-amethyst-stone.html?sort_view=all')
// const formatLinks = async (links: any[]) => {
//   const formatted = []
//   // const browser = await puppeteer.launch();
//   // const page = await browser.newPage();
//   for (let link of links) {
//     const newLink = await fetchHTMLPage(link);
//     formatted.push(newLink);
//   }
//   return formatted;
// };
// const run = async() => {
//   for (let da of data) {
//     let result = await fetchHTMLPage(da);
//     await crystalPages.push(result);
//   }
//   fs.writeFile('cp.json', JSON.stringify(crystalPages), err => console.log(err));
// }
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
// const unformatedLinks = await links.filter((link: string) => /sort_view=all/.test(link))
// const removeUnformatedLinks = await links.filter((link: string) => !/sort_view=all/.test(link))
// const formatedLinks = await formatLinks(unformatedLinks);
// console.log(formatedLinks, 'hahah')
// const modifiedLinks = await modifyHTMLPages(links);
// console.log(modifiedLinks)
// Save to Json FIle
// fs.writeFile('links.json', JSON.stringify(links), err => console.log(err));
//   console.log(title)
//   await browser.close();
// }
//   await browser.close();
// };
// fetchHTMLPages();
// async function run() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html')
//   const links = await page.evaluate(() => {
//     const nodes = document.querySelectorAll('.pageHeading1 .stone_links');
//     const names = [...nodes].map((node: any) => {
//       return node.href
//     });
//     const unique = new Set(names);
//     return [...unique];
//   })
//   console.log(links)
// await page.screenshot({ path: 'ex.png', fullPage: true })
// await page.screenshot({ path: 'example.png', fullPage: true})
// await page.pdf({ path: 'example.pdf', format: 'A4'})
// const html = await page.content();
// console.log(html);
// const title = await page.evaluate(() => document.title);
// const text = await page.evaluate(() => document.body.innerText);
// const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => {
//   return e.href;
// }))
// const links = await page.evaluate(() => Array.from(document.querySelectorAll('#courses .card'), (e) => {
//   console.log(e)
// }))
// Save to Json FIle
// fs.writeFile('file.json', JSON.stringify(title), err => console.log(err));
//   console.log(title)
//   await browser.close();
// }
// run();
//# sourceMappingURL=data.js.map