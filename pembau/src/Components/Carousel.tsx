import React, { useEffect, useRef } from "react"
import testimage from "../assets/bg-1.jpg"



// TODO: x Cards, je nach anzahl images hinzufügen. 
// TODO: Fixes Seitenverhältnis z.b. 1:2 mit Cutoff der Bilder, falls die unregelmäßig sind? 
// oder sollen Bilder immer Gleich groß sein und komplett angezeigt werden? 

// > Vorerst einfach fixes Seitenverhältnis des Carousels. Die Bilder sind bisher eh immer gleich groß! 
// Machen wir dann anderst, wenn andere Bilder kommen.

export const Carousel = () => {


    // Preload images
    /*
    useEffect(() => {

        for (let image of images) {
            const img = new Image();
            img.src = image;
        }
    }, [])*/

    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        console.log("scrollleft");

        containerRef.current?.scrollBy({
            left: -containerRef.current.offsetWidth,
            behavior: "smooth"
        });

    }

    const scrollRight = () => {
        console.log("scrollright");

        containerRef.current?.scrollBy({
            left: containerRef.current.offsetWidth,
            behavior: "smooth"
        });
    }


    // TODO: images sources zu Elementen Mappen, das kommt dann statt den item divs rein

    // TODO: Da so Kack rein machen von youtuve: https://www.youtube.com/watch?v=KD1Yo8a_Qis
    return <div className="carousel" >
        <div style={{ position: "absolute", left: "0", top: "50%", backgroundColor: "#000000", color: "#ffffff", height: "10%", alignContent: "center" }} onClick={scrollLeft}>LEFT</div>
        <div style={{ position: "absolute", right: "0", top: "50%", backgroundColor: "#000000", color: "#ffffff", height: "10%", alignContent: "center" }} onClick={scrollRight}>RIGHT</div>

        <div className="group" ref={containerRef} >

            <div className="card"><img src={testimage} width="100%">
            </img></div>
            <div className="card">2</div>
            <div className="card">3</div>
        </div></div>
}