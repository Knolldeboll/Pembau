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


    const aspectRatio = image.width / image.height;

    // denn 20% auf der kurzen seite sind ggf. weniger als 20% auf der anderen seite, auch wenns gleich aussieht.

    let angle = (Math.atan(topRightRight / topRightTop) * (180 / Math.PI));

    console.log(image)
    console.log("image hat width udn height nun:", image.width, image.height);
    console.log("angle" + angle);


    // pos relative, damit die ecken Absolute platziert werden können!

    // TODO: Bei polygon noch mit ´´ Arbeiten, damit man die Werte von oben einbinden kann!
    return (<div className="collapseimageframe" style={{ position: "relative", width: "100%", height: "100%" }}>

        <img src={image.url} style={{ width: "100%", height: "100%", clipPath: `polygon(${100 - topRightTop}% 0%, 100% ${topRightRight}%, 100% 100%, 0% 100%, 0% 0%)` }}>

        </img>


        {/** jetzt Kommen noch SVG-Ecken */}
        <svg style={{ position: "absolute", width: topRightTop + "%", height: topRightRight + "%", top: "0", right: "0", scale: "-1 1", rotate: `-${37}deg`, fill: "#386638" }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100"></polygon>
        </svg>



    </div >);
}

