import express from "express";
const router = express.Router();
import { controller } from "./controller.js";

router.route("/").get(controller.list);

router.route("/:name").get(controller.read);

export default router;
