import express from "express";
import axios from "axios";
import cheerio from "cheerio";
const app = express();
const PORT = 8000;
const website = {
    main: "https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html",
    sub: "Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html",
    base: "https://www.healingcrystals.com/",
    single: "https://www.healingcrystals.com/Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html",
};
// scrape information from a single crystal page x
// gather all crystal sub pages x
// scrape information from all sub pages
// interface Crystal {
//   "Crystal Name": String,
//   "Summary": String,
//   "Affirmation": String,
//   "Astrological Sign": String,
//   "Primary Chakra": String,
//   "Color": String,
//   "Shape": String,
//   "Category": String,
//   "Location": String,
//   "Rarity": String,
//   "Mineral Class": String,
//   "Crystal System": String,
//   "Hardness": String,
//   "Numerical Vibration": String,
//   "Chemical Composition": String,
//   "Physical": String,
//   "Emotional": String,
//   "Spiritual": String,
// }
const crystalPages = [];
const crystalInfo = {};
axios
    .get(website.main)
    .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    $("a.imgover", html).each(function () {
        const href = $(this).attr("href");
        let query = RegExp("sort_view=all");
        if (query.test(href)) {
            axios
                .get(href)
                .then((res) => {
                const hrefHtml = res.data;
                const $2 = cheerio.load(hrefHtml);
                const href2 = $2("a.imgover").attr("href");
                crystalPages.push(href2);
            })
                .catch((err) => console.log(err));
        }
        else {
            crystalPages.push(href);
        }
    });
})
    .catch((err) => console.log(err));
axios
    .get(website.single)
    .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    $("tr", html).each(function () {
        const tdText = $(this).find("td").text();
        const arr = [
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
        arr.forEach((item) => {
            let regex = RegExp(`${item}`);
            if (regex.test(tdText)) {
                let value = tdText.split(":")[1];
                crystalInfo[item] = value;
            }
        });
    });
    // $('img.img-responsive', html).each(function() {
    //     const image = $(this).attr('src')
    //     result.push({
    //         ...result,
    //         image
    //     })
    // })
    // console.log(html, 'yo')
})
    .catch((err) => console.log(err));
app.get("/", (req, res) => {
    res.json(crystalPages);
    // res.json(crystalInfo);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map