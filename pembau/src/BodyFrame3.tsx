import { useState } from "react";
import testimage from "./assets/pngcopytest1.png";
import testimage2 from "./assets/pngcopytest2.png";

// BodyFrame3: Variante, wo alles einfach nur als PNG gecopied wurde
// und per CSS richtig platziert wird.
//
// Die Ecken werden gerendert, indem einfach ein neues Bild mit der entsprechenden
// Ecke geladen wird. Vorteil ist, dass diese Bilder auch in exakt derselben
// Dimensionalität in Figma vorhanden sind!

//------------------------------------------

// Pro:
// - Sau einfach zu exportieren. Einfach Figma -> Export as png funzt zumindest beim
// Hintergrundbild easy!

// - Scaled mit dem CSS auch easy.
// - Lädt jetzt nicht zu ewig.

// Contra:

// - ist bisschen Heckmeck mit den Ecken-State-Kombis, aber muss man nur einmal machen
// und dann nie wieder anschauen
// - da alles abgeschlossen in einer Komponente passiert, kann man das
// eher schlecht als Konfigurierbare/wiederverwendbare Komponente machen.
// Aber andererseits passt das eher zum Content-Creation-Flow:
// Da wird sich keiner die Mühe machen, ne Komponente zu Konfigurieren
// (ausser man macht da noch ein Interface für, aber naja), viel wahrscheinlicher
// kommen da einfach neue Figma-Grafiken oder einfach direkt Bilder dazu!

//--------------------

// TODO: Corner an das aktuelle Bild anpassen.
// Sind nämlich nicht immer alle Ecken drin und damit im type nötig!
// O
type Corner = "topLeft" | "bottomLeft" | "topRight" | "bottomRight";

const BodyFrame3 = () => {
  const [cornerCollapsedState, setCornerCollapsedState] = useState<
    Record<Corner, boolean>
  >({
    topLeft: true,
    bottomLeft: true,
    topRight: true,
    bottomRight: true,
  });

  const toggleCornerCollapse = (corner: Corner) => {
    setCornerCollapsedState((prevState) => ({
      ...prevState,
      [corner]: !prevState[corner],
    }));
  };

  const resetCorners = () => {
    setCornerCollapsedState({
      topLeft: true,
      bottomLeft: true,
      topRight: true,
      bottomRight: true,
    });
  };

  const [testState, setTestState] = useState(true);

  // TODO: Divs zum Anklicken wieder einfügen!
  // Da kann man die aus bf1 wiederverwenden, aber ohne svgs drinnen.

  // TODO: Conditional Rendering von alternativen Images.
  // Fürzelkacke hihi :)
  // Das Conditional Rendering basiert auf Kombinationi von States:
  // z.B. {topLeft && bottomLeft && <img src={nicetry-topleft-bottomleft}}
  return (
    <div
      onClick={() => {
        setTestState(!testState);
      }}
    >
      {testState && (
        <img
          src={testimage}
          style={{
            zIndex: "1",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        ></img>
      )}

      {!testState && (
        <img
          src={testimage2}
          style={{
            zIndex: "1",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        ></img>
      )}
    </div>
  );

  // Am Besten so:
  // Div für alles.
  // Darunter div für Bild
  //    Da wird gekackt. hihi :%)
  // Div als Container für die 4 Ecken.
  //    Die werden conditional gerendert nach:
  //      activeCorners: welche sind für dieses Bild überhaupt da?
  //      openCorners: welche von denen sind aktuell auf/zugeklappt?
  //    Die bestehen im Endeffekt aus SVGs, die die zugeklappte Ecke + übrigbleibenden Hintergrund darstellen.
  //    Diese SVGs werden immer per CSS Placement in die jeweilige Ecke platziert -> Mit parentdiv.style.position = abhängig vom gesamt-Parent-div und dann Top 0 right 0 usw?!?
  //
};

export default BodyFrame3;
