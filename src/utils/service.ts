import axios from "axios";
import cheerio from "cheerio";
import crystalProperties from "../data/properties.js";
import { PrismaClient } from "@prisma/client";
import data from "../data/data.js";

const prisma = new PrismaClient();

const main = async() => {
  const createMany = await prisma.crystal.createMany({ data })
  console.log('Done', createMany);
}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async(err) => {
    console.error(err)
    await prisma.$disconnect();
    process.exit(1);
  })

const createCrystalObject = async (crystalObject: any, text: string) => {
  for (let crystalProp of crystalProperties) {
    let regex = RegExp(`${crystalProp}:`, "i");
    if (regex.test(text)) {
      crystalObject[crystalProp] = text.split(":")[1];
    }
  }
};

const fetchImage = async (url: string) => {
  const base = "https://www.healingcrystals.com/";
  const response = await axios.get(url);
  const html = await response.data;
  const $ = cheerio.load(html);
  const srcUrl = $("div.product-main-image__item img").attr("src");

  return base + srcUrl;
};

const fetchHTML = async (urls: string[]) => {
  const collection: any = [];
  for (let url of urls) {
    const response = await axios.get(url);
    const html = await response.data;
    const $ = cheerio.load(html);
    const crystalObject: any = {};
    const image = await fetchImage(url);

    $("table.table-params tbody tr", html).each(function () {
      const text = $(this).find("td").text();
      createCrystalObject(crystalObject, text);
    });
    collection.push({
      ...crystalObject,
      image
    });
  }
  return collection;
};

const service = {
  fetchHTML,
  fetchImage,
};

export default service;
