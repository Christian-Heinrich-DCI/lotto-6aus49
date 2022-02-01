import { useState } from "react";
import Lottozahl from "./components/Lottozahl";
import "./App.css";

// Erzeugt Zufallszahl zwischen min und max (inklusive)
// Quelle: https://www.w3schools.com/js/js_random.asp

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  function erzeugeZufallsZahlen(max) {
    const tempArray = [];
    while (tempArray.length < max) {
      const zufallsZahl = getRndInteger(1, 49);
      if (!tempArray.includes(zufallsZahl)) {
        tempArray.push(zufallsZahl);
      }
    }
    tempArray.sort((a, b) => a - b);
    return tempArray;
  }
  // erzeuge 6 Zufallszahlen zwischen 1...49
  const startZahlen = erzeugeZufallsZahlen(6);
  // erzeuge eine Zusatzzahl zwischen 0...9
  startZahlen.push(getRndInteger(1, 10));
  // console.log(array);

  // State-Array in dem die Zufallszahlen gespeichert sind
  const [zufallsZahlen, setZufallsZahlen] = useState(startZahlen);

  return (
    <main>
      <h1>Lotto 6/49</h1>
      {zufallsZahlen.length > 0 ? (
        <section className="kreis-container">
          <Lottozahl zahl={zufallsZahlen[0]} />
          <Lottozahl zahl={zufallsZahlen[1]} />
          <Lottozahl zahl={zufallsZahlen[2]} />
          <Lottozahl zahl={zufallsZahlen[3]} />
          <Lottozahl zahl={zufallsZahlen[4]} />
          <Lottozahl zahl={zufallsZahlen[5]} />
          <Lottozahl zahl={zufallsZahlen[6]} zusatz={true} />
        </section>
      ) : undefined}
      <nav>
        <button
          onClick={() => {
            setZufallsZahlen([]);
          }}
        >
          Zahlen Löschen
        </button>
        <button
          onClick={() => {
            setZufallsZahlen([
              ...erzeugeZufallsZahlen(6),
              getRndInteger(1, 10),
            ]);
          }}
        >
          Neue Lottozahlen
        </button>
      </nav>
    </main>
  );
}

export default App;
