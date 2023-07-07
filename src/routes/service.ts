import axios from "axios";
import cheerio from "cheerio";
import crystalProperties from "../data/properties.js";
// import Crystal from "../types/Crystal.js";

const createCrystalObject = async (crystalObject: any, text: string) => {
  for (let crystalProp of crystalProperties) {
    let regex = RegExp(`${crystalProp}:`, "i");
    if (regex.test(text)) {
      crystalObject[crystalProp] = text.split(":")[1];
    }
  }
};

const fetchHTML = async (urls: string[]) => {
  const collection: any = [];
  for (let url of urls) {
    const response = await axios.get(url);
    const html = await response.data;
    const $ = cheerio.load(html);
    const crystalObject: any = {};

    $("table.table-params tbody tr", html).each(function () {
      const text = $(this).find("td").text();
      createCrystalObject(crystalObject, text);
    });
    collection.push(crystalObject);
  }
  return collection;
};

const service = {
  fetchHTML,
};

export default service;
