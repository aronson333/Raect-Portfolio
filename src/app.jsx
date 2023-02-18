import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  const [selected, setSelected] = useState("about");

  return (
    <div>
      <Header setSelected={setSelected} selected={selected} />
      <main>
        {selected === "about" && <About />}
        {selected === "portfolio" && <Portfolio />}
        {selected === "resume" && <Resume />}
        {selected === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
