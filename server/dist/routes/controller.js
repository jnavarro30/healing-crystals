import data from '../data/data.js';
import '../utils/helpers.js';
// CRUD
// import { crystalPages, crystalInfo, allCrystalInfo } from '../utils/helpers.js'
const list = (req, res) => {
    res.json({ data: data });
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