# 🌐 Browser Extensions Manager UI

A modern and responsive **Browser Extensions Manager UI**, built using **React** and **Vite**. It allows users to view, activate, and remove browser extensions from a visually clean interface.

## 🚀 Live Demo

👉 [Click here to view the app](https://rana5ahmed.github.io/Browser-Extension/)

---

## 📌 Features

- 🖼️ Visual display of browser extensions (logo, name, description)
- ✅ Checkbox to toggle extension active/inactive state
- ❌ Remove button to delete an extension from the list
- 🌙 Light/Dark mode toggle
- ⚡ Fast development using Vite and React
- 📱 Fully responsive layout

---

## 🧰 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- HTML5, CSS3

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rana5Ahmed/Browser-Extension.git
   cd Browser-Extension
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🛠️ Build & Deploy

To build the project for production:

```bash
npm run build
```

To deploy the project to GitHub Pages:

```bash
npm run deploy
```

> Deployment will go live at:  
> `https://Rana5Ahmed.github.io/Browser-Extension/`

Make sure `vite.config.js` includes this base setting:

```js
export default defineConfig({
  base: '/Browser-Extension/',
  plugins: [react()],
})
```

---

## 📁 Folder Structure

```
Browser-Extension/
├── public/
│   └── assets/images/         # All static images used
├── src/
│   ├── components/
│   │   └── Card.jsx           # Reusable card component
│   ├── App.jsx                # Main app logic
│   ├── main.jsx               # Entry point
│   └── data.json              # Data source for extensions
├── index.html
├── vite.config.js
└── package.json
```

---


## 👩‍💻 Author

Developed by [**Rana Ahmed**](https://github.com/Rana5Ahmed)

---

## 📄 License

This project is open-source and available under the **MIT License**.
