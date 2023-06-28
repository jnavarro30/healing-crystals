// CRUD
import { crystalPages, crystalInfo } from './data.js';
const list = (req, res) => {
    res.json({ data: crystalPages });
};
const read = (req, res) => {
    res.json({ data: crystalInfo });
};
export const controller = {
    list,
    read
};
//# sourceMappingURL=controller.js.map