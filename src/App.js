import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import image from "../src/assets/meeting.png";
import img from "../src/assets/speed.jpeg";
import img1 from "../src/assets/crowd.svg";
import not from "../src/assets/not.png";
import { ThemeProvider } from "./components/ThemeProvider";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contact, Getaccess, Login } from "./components";

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

const data2 = {
  text: "Blog posts",
  desc: "Our latest updates and blogs about managing your team",
};

const data3 = {
  text: "10 Secrets for managing a remote team",
  text2:
    "If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!",
  text3:
    "In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.",
  text4:
    "Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.",
  text5:
    "Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.",
  text6:
    "Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.",
  name: "Darren Watkins Jr",
  date: "2nd january,2022",
  img: img,
  image: img1,
  text7: "Written by",
  text8: "CEO Team App"
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home {...data} />} />
          <Route path="/products" element={<Products {...data2} />} />
          <Route path="/services" element={<Services {...data3} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getaccess" element={<Getaccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
