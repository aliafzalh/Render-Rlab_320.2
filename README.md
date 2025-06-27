# Rendering Arrays in React

This React project demonstrates how to render nested arrays and objects using separate components. The app displays a list of learners, each with a name, bio, and multiple test scores.

## 🛠 Features

- Uses `useState` to hold an array of learners.
- Renders learner data dynamically.
- Breaks the UI into reusable components:
  - `UserList` – maps through learners.
  - `Learner` – displays learner name, bio, and scores.
  - `Score` – shows each test date and score.

## 📁 Project Structure

src/
├── components/
│ ├── UserList.jsx # Renders all learners
│ ├── Learner.jsx # Renders a single learner's info
│ └── Score.jsx # Renders a single score
├── App.jsx # Root component
├── App.css # Optional styling
└── main.jsx # Entry point (if using Vite)


## 🧪 Sample Output

Each learner displays:

- **Name**
- **Bio**
- A list of scores like:
