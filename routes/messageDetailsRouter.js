import { Router } from "express";
import { messageDetailsGet } from "../controllers/messageController.js";

const messageDetailsRouter = Router();

messageDetailsRouter.get("/:messageIndex", messageDetailsGet);

export { messageDetailsRouter };
