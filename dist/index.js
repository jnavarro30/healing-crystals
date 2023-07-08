import express from "express";
import { PrismaClient } from "@prisma/client";
import CrystalsRouter from "./routes/router.js";
const app = express();
const prisma = new PrismaClient();
const PORT = 8081;
app.use(express.json());
app.use(CrystalsRouter);
app.get("/crystals", async (_, res) => {
    try {
        const allCrystals = await prisma.crystal.findMany();
        res.status(200).json(allCrystals);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
    finally {
        await prisma.$disconnect();
    }
});
app.post("/crystals", async (req, res) => {
    try {
        const newCrystal = await prisma.crystal.create({ data: req.body });
        res.status(200).json(newCrystal);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
    finally {
        await prisma.$disconnect();
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map