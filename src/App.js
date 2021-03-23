import "./styles.css";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState("list");

  const names = ["mike", "matt", "Avery"];

  const handleClick = () => {
    if (view === "list") {
      setView("grid");
    } else {
      setView("list");
    }
  };

  const nameList = names.map((name) => <li>{name}</li>);
  return (
    <div className="App">
      {view === "list" ? (
        <ul>{nameList}</ul>
      ) : (
        <div className="grid">{nameList}</div>
      )}
      <button onClick={handleClick}>View / Grid</button>
    </div>
  );
}
