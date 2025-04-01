import { Router } from "express";
import {
  addMessageGet,
  addMessagePost,
} from "../controllers/messageController.js";
const newMessageRouter = Router();

newMessageRouter.get("/", addMessageGet);

newMessageRouter.post("/", addMessagePost);

export { newMessageRouter };
