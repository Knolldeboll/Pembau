import { useState } from "react";
import testimage from "./assets/aussicht.png";

// Typing: hier im State ist was vom Typ Record<Corner, boolean> drinnen.
// Die Festlegung dieses Typs hier gewährt Sicherheit, dass später nur auf korrekte, im Typ "Corner" definierte
// Indizes zum Zugriff verwendet werden können!

type Corner = "topLeft" | "bottomLeft" | "topRight" | "bottomRight";

// Partial: Ne Auswahl an Sachen.
// In diesem Fall ein/mehrere Records vom Typ Corner,bool.

// Props für den BodyFrame. Aktuell steuern die die aktiven Corners
type BodyFrameProps = {
  activeCorners?: Partial<Record<Corner, boolean>>;
  cornerColor: string;
};

// Hier default Props = leeres Objekt.
// Wenn keine Props reinkommen, kein Problem! (anscheinend)
// Dann kommt bei Zugriff drauf zumindest kein Error, sondern undefined.
// undefined kann als false gewertet werden, was bei uns passt!

// TODO: Image Source muss als Property hier reinkommen, damit man später einfach nen
// Ordner mit Bildern haben kann und dann pro Bild in der Body-Component einen Bodyframe erzeugen kann!
// TODO: Da auch alles mögliche andere definieren, z.B. TiltDegree, PositionX, PositionY, etc.
// - aber erstmal nur das Bild an sich.

const BodyFrame2 = () => {
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
    <div>
      <svg
        width="2436"
        height="1949"
        viewBox="0 0 2436 1949"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M454.632 252.163L2268.04 124.99L2298.6 436.436L1118.39 1775.85L156.539 1825.15L123.84 874.872L454.632 252.163Z"
          fill="url(#pattern0_502_558)"
        />
        <path
          d="M455 250.023L2268.04 124.99L2298.6 436.436L2346.63 1708.99L156.539 1825.15L123.84 874.872L455 250.023Z"
          fill="url(#pattern1_502_558)"
        />
        <path
          d="M454.934 252.024L583.864 589.512L124.142 874.733"
          fill="#003E3F"
        />
        <defs>
          <pattern
            id="pattern0_502_558"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_502_558"
              transform="matrix(0 -0.000411015 0.000553032 0 -0.488544 1)"
            />
          </pattern>
          <pattern
            id="pattern1_502_558"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image1_502_558"
              transform="matrix(0 -0.000304877 0.000411015 0 0 1.04497)"
            />
          </pattern>

          <image
            id="image0_502_558"
            width="2433"
            height="3575"
            href="assets/bg-1.jpg"
          />

          <image
            id="image0_502_558"
            width="2433"
            height="3575"
            href="assets/bg-2.jpg"
          />
        </defs>
      </svg>
      ;
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

export default BodyFrame2;
