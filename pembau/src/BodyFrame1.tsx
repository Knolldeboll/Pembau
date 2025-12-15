import { useState } from "react";
import testimage from "./assets/testimage.png";

type Corner = "topLeft" | "bottomLeft" | "topRight" | "bottomRight";

const BodyFrame1 = () => {
  // State mit Info über den Collapsed-Zustand der Ecken.

  // Typing: hier im State ist was vom Typ Record<Corner, boolean> drinnen.
  // Die Festlegung dieses Typs hier gewährt Sicherheit, dass später nur auf korrekte, im Typ "Corner" definierte
  // Indizes zum Zugriff verwendet werden können!

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
  // TODO: Image Source muss als Property hier reinkommen, damit man später einfach nen
  // Ordner mit Bildern haben kann und dann pro Bild in der Body-Component einen Bodyframe erzeugen kann!

  // TODO: Da auch alles mögliche andere definieren, z.B. TiltDegree, PositionX, PositionY, etc.
  // - aber erstmal nur das Bild an sich.

  // TODO: ggf. die Einzelnen Ecken Extrahieren, dann Später als Objekte in die Params Passen!
  // So kann von Zentral aus gesteuert werden, welche Bodyframes welche Ecken haben!

  return (
    <div className="bodyframe1-instance">
      {/*Main Image*/}
      <img
        src={testimage}
        style={{
          zIndex: "1",
          width: "100%",
          height: "auto",
          display: "block",
        }}
        alt="Bild hier"
      ></img>

      {/*"UpperLeftCorner"*/}

      <div
        className="leftuppercorner"
        style={{
          position: "absolute",
          width: "10%",
          aspectRatio: "1",

          top: "-1px",
          left: "-1px",
          zIndex: "10",
        }}
        onClick={(e) => {
          toggleCornerCollapse("topLeft");
        }}
      >
        {/*Gehen Klicks durch das SVG durch?!*/}
        {cornerCollapsedState.topLeft && (
          <svg viewBox="0 0 100 100">
            <path d="M0 0 L100 0 L0 100 L0 0" fill="cadetblue" />
            <path d="M100 100 L0 100 L100 0 L100 100" fill="black" />
          </svg>
        )}
      </div>

      {/*"BottomLeftCorner"*/}

      {cornerCollapsedState.bottomLeft && (
        <div
          className="leftlowercorner"
          style={{
            position: "absolute",
            width: "15%",
            aspectRatio: "1",
            backgroundColor: "cadetblue",
            bottom: "-1px",
            left: "-1px",
            zIndex: "10",
          }}
          onClick={(e) => {
            toggleCornerCollapse("bottomLeft");
          }}
        >
          BLC
        </div>
      )}
    </div>
  );

  // Wie machen wir die Bilder mit den Ecken?!?
  // Zum Glück gibts insgesamt nur 4 bzw. 5 Ecken derselben Form und Position! Die kann man wiederverwenden.

  // Also auf jeden Fall so:
  // Returnt wird das Bild, und state-conditional eben auch die Ecken.
  // Die Ecken an sich werden mit SVGS gemacht, da wir die genauen Paths von Figma kopieren können.
  //
  // Anzeige also immer: Bild + ggf. eingeklappte Eck-SVGs.

  // Wenn eingeklappt, werden tatsächlich zwei Formen angezeigt:
  // Einmal die eingeklappte Ecke an sich, die hat dann die Farbe der "Rückseite" des Fotos, die pro Bodyframe
  // verschieden ist.
  // Dann noch einmal dieselbe Form, die an der Knickkante gespiegelt ist, und die Hintergrundfarbe besitzt!
  //

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

export default BodyFrame1;
