// CRUD
import { crystalPages, crystalInfo } from './data.js'

const list = (req: any, res: any) => {
    res.json({ data: crystalPages })
}

const read = (req: any, res: any) => {
    res.json({ data: crystalInfo })
}

export const controller = {
    list,
    read
}

