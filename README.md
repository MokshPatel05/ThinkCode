# ThinkCode - AI Chat Application

ThinkCode is a modern, full-stack AI chat application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a sleek, ChatGPT-like interface for users to interact with AI models, manage chat history, and create new conversation threads.

![ThinkCode Demo](frontend/public/demo.png)

## 🚀 Features

- **Real-time AI Chat**: Interact with advanced AI models (powered by OpenAI GPT-4o-mini).
- **Thread Management**: Create, view, and delete chat threads. History is saved to MongoDB.
- **Sleek UI/UX**: A dark-themed, responsive interface inspired by modern chat applications.
- **Markdown Support**: AI responses support code syntax highlighting and Markdown formatting.
- **Typing Animation**: Smooth typing effect for AI responses.
- **Responsive Sidebar**: Collapsible sidebar for easy navigation of chat history.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Context API, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: OpenAI API
- **Tools**: Nodemon, React Icons, React Spinners

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ThinkCode.git
   cd ThinkCode
   ```

2. **Backend Setup**

   ```bash
   cd Backend
   npm install
   ```

   - Create a `.env` file in the `Backend` directory:
     ```env
     PORT=8080
     MONGODB_URI=your_mongodb_connection_string
     OPENAI_API_KEY=your_openai_api_key
     ```
   - Start the server:
     ```bash
     npm start
     # or for development
     npm run dev
     ```

3. **Frontend Setup**

   ```bash
   cd Frontend
   npm install
   ```

   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the App**
   - Open your browser and navigate to `http://localhost:5173`

## 📂 Project Structure

```
ThinkCode/
├── Backend/           # Node.js & Express server
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API endpoints
│   ├── utils/         # Helper functions (OpenAI)
│   └── server.js      # Entry point
│
└── Frontend/          # React Vite application
    ├── src/
    │   ├── assets/    # Images & static files
    │   ├── Chat.jsx   # Chat component
    │   ├── Sidebar.jsx # History sidebar
    │   └── main.jsx   # React entry
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
