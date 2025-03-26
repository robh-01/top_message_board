import express from "express";
import path from "path";
import { indexRouter } from "./routers/indexRouter.js";
import { newMessageRouter } from "./routers/newMessageRouter.js";
import { messageDetailsRouter } from "./routers/messageDetailsRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

app.use("/new", newMessageRouter);
app.use("/messages", messageDetailsRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
