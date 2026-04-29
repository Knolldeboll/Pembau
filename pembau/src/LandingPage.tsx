

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
//import Foot from "./menu/Foot";
import { useNavigate } from "react-router";
import { CollapseFrame } from "./Components/CollapseFrame";


const LandingPage = () => {

  const navigate = useNavigate();

  return (
    < >


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
        width: "110vw",
        transform: "translateX(-5%) rotate(1.44deg)",
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


      {/** Vielleicht statt dem starren Shit ein CollapseFrame mit einfach 100%/100% buntem Div mit Text drinnen? */}
      {/**Und da dann per Media Query noch ein längeres mit längerer height als Prop rendern! */}

      {/** 
      <div id="keinprogramm" style={{ width: "120vw", height: "70vw", marginTop: "30vw", transform: "translateX(-15vw)" }}>
        <KeinProgrammFrame uncollapsedImg={KPKPImg} collapsedImg={KPKPCollapsedImage} ></KeinProgrammFrame>
      </div>
      */}

      {/*kpkp neu skalierbar - 2nd class für umschalten per mQ*/}



      <div className="keinprogramm keinprogrammSmall" style={{ marginTop: "40vw", alignSelf: "center", transform: "translateX(-4vw)" }}>
        <CollapseFrame width={110} height={80} rotation={-3} folds={{ bottomLeft: { horPercent: 58, vertPercent: 80, perma: false }, topRight: { horPercent: 15, vertPercent: 30, perma: true } }} foldColor="#000000">
          <div id="kpkpbg" style={{ width: "100%", height: "100%", backgroundColor: "#D2F2EB", overflow: "hidden" }}>
            <h2 style={{ marginLeft: "12%", marginTop: "10%" }}>KEIN_<span>Programm</span>_KEIN_<span>Problem</span></h2>
            <div id="kpkptextblock" style={{ marginLeft: "20%", width: "50%" }}>
              <p><span>Ein_Grundstück</span> mit viel Potential. <br />
                <span>Eine_Fläche</span> die genutzt werden möchte.<br />
                <span>Eine_Grundlage</span> auf der Ideen wachsen. <br />
                <span>Eine_Spielwiese auf der Kultur neu gedacht wird.</span> <br />
                Alles über den aktuellen Stand des Pembaus und bereits laufende Aktionen findest du hier.
              </p>
              <TextButton text="MEHR ERFAHREN" onClick={() => { navigate("/Pembau/About") }}></TextButton>
            </div>
          </div>
        </CollapseFrame >
      </div >




      {/**Mithelfen raus, da steht quasi eh nix drin, außerdem keine Links für Newsletter, Crowdfunding, "teil sein" 
      <div id="mithelfen" style={{ width: "140vw", height: "70vw", marginTop: "13vw", transform: "rotate(-4deg) translateX(-10vw)" }}>
        <MithelfenFrame uncollapsedImg={MithelfenImg} collapsedImg={MithelfenCollapsedImage}></MithelfenFrame>
      </div>
*/}
      < div className="textframe" id="ende" style={{
        width: "75vw", height: "20vw", marginTop: "5vw", transform: "rotate(-3deg) "
      }}>
        <TextFrameEndeLP></TextFrameEndeLP>
      </div >

      <div id="endbuttons" style={{ display: "flex", flexDirection: "column", gap: "1vw", marginTop: "10vw", width: "40vw", height: "30vw", transform: "translateX(10vw)" }} >
        <TextButton text="ABOUT" onClick={() => { navigate("/Pembau/About") }}></TextButton>
        <TextButton text="INSTAGRAM" onClick={() => { console.log("TODO: Isnta ocnlick") }}></TextButton>
        <TextButton text="ZURÜCK_ZUM_ANFANG" onClick={() => { console.log("TODO: Zurück ocnlick") }}></TextButton>
      </div>

    </>
  );
};
export default LandingPage;
