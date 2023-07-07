import express from "express";
import CrystalsRouter from './routes/router.js';
const app = express();
const PORT = 8081;
app.use(CrystalsRouter);
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map