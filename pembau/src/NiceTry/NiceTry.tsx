import { useState } from "react";

import imgBl from "./nicetry-bl.png";
import imgBrBl from "./nicetry-br-bl.png";
import imgBr from "./nicetry-br.png";
import imgTrBl from "./nicetry-tr-bl.png";
import imgTrBrBl from "./nicetry-tr-br-bl.png";
import imgTrBr from "./nicetry-tr-br.png";
import imgTr from "./nicetry-tr.png";
import img from "./nicetry.png";

// NiceTry: Bodyframe- Variante, wo alles einfach nur als PNG gecopied wurde
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
// - Die vielen einzelnen Bilder für jede Kombinationsmöglichkeit müssen alle
// immer bei der Seite mitgeladen werden! Das bloated auf Dauer den Datenverkehr
// und die Ladezeit und Speicher.
// ggf. kann man für die img sources Lazy Loading von nem externen Server machen.

//--------------------

// TODO: Corner an das aktuelle Bild anpassen.
// Sind nämlich nicht immer alle Ecken drin und damit im type nötig!
// O
type Corner = "topLeft" | "bottomLeft" | "topRight" | "bottomRight";

const NiceTry = () => {
  const [cornerCollapsedState, setCornerCollapsedState] = useState<
    Record<Corner, boolean>
  >({
    topLeft: false,
    bottomLeft: true,
    topRight: false,
    bottomRight: true,
  });

  // Ändere den State für eine Corner
  const toggleCornerCollapse = (corner: Corner) => {
    setCornerCollapsedState((prevState) => ({
      ...prevState,
      [corner]: !prevState[corner],
    }));
  };

  // Mach alle Ecken auf oder zu.
  const toggleAllCorners = () => {
    console.log("toggleallcorners: statekey ist ", getStateKey());
    if (getStateKey() == "111") {
      // Alle auf: alle zu.
      setCornerCollapsedState({
        topLeft: false,
        bottomLeft: false,
        topRight: false,
        bottomRight: false,
      });
    } else {
      // Irgendeine zu: alle auf.
      setCornerCollapsedState({
        topLeft: false,
        bottomLeft: true,
        topRight: true,
        bottomRight: true,
      });
    }
  };

  // Wandelt die Corner-States in nen Key-String mit 3 Bits um.
  const getStateKey = () =>
    [
      cornerCollapsedState.topRight,
      cornerCollapsedState.bottomRight,
      cornerCollapsedState.bottomLeft,
    ]
      .map((value) => (value ? "1" : "0"))
      .join("");

  const IMAGE_MAP: Record<string, string> = {
    "000": img,
    "001": imgBl,
    "010": imgBr,
    "011": imgBrBl,
    "100": imgTr,
    "101": imgTrBl,
    "110": imgTrBr,
    "111": imgTrBrBl,
  };
  // CheckCorners checkt mit ner Switch, welches Bild aktuell gerendert werden muss
  // und returnt dieses.
  // Wird einmal beim Rerender aufgerufen und reagiert damit auf die nun neuen States.

  // Hart unsauber und Janky! wtf ey!
  const checkCorners = () => {
    const imgkey = getStateKey();
    //console.log("checke corners für image und erhalte key:", imgkey);
    //console.log("state ist", cornerCollapsedState);

    const imgsrc = IMAGE_MAP[imgkey];

    console.log("imagesource ist", imgsrc);
    return imgsrc;
  };

  // Hier kommt der Image-Source-String entsprechend der States rein.
  const currentImgSrc = checkCorners();

  // TODO: Divs zum Anklicken wieder einfügen!
  // Da kann man die aus bf1 wiederverwenden, aber ohne svgs drinnen.

  // TODO: Conditional Rendering von alternativen Images.
  // Fürzelkacke hihi :)
  // Das Conditional Rendering basiert auf Kombinationi von States:
  // z.B. {topLeft && bottomLeft && <img src={nicetry-topleft-bottomleft}}
  return (
    <div>
      <img
        src={currentImgSrc}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          pointerEvents: "auto",
        }}
        onClick={() => {
          console.log("img glicked");
          toggleAllCorners();
        }}
      ></img>

      {/*TopRightCorner 
      
      // TODO: Die Corners kann man vielleicht exportieren und dann in den About/Aussicht/ etc. Components reusen
      */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          right: "4%",
          width: "20%",
          aspectRatio: "1/1.3",
          transform: "rotate(-5deg)",
          zIndex: "15",
        }}
        onClick={() => {
          console.log("topright glicked");
          toggleCornerCollapse("topRight");
        }}
      ></div>

      {/*BottomRightCorner */}
      <div
        style={{
          position: "absolute",
          bottom: "7%",
          right: "2%",
          width: "37%",
          height: "50%",
          transform: "rotate(-4deg)",
          zIndex: "15",
        }}
        onClick={() => {
          console.log("bottomright glicked");
          toggleCornerCollapse("bottomRight");
        }}
      ></div>

      {/*BottomLeftCorner */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "2%",
          width: "55%",
          height: "73%",
          transform: "rotate(-2.5deg)",
          zIndex: "15",
        }}
        onClick={() => {
          console.log("bottomleft glicked");
          toggleCornerCollapse("bottomLeft");
        }}
      ></div>
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

export default NiceTry;
