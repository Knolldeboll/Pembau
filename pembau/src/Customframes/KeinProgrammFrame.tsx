import { useEffect, useState } from "react";
import TextButton from "../Components/TextButton";

// TODO: Hier noch die Buttons einfügen! 
// Die sind einfach TextButtons, müssen aber gescheid positioniert werden und sind auch nur 
// Visible, wenn !collapsed


interface ImageFrameJPGProps {
    uncollapsedImg: string;
    collapsedImg: string;
}

/**
 * Frame für das Anzeigen eines collapsbaren Images. 
 * Schaltet bei Klick zwischen den gegebenen Images um. 
 * @param uncollapsedImg Pfad zum ganzen Image
 * @param collapsedImg Pfad zum uncollapseden Image
 * @returns 
 */
const KeinProgrammFrame = ({ uncollapsedImg, collapsedImg }: ImageFrameJPGProps) => {



    // Preload images
    useEffect(() => {
        new Image().src = uncollapsedImg;
        new Image().src = collapsedImg;
        console.log("Images preloaded: ", uncollapsedImg, collapsedImg)
    }, [])



    const [collapsed, setCollapsed] = useState(true);



    // Mach alle Ecken auf oder zu.
    const toggleAllCorners = () => {

        setCollapsed(!collapsed);

    };



    // Hier kommt der Image-Source-String entsprechend der States rein.
    const currentImgSrc = collapsed ? collapsedImg : uncollapsedImg;


    return (
        <div onClick={toggleAllCorners}
            style={{ zIndex: "2" }}>

            <img
                src={currentImgSrc}
                style={{

                    pointerEvents: "auto",
                    width: "100%",
                    height: "auto",
                    zIndex: "2",

                }}
                onClick={() => {
                    console.log("img clicked");
                    toggleAllCorners();
                }}
            ></img>


            <div id="kpkpbuttoncontainer" style={{
                display: "flex", width: "fit-content", flexDirection: "column", gap: "29vw",
                transform: "translateY(-51vw) translateX(33vw) scale(75%) rotate(-4deg)  "
            }}>
                {!collapsed && <TextButton text="MEHR_ERFAHREN" onClick={() => { console.log("Mehrerfahren-pembauaktuell todo") }}></TextButton>}

                {!collapsed && <TextButton text="MEHR_ERFAHREN" onClick={() => { console.log("Mehrerfahren-pembauBALD todo") }}></TextButton>}
            </div>



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

export default KeinProgrammFrame;
