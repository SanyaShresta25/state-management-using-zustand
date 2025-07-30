# Next.js Todos App with Zustand & Tailwind CSS

A simple, responsive todo app built using:

![Zustand](https://img.shields.io/badge/Zustand-%F0%9F%A7%A0%20State%20Manager-f3f4f6?style=flat-square&logo=zustand&logoColor=4B5563&labelColor=E5E7EB)
![Next.js](https://img.shields.io/badge/Next.js-%E2%9A%A1%20v15%20App%20Router-f3f4f6?style=flat-square&logo=next.js&logoColor=000000&labelColor=E5E7EB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%F0%9F%8E%A8%20Utility%20First-f3f4f6?style=flat-square&logo=tailwind-css&logoColor=38B2AC&labelColor=E5E7EB)
![DummyJSON API](https://img.shields.io/badge/DummyJSON_API-%F0%9F%8C%90%20Mock%20Todos-f3f4f6?style=flat-square&logo=json&logoColor=FBBF24&labelColor=E5E7EB)


---

## 🛠️ Features

* Fetch todos from remote API
* Display todos with completion status
* Zustand for global state management
* Tailwind CSS for modern responsive UI
* Client-side rendered with App Router (`app/` folder)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SanyaShresta25/state-management-using-zustand.git
cd zustand

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧱 Folder Structure

```
.
├── app/
│   ├── layout.tsx
│   └── page.tsx          # Renders <Counter />
├── components/
│   └── Counter.tsx       # Main UI component
├── store.ts              # Zustand store
├── public/
│   └── screenshot.png    # Optional preview image
├── styles/
│   └── globals.css       # Tailwind directives
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🧠 How Zustand is Used

* `count`: a simple counter with an increment function
* `todos`: todos fetched from the DummyJSON API
* Shared across components using `useStore()`

```ts
const { todos, setTodos } = useStore()
```

---

## 🔗 API Used

**GET** `https://dummyjson.com/todos`

Returns:

```json
{
  "todos": [
    { "id": 1, "todo": "Do something", "completed": false, "userId": 1 },
    ...
  ]
}
```

---

## 🚀 Tech Stack

| Tech          | Purpose                   |
| ------------- | ------------------------- |
| Next.js       | App framework             |
| TypeScript    | Type safety               |
| Tailwind CSS  | Utility-first styling     |
| Zustand       | Global state management   |
| DummyJSON API | Fake JSON API for testing |


---

## 👩‍💼 Author

Built by [Sanya](https://github.com/SanyaShresta25) ❤️
