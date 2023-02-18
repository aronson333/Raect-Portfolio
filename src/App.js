import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";

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
