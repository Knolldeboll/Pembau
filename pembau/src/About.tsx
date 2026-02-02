


// images
import GeschichteImg from "./assets/about/geschichte.webp";
import GeschichteCollapsedImg from "./assets/about/geschichtetrbl.webp";
import LeitbildImg from "./assets/about/leitbildwerte.webp";
import LeitbildCollapsedImg from "./assets/about/leitbildwertebrtl.webp";
import StartImg from "./assets/about/neu für start.webp"
import StartCollapsedImg from "./assets/about/neu für start br.webp";
import ImageFrameJPG from "./Components/ImageFrameJPG";
import Foot from "./menu/Foot";


//md texts

//import aboutGeschichteAlways from "./content/aboutGeschichteAlways.md"


import { CollapseText } from "./Components/CollapseText";
//import TextFrameGeschichte from "./Customframes/TextFrameGeschichte";

const About = () => {


    return (

        <div className="lp-body-instance"
            style={{

                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",

                overflow: "hidden",
            }}>


            <div id="start_about" style={{
                display: "flex",
                flexDirection: "row",
                transform: "translateX(-19vw) translateY(-10vw)",
                width: "120vw",

                zIndex: "2",

            }}>
                <ImageFrameJPG collapsedImg={StartCollapsedImg} uncollapsedImg={StartImg}></ImageFrameJPG>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vw", height: "fit-content", transform: " rotate(10deg) translateY(35vw) translateX(0vw)" }}>
                    <a className="h2 hoverable" href="#leitbild">_Leitbild_und_Werte</a>
                    <a className="h2 hoverable">_Geschichte</a>
                    <a className="h2 hoverable">_Vision</a>
                    <a className="h2 hoverable">_Aktuell</a>
                    <a className="h2 hoverable">_Team</a>
                </div>
            </div>

            <div id="leitbild" style={{
                marginTop: "-15vw"
            }}>
                <ImageFrameJPG collapsedImg={LeitbildCollapsedImg} uncollapsedImg={LeitbildImg}></ImageFrameJPG>
            </div>

            <div id="geschichte" style={{
                display: "flex",

                flex: "none",
                flexDirection: "row",
                marginTop: "5vw",
                zIndex: "2"
            }}>

                <div id="geschichteimgwrapper" style={{ position: "relative", width: "65vw", transform: "translateX(-3vw)", zIndex: "1" }}>
                    <ImageFrameJPG collapsedImg={GeschichteCollapsedImg} uncollapsedImg={GeschichteImg}></ImageFrameJPG>
                    <p className="h1serif" style={{ display: "block", position: "absolute", top: "-1%", left: "48%", rotate: "20deg", width: "35vw", height: "fit-content", zIndex: "0" }}>Vom<span className="dmsans700orange">_BAUERNHOF<br />_ZUR </span>_Kulturplattform</p>
                </div>
                <CollapseText alwaysSrc="/Pembau/content/aboutGeschichteAlways.md" expandSrc="/Pembau/content/aboutGeschichteExpand.md" ></CollapseText>
            </div>


            {/*Ab hier die Bilder mit Collapsetext nebenan    transform: "translateX(25vw )translateY(-70vw) rotate(20deg)", transform: "translateX(25vw )translateY(-70vw) rotate(20deg)",*/}
            <div id="kultursommer">


            </div>

            <div id="helpinghands">

            </div>


            <div id="containercity"></div>

            <div id="permabau"></div>

            <div id="foot">
                <Foot></Foot>
            </div>
        </div >
    )

}

export default About;