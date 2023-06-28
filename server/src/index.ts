import express from "express";
import CrystalsRouter from './router.js';
const app = express();
const PORT = 8000;

app.use(CrystalsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
