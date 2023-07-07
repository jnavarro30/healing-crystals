import express from "express";
const router = express.Router();
import { controller } from "./controller.js";

router.route("/").get(controller.list);

// router.route("/crystals/:name").get(controller.read);

// router.route("/all").get(controller.listInfo);

export default router;
