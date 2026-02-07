interface CollapseImageFrameProps {

    image: string;

}

export const CollapseImageFrame = ({ image }: CollapseImageFrameProps) => {



    // TODO: Generiere Random Points für die Ecken! 
    // Wende die dann für SVG und für das CSS-Polygon-Clipping an


    // TODO: Den winkel der inneren Ecke richtig machen!
    // der ist einerseits abhängig von den Faltpunkten, andererseits vom Aspect Ratio des bilds!
    // 
    // bei z.B. 20%/20% Faltung und AR von 1 wäre die Faltecke genau 90% .
    // bei 20%20 und AR von 1/2 

    // z.B. ist beim svg

    // pos relative, damit die ecken Absolute platziert werden können!
    return (<div className="collapseimageframe" style={{ position: "relative", width: "500px", height: "500px" }}>

        <img src={image} style={{ width: "100%", height: "100%", clipPath: "polygon(60% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 0%)" }}>

        </img>


        {/** jetzt Kommen noch SVG-Ecken */}
        <svg style={{ position: "absolute", width: "40%", height: "20%", top: "0", right: "0", fill: "#386638", scale: "1 -1", rotate: "0deg" }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100"></polygon>
        </svg>



    </div>);
}

