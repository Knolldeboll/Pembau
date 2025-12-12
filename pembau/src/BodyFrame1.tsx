import testimage from "./assets/testimage.png";
const BodyFrame1 = () => {
  // TODO: Image Source muss als Property hier reinkommen, damit man später einfach nen
  // Ordner mit Bildern haben kann und dann pro Bild in der Body-Component einen Bodyframe erzeugen kann!

  // TODO: Da auch alles mögliche andere definieren, z.B. TiltDegree, PositionX, PositionY, etc.
  // - aber erstmal nur das Bild an sich.
  return (
    <div className="bodyframe1-instance">
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
      <div
        className="leftuppercorner"
        style={{
          position: "absolute",
          width: "10%",
          aspectRatio: "1",
          backgroundColor: "grey",
          top: "0",
          left: "0",
          zIndex: "10",
        }}
      >
        {" "}
        LeftUpperCorner
      </div>

      <div
        className="leftlowercorner"
        style={{
          position: "absolute",
          width: "10%",
          aspectRatio: "1",
          backgroundColor: "grey",
          bottom: "0",
          left: "0",
          zIndex: "10",
        }}
      >
        LeftLowerCorner
      </div>
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
