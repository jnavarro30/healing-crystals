import data from "../data/data.js";
import service from "./service.js";
const list = async (req, res) => {
    const result = await service.fetchHTML(data);
    res.json({ data: result });
};
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