import express from "express";
import axios from "axios";
import cheerio from "cheerio";
const app = express();
const PORT = 8000;
const website = {
    page: "https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html",
    crystal: "Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html",
    base: "https://www.healingcrystals.com/",
    single: "https://www.healingcrystals.com/Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html",
};
// interface Crystal {
//     crystalName: String,
//     summary: String,
//     affirmation: String,
//     astrologicalSign: String,
//     primaryChakra: String,
//     color: String,
//     shape: String,
//     category: String,
//     location: String,
//     rarity: String,
//     mineralClass: String,
//     crystalSystem: String,
//     hardness: String,
//     numericalVibration: String,
//     chemicalComposition: String,
//     physical: String,
//     emotional: String,
//     spiritual: String,
// }
const crystalInfo = {};
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
        arr.forEach(item => {
            let regex = RegExp(`${item}`);
            if (regex.test(tdText)) {
                let value = tdText.split(":")[1];
                crystalInfo[item] = value;
            }
        });
        //  console.log(typeof tdText)
        // result.push({
        //     // tdText,
        //     name
        // })
        // axios.get(`${nestedHtml}`)
        //     .then(nestedResponse => {
        //         const html2 = nestedResponse.data
        //         const $2 = cheerio.load(html2)
        //         $2('td', html2).each(function() {
        //             const name = $2(this).eq(0).text()
        //             result.push({
        //                 name
        //             })
        //         })
        //     })
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
    res.json(crystalInfo);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map