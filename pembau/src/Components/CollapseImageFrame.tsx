import { ImageData } from "../types/ImageData";

type Corner = "topLeft" | "topRight" | "bottomRight" | "bottomLeft";

type CornerData = {
  horPercent: number;
  vertPercent: number;
};
interface CollapseImageFrameProps {
  image: ImageData;

  // partial: 0-alle elemente aus ner Auswahl.
  // die Auswahl ist hier die Kombinationsmöglichkeiten aus Strings im Typ "Corner" und zugehöriger Data
  folds?: Partial<Record<Corner, CornerData>>;
}

// TODO: einzelner State für alle Collapse oder nicht.
// Dann muss man nicht so dumm alles machen.

export const CollapseImageFrame = ({
  image,
  folds,
}: CollapseImageFrameProps) => {
  //Existenz von Folds prüfen: wenn nicht da, dann undefined. Dann auch kein dreieck oder Mask rendern!
  console.log("Collapse Folds: ", folds);

  // TODO: irgendwo das Aspect Ratio herbekommen.
  // Da die Bilddateien vorgegeben sind und später nicht gestretched werden,
  // kann man auch vor der Laufzeit schon die ARs bestimmen.
  // Wenn man später z.B. d

  // immer zw. 5 und 25
  // const topRightTop = Math.random() * 20 + 5  //
  // const topRightRight = Math.random() * 20 + 5  //

  const topRightTop = 10;
  const topRightRight = 20;
  // calc the angle of the hypothenusis

  // TODO: Aspect Ratio mit einfließen lassen! Anfangs war das 1:1, das hat sich rausgekürzt.
  // z.B. bei 1:1.5 also 1* a und 1.5 * b oder so verwenden!

  const dx = (topRightTop / 100) * image.width;
  const dy = (topRightRight / 100) * image.height;

  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);

  let counterAngle = 180 - 2 * angleDeg;

  //console.log()
  // denn 20% auf der kurzen seite sind ggf. weniger als 20% auf der anderen seite, auch wenns gleich aussieht.

  // ggf. umtauschen probieren! vielleicht falscher winkel eingesetellt vorhin aus versehen

  // angle aktuell falsch, weil da die falschen params berechnet werden.

  /*
  let angle =
    180 -
    2 *
      (Math.atan(((topRightRight * image.height) / topRightTop) * image.width) *
        (180 / Math.PI));

        */

  //console.log(image)
  // console.log("image hat width udn height nun:", image.width, image.height);

  console.log("angle", counterAngle);

  // console.log("ar1:", ar1, "ar2", ar2);

  // pos relative, damit die ecken Absolute platziert werden können!

  // TODO: Bei polygon noch mit ´´ Arbeiten, damit man die Werte von oben einbinden kann!

  // TODO: Polygon basiert auf gegebenen Folds! ggf. sollte das Polygon vor dem Mount berechnet werden!
  // Die Fold-Punkte in "polygon"-Werte umrechnen also!
  // ggf. kann man alle MÖGLICHEN folds aus dem Partial durchgehen, und pro fold in den polygonstring 2 punkte (wenn vorhanden) einfügen, ansonsten die Ecke!

  let polygonString = ``;
  if (folds) polygonString = generatePolyonString(folds);

  // jetzt die Angles, die d

  let triangles = <></>;
  if (folds) triangles = generateFoldTriangles(folds);

  // unten muss rein: angle,

  console.log("triangles", triangles);
  console.log("polystring", polygonString);

  return (
    <div
      className="collapseimageframe"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <img
        src={image.url}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          clipPath: polygonString,
        }}
      ></img>

      {folds?.topLeft && (
        <svg
          className="toprightcorner"
          style={{
            position: "absolute",
            width: folds.topLeft.horPercent + "%",
            height: folds.topLeft.vertPercent + "%",
            top: "0",
            left: "0",
            scale: "-1 1",
            rotate: `${getCornerAngle("topLeft", image.width, image.height, folds.topLeft)}deg`,
            transformOrigin: "",
            fill: "#386638",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 0,100"></polygon>
        </svg>
      )}

      {folds?.topRight && (
        <svg
          className="toprightcorner"
          style={{
            position: "absolute",
            width: folds.topRight.horPercent + "%",
            height: folds.topRight.vertPercent + "%",
            top: "0",
            right: "0",
            scale: "-1 1",
            rotate: `${getCornerAngle("topRight", image.width, image.height, folds.topRight)}deg`,
            transformOrigin: "",
            fill: "#386638",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 100,100"></polygon>
        </svg>
      )}

      {folds?.bottomRight && (
        <svg
          className="toprightcorner"
          style={{
            position: "absolute",
            width: folds.bottomRight.horPercent + "%",
            height: folds.bottomRight.vertPercent + "%",
            bottom: "0",
            right: "0",
            scale: "-1 1",
            rotate: `${getCornerAngle("bottomRight", image.width, image.height, folds.bottomRight)}deg`,
            transformOrigin: "",
            fill: "#386638",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="100,0 100,100 0,100"></polygon>
        </svg>
      )}
      {folds?.bottomLeft && (
        <svg
          className="toprightcorner"
          style={{
            position: "absolute",
            width: folds.bottomLeft.horPercent + "%",
            height: folds.bottomLeft.vertPercent + "%",
            bottom: "0",
            left: "0",
            scale: "-1 1",
            rotate: `${getCornerAngle("bottomLeft", image.width, image.height, folds.bottomLeft)}deg`,
            fill: "#386638",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,100 0,100"></polygon>
        </svg>
      )}
    </div>
  );
};

const generatePolyonString = (folds: Partial<Record<Corner, CornerData>>) => {
  let polygonString = "polygon(";

  folds.topLeft
    ? (polygonString += `0% ${folds.topLeft.vertPercent}%, ${folds.topLeft.horPercent}% 0%`)
    : (polygonString += "0% 0%");
  folds.topRight
    ? (polygonString += `, ${100 - folds.topRight.horPercent}% 0%, 100% ${folds.topRight.vertPercent}%`)
    : (polygonString += ", 100% 0%");
  folds.bottomRight
    ? (polygonString += `, 100% ${100 - folds.bottomRight.vertPercent}%, ${100 - folds.bottomRight.horPercent}% 100%`)
    : (polygonString += ", 100% 100%");
  folds.bottomLeft
    ? (polygonString += `, ${folds.bottomLeft.horPercent}% 100%, 0% ${100 - folds.bottomLeft.vertPercent}%`)
    : ", 0% 100%";

  polygonString += ")";
  return polygonString;
  // TODO: Polygonstring zusammenbauen, je nach vorhandenheit der Folds
};

const generateFoldTriangles = (folds: Partial<Record<Corner, CornerData>>) => {
  let corners = Object.keys(folds) as Array<Corner>;
  //console.log("corners at triangle gen:", corners);

  //For each key/fold, calculate Angle

  return (
    <>
      {folds.topLeft && <svg></svg>}
      {folds.topRight}
    </>
  );
};

const getCornerAngle = (
  corner: Corner,
  width: number,
  height: number,
  cornerData: CornerData,
) => {
  // TODO: Vielleicht kann man da Sachen generalisieren, z.B. dx dy berechnung etc.
  // eig. ja, das ist ja immer dasselbe

  // 1. Winkel zw. oberer Rand und cutaxis berechnen.
  const dx = (cornerData.horPercent / 100) * width;
  const dy = (cornerData.vertPercent / 100) * height;
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);

  // Test: erstmal nur 10, dann schauen.
  let counterAngle = 180 - 2 * angleDeg;

  switch (corner) {
    case "topRight":
      return -counterAngle;

    case "bottomRight":
      return counterAngle;

    case "bottomLeft":
      return -counterAngle;

    case "topLeft":
      return counterAngle;

    default:
      return 0;
  }

  /* 
  const topRightTop = 10;
  const topRightRight = 20;
  // calc the angle of the hypothenusis

  // TODO: Aspect Ratio mit einfließen lassen! Anfangs war das 1:1, das hat sich rausgekürzt.
  // z.B. bei 1:1.5 also 1* a und 1.5 * b oder so verwenden!

  const dx = (topRightTop / 100) * image.width;
  const dy = (topRightRight / 100) * image.height;

  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);

  let counterAngle = 180 - 2 * angleDeg;* */
};
