import { useEffect, useState } from "react";


import imgTrBl from "./NiceTryTrBljpg.jpg";
import img from "./NiceTry.jpg";

// NiceTryJPG: Bodyframe- Variante, wo alles einfach nur als PNG gecopied wurde
// und per CSS richtig platziert wird.
// Hier speziell werden max. 2 JPGs gespeichert, damit die Seite schneller ist!
// Mit 8 Bildern pro Frame ist das schon ganz schön langsam
// -- ALLERDINGS unnötig extralangsam, wenn man den Bums als PNG exportiert haha! Da haben die Files auhc 10 MB teils xD
// JPG export auf mid-Quali ist viel
// 
//

//------------------------------------------

// Pro:
// - Sau einfach zu exportieren. Einfach Figma -> Export as png funzt zumindest beim
// Hintergrundbild easy!

// - Scaled mit dem CSS auch easy.
// - Lädt jetzt nicht zu ewig.

// Contra:

// - ist bisschen Heckmeck mit den Ecken-State-Kombis, aber muss man nur einmal machen
// und dann nie wieder anschauen
// - da alles abgeschlossen in einer Komponente passiert, kann man das
// eher schlecht als Konfigurierbare/wiederverwendbare Komponente machen.
// Aber andererseits passt das eher zum Content-Creation-Flow:
// Da wird sich keiner die Mühe machen, ne Komponente zu Konfigurieren
// (ausser man macht da noch ein Interface für, aber naja), viel wahrscheinlicher
// kommen da einfach neue Figma-Grafiken oder einfach direkt Bilder dazu!
// - Die vielen einzelnen Bilder für jede Kombinationsmöglichkeit müssen alle
// immer bei der Seite mitgeladen werden! Das bloated auf Dauer den Datenverkehr
// und die Ladezeit und Speicher.
// ggf. kann man für die img sources Lazy Loading von nem externen Server machen.

//--------------------
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
const ImageFrameJPG = ({ uncollapsedImg, collapsedImg }: ImageFrameJPGProps) => {



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
        console.log("toggleallcorneres: is", collapsed)
    };


    const checkCorners = () => {
        if (collapsed) return uncollapsedImg;
        if (!collapsed) return collapsedImg;
    }

    // Hier kommt der Image-Source-String entsprechend der States rein.
    const currentImgSrc = checkCorners();



    // TODO: Divs zum Anklicken wieder einfügen!
    // Da kann man die aus bf1 wiederverwenden, aber ohne svgs drinnen.

    // TODO: Conditional Rendering von alternativen Images.
    // Fürzelkacke hihi :)
    // Das Conditional Rendering basiert auf Kombinationi von States:
    // z.B. {topLeft && bottomLeft && <img src={nicetry-topleft-bottomleft}}



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

export default ImageFrameJPG;
