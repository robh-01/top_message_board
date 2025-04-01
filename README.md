# Mini Messageboard
[Visit here!](https://mini-message-board-robh-01.onrender.com/)
A simple message board application built using Express, EJS and Postgres for db.

## Features

- Displays a list of messages with usernames and timestamps
- Users can add new messages through a form
- Each message has an "open" button to view its details

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/robh-01/top_message_board.git
   cd top_message_board
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Routes

- **GET /** - Displays all messages
- **GET /new** - Displays the message submission form
- **POST /new** - Handles new message submission and redirects to `/`

## How It Works

1. The messages are stored in an array inside `index.js`.
2. The homepage loops through the array and displays all messages.
3. The form at `/new` allows users to add new messages.
4. New messages are added to the array and displayed on the homepage.
5. Each message has an "open" button to view details on a separate page.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)

## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).
