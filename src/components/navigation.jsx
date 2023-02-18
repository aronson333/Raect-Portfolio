export default function Navigation({ setSelected, selected }) {
  return (
    <ul>
      <li>
        <button
          className={selected === "about" ? "active" : ""}
          onClick={() => setSelected("about")}
        >
          About Me
        </button>
      </li>
      <li>
        <button
          className={selected === "portfolio" ? "active" : ""}
          onClick={() => setSelected("portfolio")}
        >
          Portfolio
        </button>
      </li>
      <li>
        <button
          className={selected === "resume" ? "active" : ""}
          onClick={() => setSelected("resume")}
        >
          Resume
        </button>
      </li>
      <li>
        <button
          className={selected === "contact" ? "active" : ""}
          onClick={() => setSelected("contact")}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}
