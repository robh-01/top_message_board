import { Router } from "express";
import { newMessageRouter } from "./newMessageRouter.js";
import { messageDetailsRouter } from "./messageDetailsRouter.js";
import { messageListGet } from "../controllers/messageController.js";

const indexRouter = Router();



indexRouter.get("/", messageListGet);
// indexRouter.get("/", (req, res, next) => {
//   res.render("index", { title: "Mini Message-board", messages: messages });
// });

export { indexRouter };
