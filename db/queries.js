import pool from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function addNewMessage(username, message) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
  return 1; //success
}

export async function getMessage(messageId) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=$1;`, [
    messageId,
  ]);
  return rows[0];
}
