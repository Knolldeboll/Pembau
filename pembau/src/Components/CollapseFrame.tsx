import { useState, ReactNode } from "react";

export type Corner = "topLeft" | "topRight" | "bottomRight" | "bottomLeft";


export type CornerData = {
  horPercent: number;
  vertPercent: number;
  perma?: boolean;
};




interface CollapseFrameProps {
  children: ReactNode;
  /** Width in vw units */
  width: number;
  /** Height in vw units */
  height: number;
  // partial: 0-alle elemente aus ner Auswahl.
  // die Auswahl ist hier die Kombinationsmöglichkeiten aus Strings im Typ "Corner" und zugehöriger Data
  folds?: Partial<Record<Corner, CornerData>>;
  foldColor?: string;
  bgColor?: string;
  /**Rotation vom ganzen Frame */
  rotation: number;
  initiallyCollapsed?: boolean;
  toggleOnce?: boolean;
}

// TODO: einzelner State für alle Collapse oder nicht.
// Dann muss man nicht so dumm alles machen. -ah.

// TODO: Manche Objekte aus den Children sollen erst beim Anklicken des CollapseFrames angezeigt werden - 
// Dieser State muss also irgendwie zugänglich sein.


export const CollapseFrame = ({
  children,
  width,
  height,
  folds,
  rotation,
  bgColor,
  foldColor,
  initiallyCollapsed = true,
  toggleOnce = false,
}: CollapseFrameProps) => {
  //Existenz von Folds prüfen: wenn nicht da, dann undefined. Dann auch kein dreieck oder Mask rendern!
  // console.log("Collapse Folds: ", folds);

  const [isCollapsed, setCollapsed] = useState(initiallyCollapsed ?? false);
  let polygonString = ``;
  if (folds) polygonString = generatePolyonString(folds, isCollapsed);

  // für jeden key, value:Record xy einmal generateTriangles ausführen.
  // generateTriangles braucht (key:Corner, value:CornerData, width, height)

  // bisher nicht ausgelagert, da wir den angle eig. zuerst berechnen müssen, und das iwie dumm ist,
  // die als paket zurückzugeben.
  // wenn man nun triangles als einzelne generated, und da jeweils auch nen einzelnen angle berechnet,
  // muss man in generateTriangles wieder ne switch machen, mit konfigurationen von svgs mit jeweiligen styles, u

  //let triangles = <></>;
  //if (folds) triangles = generateFoldTriangles(folds);

  //    console.log("triangles", triangles);
  console.log("polystring", polygonString);

  // für wenn toggleOnce aktiv ist, ist das die Condition fürs togglen
  const [toggled, setToggled] = useState(false);

  // kp of das die beste lösung ist, noch nen state zu verwenden. aber warum nicht?
  const toggleCollapsed = () => {
    console.log("togglecollapsed");
    if (toggled) return;
    if (toggleOnce) setToggled(true);

    setCollapsed(!isCollapsed);
  };

  return (
    <div className="collapseFrameOuter"
      style={{
        position: "relative",
        width: `${width}vw`,
        height: `${height}vw`,
        rotate: `${rotation}deg`,
        zIndex: "1",
      }}
      onClick={toggleCollapsed}
    >
      <div className="collapseFrameInner"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          clipPath: polygonString,
          overflow: "hidden",
          backgroundColor: bgColor ? bgColor : "transparent",
        }}
      >
        {children}
      </div>

      {
        (isCollapsed || folds?.topLeft?.perma) && folds?.topLeft && (
          <svg
            className="topleftcorner"
            style={{
              position: "absolute",
              width: folds.topLeft.horPercent + "%",
              height: folds.topLeft.vertPercent + "%",
              top: "0",
              left: "0",
              scale: "-1 1",
              rotate: `${getCornerAngle("topLeft", width, height, folds.topLeft)}deg`,
              transformOrigin: "",
              fill: foldColor || "#386638",
              zIndex: "2",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >

            <polygon points="0,0 100,0 0,100">
            </polygon>
          </svg>
        )
      }

      {
        (isCollapsed || folds?.topRight?.perma) && folds?.topRight && (
          <svg
            className="toprightcorner"
            style={{
              position: "absolute",
              width: folds.topRight.horPercent + "%",
              height: folds.topRight.vertPercent + "%",
              top: "0",
              right: "0",
              scale: "-1 1",
              rotate: `${getCornerAngle("topRight", width, height, folds.topRight)}deg`,
              transformOrigin: "",
              fill: foldColor || "#386638",
              zIndex: "2",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 100,100"></polygon>
          </svg>
        )
      }

      {
        (isCollapsed || folds?.bottomRight?.perma) && folds?.bottomRight && (
          <svg
            className="bottomrightcorner"
            style={{
              position: "absolute",
              width: folds.bottomRight.horPercent + "%",
              height: folds.bottomRight.vertPercent + "%",
              bottom: "0",
              right: "0",
              scale: "-1 1",
              rotate: `${getCornerAngle("bottomRight", width, height, folds.bottomRight)}deg`,
              transformOrigin: "",
              fill: foldColor || "#386638",
              zIndex: "2",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="100,0 100,100 0,100"></polygon>
          </svg>
        )
      }
      {
        (isCollapsed || folds?.bottomLeft?.perma) && folds?.bottomLeft && (
          <svg
            className="bottomleftcorner"
            style={{
              position: "absolute",
              width: folds.bottomLeft.horPercent + "%",
              height: folds.bottomLeft.vertPercent + "%",
              bottom: "0",
              left: "0",
              scale: "-1 1",
              rotate: `${getCornerAngle("bottomLeft", width, height, folds.bottomLeft)}deg`,
              fill: foldColor || "#386638",
              zIndex: "2",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,100 0,100"></polygon>
          </svg>
        )
      }
    </div >
  );
};

const generatePolyonString = (folds: Partial<Record<Corner, CornerData>>, isCollapsed: boolean) => {
  let polygonString = "polygon(";

  folds.topLeft && (isCollapsed || folds.topLeft.perma)
    ? (polygonString += `0% ${folds.topLeft.vertPercent}%, ${folds.topLeft.horPercent}% 0%`)
    : (polygonString += "0% 0%");
  folds.topRight && (isCollapsed || folds.topRight.perma)
    ? (polygonString += `, ${100 - folds.topRight.horPercent}% 0%, 100% ${folds.topRight.vertPercent}%`)
    : (polygonString += ", 100% 0%");
  folds.bottomRight && (isCollapsed || folds.bottomRight.perma)
    ? (polygonString += `, 100% ${100 - folds.bottomRight.vertPercent}%, ${100 - folds.bottomRight.horPercent}% 100%`)
    : (polygonString += ", 100% 100%");
  folds.bottomLeft && (isCollapsed || folds.bottomLeft.perma)
    ? (polygonString += `, ${folds.bottomLeft.horPercent}% 100%, 0% ${100 - folds.bottomLeft.vertPercent}%`)
    : (polygonString += ", 0% 100%");

  polygonString += ")";
  return polygonString;
  // TODO: Polygonstring zusammenbauen, je nach vorhandenheit der Folds
};

/*

Das hier lassen wir vorerst. Macht eh wegen conditional Rendering mehr Sinn die Triangles als einzelne Elemente zu haben statt als map-Block oder so.
const generateFoldTriangles = (imageWidth: number, imageHeight: number, fold: Record<Corner, CornerData>) => {



    let corners = Object.keys(folds) as Array<Corner>;
    //console.log("corners at triangle gen:", corners);

    //For each key/fold, calculate Angle

    return (
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
    );
};

*/

const getCornerAngle = (
  corner: Corner,
  width: number,
  height: number,
  cornerData: CornerData,
) => {
  // TODO: Vielleicht kann man da Sachen generalisieren, z.B. dx dy berechnung etc.
  // eig. ja, das ist ja immer dasselbe

  // 1. Winkel zw. oberer Rand und cutaxis berechnen.

  console.log("cornerangle calculations hee hee");
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