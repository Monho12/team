import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import image from "../src/assets/meeting.png";
import not from "../src/assets/not.png";
import { ThemeProvider } from "./components/ThemeProvider";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";

const data = {
  img: image,
  not,
  text: "Instant collaborations for remote teams",
  desc: "All in one for your remote team chats, collaboration and track projects",
  text2: "Your Hub for teamwork",
  desc2:
    "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  text3: "Simple task management",
  desc3:
    "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  text4: "Scheduling that actually works",
  desc4:
    "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home {...data} />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
