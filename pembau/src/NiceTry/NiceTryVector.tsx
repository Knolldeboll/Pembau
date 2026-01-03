import { useState } from "react";
import testimage from "./nicetry.png";

// Typing: hier im State ist was vom Typ Record<Corner, boolean> drinnen.
// Die Festlegung dieses Typs hier gewährt Sicherheit, dass später nur auf korrekte, im Typ "Corner" definierte
// Indizes zum Zugriff verwendet werden können!

// ----------------- BodyFrame mit Eck-bedeckenden SVGs, aber extra an NiceTry angepasste SVGs!

type Corner = "topLeft" | "bottomLeft" | "topRight" | "bottomRight";

// Partial: Ne Auswahl an Sachen.
// In diesem Fall ein/mehrere Records vom Typ Corner,bool.

// Props für den BodyFrame. Aktuell steuern die die aktiven Corners

// Hier default Props = leeres Objekt.
// Wenn keine Props reinkommen, kein Problem! (anscheinend)
// Dann kommt bei Zugriff drauf zumindest kein Error, sondern undefined.
// undefined kann als false gewertet werden, was bei uns passt!

// TODO: Image Source muss als Property hier reinkommen, damit man später einfach nen
// Ordner mit Bildern haben kann und dann pro Bild in der Body-Component einen Bodyframe erzeugen kann!
// TODO: Da auch alles mögliche andere definieren, z.B. TiltDegree, PositionX, PositionY, etc.
// - aber erstmal nur das Bild an sich.

const cornerColor = "black";

const NiceTryVector = () => {
  // TODO: Props anlegen, die steuern, welche Ecken gerendert werden.
  // TODO: Type für die Props anlegen, siehe GPT-Vorschlag mit ts.Partial
  // TODO: Erweiterte Props für die Ecken, mit "Percentage" für die Größe der Ecke und ggf. später "Angle" für Winkel der Faltung
  // Auch mit "Color" für die BG-Color der Ecken-Rückseite.

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
  // Corners sind hier immer divs mit SVGs drinnen.
  // Divs zum Anklicken und SVGs zur Anzeige, die je nach State auch nicht gerendert werden können!
  // Wenn man komplett die divs ausschalten würde, dann könnte man nicht mehr zurückklicken!

  return (
    <>
      {/*Main Image*/}
      <img
        src={testimage}
        style={{
          zIndex: "1",
          width: "2191.67px",
          height: "1573.38px",
          display: "block",
        }}
        alt="Bild hier"
        onClick={() => {
          resetCorners();
        }}
      ></img>

      {/*"UpperLeftCorner"*/}

      <div
        style={{
          position: "absolute",
          width: "10%",
          aspectRatio: "1/1",
          top: "-1px",
          left: "-1px",

          zIndex: 10,
        }}
        onClick={() => {
          toggleCornerCollapse("topLeft");
        }}
      >
        {cornerCollapsedState.topLeft && (
          <svg
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              transform: "rotate(0deg)",
            }}
            viewBox="0 0 100 100"
          >
            <path d="M0 0 L100 0 L0 100 L0 0" fill="#f5f5f5" />
            <path d="M100 100 L0 100 L100 0 L100 100" fill={cornerColor} />
          </svg>
        )}
      </div>

      {/*"BottomLeftCorner"*/}

      <div
        style={{
          position: "absolute",
          width: "15%",
          aspectRatio: "1",
          bottom: "-1px",
          left: "-1px",
          zIndex: 10,
        }}
        onClick={() => {
          toggleCornerCollapse("bottomLeft");
        }}
      >
        {cornerCollapsedState.bottomLeft && (
          <svg
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              transform: "rotate(270deg)",
            }}
            viewBox="0 0 100 100"
          >
            <path d="M0 0 L100 0 L0 100 L0 0" fill="#f5f5f5" />
            <path d="M100 100 L0 100 L100 0 L100 100" fill={cornerColor} />
          </svg>
        )}
      </div>

      {/*"BottomRightCorner"*/}

      <div
        style={{
          position: "absolute",
          /* br */
          height: "901.24px",
          width: "874.93px",
          left: "60.37%",
          right: "1.62%",
          top: "44.41%",
          bottom: "3.18%",
        }}
        onClick={() => {
          toggleCornerCollapse("bottomRight");
        }}
      >
        {cornerCollapsedState.bottomRight && (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 846 902"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M845.942 30.2442V853.244L39.9417 901.244L845.942 30.2442Z"
              fill="#D9D9D9"
            />
            <path
              d="M40.5423 900.766L874.014 0L0 38.0409L40.5423 900.766Z"
              fill="#1A1A1A"
            />
          </svg>
        )}
      </div>

      {/*"TopRightCorner"*/}

      <div
        style={{
          position: "absolute",
          width: "15%",
          aspectRatio: "1",
          top: "-1px",
          right: "-1px",
          zIndex: 10,
        }}
        onClick={() => {
          toggleCornerCollapse("topRight");
        }}
      >
        {cornerCollapsedState.topRight && (
          <svg
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              transform: "rotate(90deg)",
            }}
            viewBox="0 0 100 100"
          >
            <path d="M0 0 L100 0 L0 100 L0 0" fill="#f5f5f5" />
            <path d="M100 100 L0 100 L100 0 L100 100" fill={cornerColor} />
          </svg>
        )}
      </div>
    </>
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

export default NiceTryVector;
