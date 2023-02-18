import Navigation from "./navigation";

export default function Header({ setSelected, selected }) {
  return (
    <header>
      <div>
        <h1 id="home">Adam Aronson</h1>
        <Navigation setSelected={setSelected} selected={selected} />
      </div>
    </header>
  );
}
