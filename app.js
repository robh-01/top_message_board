import express from "express";
import path from "path";
import { indexRouter } from "./routes/indexRouter.js";
import { newMessageRouter } from "./routes/newMessageRouter.js";
import { messageDetailsRouter } from "./routes/messageDetailsRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

app.use("/new", newMessageRouter);
app.use("/messages", messageDetailsRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
