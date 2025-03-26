import { Router } from "express";
import { newMessageRouter } from "./newMessageRouter.js";
import { messageDetailsRouter } from "./messageDetailsRouter.js";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Message-board", messages: messages });
});

newMessageRouter.post("/", (req, res, next) => {
  const { user, text } = req.body;
  messages.push({
    text,
    user,
    added: new Date(),
  });
  res.redirect("/");
});

messageDetailsRouter.get("/:messageIndex", (req, res, next) => {
  res.render("messageDetails", { message: messages[req.params.messageIndex] });
});

export { indexRouter };
