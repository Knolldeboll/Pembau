

//Images, alle hier importen für Übersicht!
import NiceTryImg from "./assets/NiceTry.webp"
import NiceTryCollapsedImg from "./assets/NiceTryTrBljpg.webp"
import AussichtImg from "./assets/Aussicht.webp";
import AussichtCollapsedImg from "./assets/AussichtBrTl.webp";
import GestaltenImg from "./assets/Gestalten.webp";
import GestaltenCollapsedImg from "./assets/GestaltenBrTl.webp";
import KPKPCollapsedImage from "./assets/KPKPBl.webp";
import KPKPImg from "./assets/KPKP.webp";
import MithelfenImg from "./assets/Mithelfen.webp";
import MithelfenCollapsedImage from "./assets/MithelfenBr.webp";

// Components
import ImageFrameJPG from "./Components/ImageFrameJPG";
import TextFrameAussicht from "./Customframes/TextFrameAussicht";
import TextFrameGestalten from "./Customframes/TextFrameGestalten";
import KeinProgrammFrame from "./Customframes/KeinProgrammFrame";
import MithelfenFrame from "./Customframes/MithelfenFrame";
import TextFrameEndeLP from "./Customframes/TextFrameEndeLP";
import TextButton from "./Components/TextButton";
import Foot from "./menu/Foot";
import { useNavigate } from "react-router";


const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className="lp-body-instance"
      style={{

        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        gap: "2vw",
        overflow: "hidden",
      }}>


      {/* früher war die hor. verschiebung und der rotate über position absolute und dann top gemacht. 
      besser aber für alles nur translate verwenden, um den normalen dokumentenflow zu erhalten und vertikale
      positionierung dann über gap machen. */}

      {/* Generell idealerweise so: 
      1. Bodyinstance ist div mit flex, darin mit gap getrennte Sections/Frames. 
          Das sorgt für ne Ordentliche Struktur generell. Verschiebung nach lr/ou kann dann in den Sections geschehen!
      2. die Sections sind divs, in denen mehr freiheit Herrscht. 
          da kann man von der regelmäßigen platzoierung abweichen durch: 
              - horizontal translateX
              - vertikal mit margin */}


      <div id="nicetryjpg" style={{
        width: "150vw",
        transform: "translateX(-29%) rotate(1.44deg)",
        zIndex: "2"
      }}>
        <ImageFrameJPG collapsedImg={NiceTryCollapsedImg} uncollapsedImg={NiceTryImg}></ImageFrameJPG>
      </div>

      <div className="textframe" id="textframeaussicht" style={{
        width: "80vw",
        marginTop: "-5vw",
        zIndex: "1",
      }}>
        <TextFrameAussicht></TextFrameAussicht>
      </div>


      <div id="aussicht" style={{
        width: "120vw",
        marginTop: "0vw",
        transform: "translateX(-9%)rotate(3deg)",
        zIndex: "2",
      }}>
        <ImageFrameJPG collapsedImg={AussichtCollapsedImg} uncollapsedImg={AussichtImg}></ImageFrameJPG>
      </div>


      <div id="gestalten" style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "-6vw",
        width: "100vw",

      }}>
        <div className="textframe" style={{
          width: "50%",
          zIndex: "1",
        }}>

          <TextFrameGestalten></TextFrameGestalten>
        </div>
        <div style={{
          width: "50%",
          zIndex: "2",
          transform: " translateY(11vw) scale(170%) rotate(-10deg)"
        }} >
          <ImageFrameJPG collapsedImg={GestaltenCollapsedImg} uncollapsedImg={GestaltenImg}></ImageFrameJPG>
        </div>
      </div>

      <div id="keinprogramm" style={{ width: "120vw", height: "70vw", marginTop: "30vw", transform: "translateX(-15vw)" }}>
        <KeinProgrammFrame uncollapsedImg={KPKPImg} collapsedImg={KPKPCollapsedImage} ></KeinProgrammFrame>
      </div>

      <div id="mithelfen" style={{ width: "140vw", height: "70vw", marginTop: "13vw", transform: "rotate(-4deg) translateX(-10vw)" }}>
        <MithelfenFrame uncollapsedImg={MithelfenImg} collapsedImg={MithelfenCollapsedImage}></MithelfenFrame>
      </div>

      <div className="textframe" id="ende" style={{
        width: "75vw", height: "20vw", marginTop: "30vw", transform: "rotate(4deg) "
      }}>
        <TextFrameEndeLP></TextFrameEndeLP>
      </div>

      <div id="endbuttons" style={{ display: "flex", flexDirection: "column", gap: "1vw", marginTop: "10vw", width: "40vw", height: "30vw", transform: "translateX(10vw)" }} >
        <TextButton text="ABOUT" onClick={() => { navigate("/About") }}></TextButton>
        <TextButton text="INSTAGRAM" onClick={() => { console.log("TODO: Isnta ocnlick") }}></TextButton>
        <TextButton text="ZURÜCK_ZUM_ANFANG" onClick={() => { console.log("TODO: Zurück ocnlick") }}></TextButton>
      </div>

      <div id="foot">
        <Foot></Foot>
      </div>

    </div>
  );

  // Bei den Bildern im Body mit den Knickecken folgendes:
  // Genauso wie im Figma-Ablauf machen. d.H "einfach" die
  // Ansichten mit je einer Ecke Weg bzw. alle Permutationen vorbereiten und dann
  // die Dinger austauschen.
  //
  // Sind bei der mit 3 Ecken: 8, bei denen mit 2 Ecken: 4

  // Alternativ: Irgendwie ne Mask drüberlegen, die bei zugefalteter Ecke
};
export default LandingPage;
