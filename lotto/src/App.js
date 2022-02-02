import { useState } from "react";
import Lottozahl from "./components/Lottozahl";
import "./App.css";

function App() {
  // Erzeugt Zufallszahl zwischen min und max (inklusive)
  // Quelle: https://www.w3schools.com/js/js_random.asp
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Eigene Funktion, die einzigartige (keine Wiederholungen)
  // Zufallszahlen zwischen 1 und 49 erzeugt, in ein Array schreibt
  // und dieses Array zurückgibt (mit return)
  function erzeugeZufallsZahlen() {
    const tempArray = [];
    while (tempArray.length < 6) {
      const zufallsZahl = getRndInteger(1, 49);
      // nur pushen, wenn die Zahl noch nicht im Array ist
      if (!tempArray.includes(zufallsZahl)) {
        tempArray.push(zufallsZahl);
      }
    }
    // sortiere das Array nach Zahlen
    // (Standard-Sortierung ist nach Buchstaben)
    tempArray.sort((a, b) => a - b);
    return tempArray;
  }

  // erzeuge 6 Zufallszahlen zwischen 1...49
  const startZahlen = erzeugeZufallsZahlen();
  // erzeuge eine Zusatzzahl zwischen 0...9
  startZahlen.push(getRndInteger(1, 10));
  // console.log(array);

  // State-Array in dem die Zufallszahlen gespeichert sind
  const [zufallsZahlen, setZufallsZahlen] = useState(startZahlen);

  return (
    <main>
      <h1>Lotto 6/49</h1>
      {/* Zeige die ganze <section> nur an, wenn es auch Zufallszahlen
      gibt, d.h. das Array zufallsZahlen Elemente enthält */}
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
            // Reset-Funktion: setzt die state-Variable auf ein
            // leeres Array
            setZufallsZahlen([]);
          }}
        >
          Zahlen Löschen
        </button>
        <button
          onClick={() => {
            // Neue Zahlen generierien
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
