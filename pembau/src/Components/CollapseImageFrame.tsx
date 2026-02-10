import { ImageData } from "../types/ImageData";

interface CollapseImageFrameProps {

    image: ImageData;

}

export const CollapseImageFrame = ({ image }: CollapseImageFrameProps) => {






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



    const ar1 = image.width / image.height
    const ar2 = image.height / image.width


    const dx = (topRightTop / 100) * image.width;
    const dy = (topRightRight / 100) * image.height;

    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);

    // denn 20% auf der kurzen seite sind ggf. weniger als 20% auf der anderen seite, auch wenns gleich aussieht.

    // ggf. umtauschen probieren! vielleicht falscher winkel eingesetellt vorhin aus versehen
    let angle = 180 - 2 * ((Math.atan(topRightRight * image.height / topRightTop * image.width) * (180 / Math.PI)));

    let counterAngle = 180 - 2 * angleDeg;
    console.log(image)
    console.log("image hat width udn height nun:", image.width, image.height);

    console.log("angle", counterAngle);


    console.log("ar1:", ar1, "ar2", ar2);


    // pos relative, damit die ecken Absolute platziert werden können!

    // TODO: Bei polygon noch mit ´´ Arbeiten, damit man die Werte von oben einbinden kann!
    return (<div className="collapseimageframe" style={{ position: "relative", width: "100%", height: "100%" }}>

        <img src={image.url} style={{ width: "100%", height: "100%", clipPath: `polygon(${100 - topRightTop}% 0%, 100% ${topRightRight}%, 100% 100%, 0% 100%, 0% 0%)` }}>

        </img>


        {/** jetzt Kommen noch SVG-Ecken */}
        <svg className="toprightcorner" style={{ position: "absolute", width: topRightTop + "%", height: topRightRight + "%", top: "0", right: "0", scale: "-1 1", rotate: `-${counterAngle}deg`, fill: "#386638" }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100"></polygon>
        </svg>



    </div >);
}

const getFoldTransform = () => {

}