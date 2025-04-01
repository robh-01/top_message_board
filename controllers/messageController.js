import * as queries from "../db/queries.js";
import { formatDate } from "../utils/formatDate.js";
import { addNewMessage, getMessage } from "../db/queries.js";

export async function messageListGet(req, res) {
  let messages = await queries.getAllMessages();
  messages = messages.map((messageObject) => ({
    ...messageObject,
    added: formatDate(messageObject.added),
  }));
  res.render("index", { title: "Mini Message-board", messages });
}

export async function addMessageGet(req, res) {
  res.render("newMessageForm");
}

export async function addMessagePost(req, res) {
  const { user, text } = req.body;
  await addNewMessage(user, text);
  res.redirect("/");
}

export async function messageDetailsGet(req, res) {
  const message = await getMessage(+req.params.messageIndex);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  // Format the date before rendering
  message.added = formatDate(message.added);
  res.render("messageDetails", { message });
}
