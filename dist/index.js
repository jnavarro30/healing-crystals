import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
const app = express();
const PORT = 8000;
const website = {
    page: 'https://www.healingcrystals.com/natural-crystals-and-minerals-by-stone.html',
    base: 'https://www.healingcrystals.com/'
};
const result = [];
axios.get(website.page)
    .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    $('div.pageHeading1', html).each(function () {
        const nestedHtml = $(this).find('a').attr('href');
        axios.get(`${nestedHtml}`)
            .then(nestedResponse => {
            const html2 = nestedResponse.data;
            const $2 = cheerio.load(html2);
            $2('td', html2).each(function () {
                const name = $2(this).eq(0).text();
                result.push({
                    name
                });
            });
        });
        // first do research for 1 item then nest the items
    });
    // $('img.img-responsive', html).each(function() {
    //     const image = $(this).attr('src')
    //     result.push({
    //         ...result,
    //         image
    //     })
    // })
    // console.log(html, 'yo')
}).catch(err => console.log(err));
app.get('/', (req, res) => {
    res.json(result);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map