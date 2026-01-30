


// images
import GeschichteImg from "./assets/about/geschichte.webp";
import GeschichteCollapsedImg from "./assets/about/geschichtetrbl.webp";
import LeitbildImg from "./assets/about/leitbildwerte.webp";
import LeitbildCollapsedImg from "./assets/about/leitbildwertebrtl.webp";
import StartImg from "./assets/about/neu für start.webp"
import StartCollapsedImg from "./assets/about/neu für start br.webp";
import ImageFrameJPG from "./Components/ImageFrameJPG";
import Foot from "./menu/Foot";

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
                flexDirection: "row",
                marginTop: "5vw"
            }}>

                <ImageFrameJPG collapsedImg={GeschichteCollapsedImg} uncollapsedImg={GeschichteImg}></ImageFrameJPG>
                <p className="h1serif" style={{ transform: " translateX(-33vw) translateY(0vw) rotate(20deg)", minWidth: "35vw", height: "fit-content" }}>Vom<span className="dmsans700orange">_BAUERNHOF<br />_ZUR </span>_Kulturplattform</p>


            </div>


            <div id="foot">
                <Foot></Foot>
            </div>
        </div>
    )

}

export default About;