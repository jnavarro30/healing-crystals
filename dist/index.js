import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();
const PORT = 8081;
app.use(express.json());
app.get("/all", async (_, res) => {
    try {
        const all = await prisma.crystal.findMany();
        res.status(200).json(all);
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