import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res, next) => {
  res.render("newMessageForm");
});



export { newMessageRouter };
