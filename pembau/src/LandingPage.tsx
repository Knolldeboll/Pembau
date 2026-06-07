//Images, alle hier importen für Übersicht!
import NiceTryImg from "./assets/lp1.webp";
import NiceTryCollapsedImg from "./assets/NiceTryTrBljpg.webp";

import AussichtImg from "./assets/Aussicht.webp";
import AussichtCollapsedImg from "./assets/AussichtBrTl.webp";
import GestaltenImg from "./assets/Gestalten.webp";
import GestaltenCollapsedImg from "./assets/GestaltenBrTl.webp";
//import KPKPCollapsedImage from "./assets/KPKPBl.webp";
//import KPKPImg from "./assets/KPKP.webp";
//import MithelfenImg from "./assets/Mithelfen.webp";
//import MithelfenCollapsedImage from "./assets/MithelfenBr.webp";

// Components
import ImageFrameJPG from "./Components/ImageFrameJPG";
import TextFrameAussicht from "./Customframes/TextFrameAussicht";
import TextFrameGestalten from "./Customframes/TextFrameGestalten";
//import KeinProgrammFrame from "./Customframes/KeinProgrammFrame";
//import MithelfenFrame from "./Customframes/MithelfenFrame";
import TextFrameEndeLP from "./Customframes/TextFrameEndeLP";
import TextButton from "./Components/TextButton";
//import Foot from "./menu/Foot";
import { useNavigate } from "react-router";
import { CollapseFrame } from "./Components/CollapseFrame";
import { useEffect, useRef } from "react";
import { CollapseFramePercent } from "./Components/CollapseFramePercent";

const LandingPage = () => {
  const navigate = useNavigate();
  const endeRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    // if type ? element, use scrollIntoView.
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useeffect auf window location hash, dann kann man auch unabhängig vom mount zum ref scrollen
  useEffect(() => {
    switch (window.location.hash) {
      case "#ende":
        scrollToRef(endeRef);
        break;
    }
  }, [window.location.hash]);

  return (
    <>
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

      {/**NiceTry alt: (mit zwei webps und baked text
 ) 
      <div
        id="nicetryjpg"
        style={{
          width: "min(150%,2000px)",
          transform: " rotate(1.44deg)",
          alignSelf: "center",
          zIndex: "2",
        }}
      >
        <ImageFrameJPG
          collapsedImg={NiceTryCollapsedImg}
          uncollapsedImg={NiceTryImg}
        ></ImageFrameJPG>
      </div>


*/}
      <div
        id="nicetryjpg"
        style={{
          width: "min(150%,2000px)",
          transform: " rotate(-1.44deg)",
          marginLeft: "-40%",
          marginTop: "5%",
          alignSelf: "center",
          zIndex: "2",
        }}
      >
        {" "}
        <CollapseFramePercent
          width={120}
          height={85}
          rotation={0}
          folds={{
            bottomRight: { horPercent: 43, vertPercent: 60, perma: false },
            topRight: { horPercent: 15, vertPercent: 30, perma: true },
          }}
          foldColor="#000000"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${NiceTryImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            <p
              style={{
                position: "absolute",
                scale: "8",
                top: "50%",
                left: "55%",
                color: "white",
                zIndex: "1",
              }}
            >
              Pup
            </p>
          </div>
        </CollapseFramePercent>{" "}
      </div>

      <div
        className="textframe"
        id="textframeaussicht"
        style={{
          width: "80%",
          marginTop: "5%",
          marginLeft: "2%",
          zIndex: "1",
        }}
      >
        <TextFrameAussicht></TextFrameAussicht>
      </div>

      <div
        id="aussicht"
        style={{
          width: "120%",
          marginTop: "0vw",
          transform: "translateX(-9%)rotate(3deg)",
          zIndex: "2",
        }}
      >
        <ImageFrameJPG
          collapsedImg={AussichtCollapsedImg}
          uncollapsedImg={AussichtImg}
        ></ImageFrameJPG>
      </div>

      <div
        id="gestalten"
        style={{
          display: "flex",
          flexDirection: "row",

          marginTop: "0vw",
          width: "100%",
        }}
      >
        <div
          className="textframe"
          style={{
            flex: "none",
            width: "min(600px,70%)",
            marginLeft: "5vw",
            zIndex: "1",
          }}
        >
          <TextFrameGestalten></TextFrameGestalten>
        </div>

        <div
          style={{
            flex: "0 0 max(500px,85%)",
            zIndex: "2",
            transform: "   rotate(-15deg)",
            marginTop: "-15vw",
            marginLeft: "max(-200px, -28%)",
          }}
        >
          <ImageFrameJPG
            collapsedImg={GestaltenCollapsedImg}
            uncollapsedImg={GestaltenImg}
          ></ImageFrameJPG>
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

      <div
        className="keinprogramm keinprogrammSmall"
        style={{
          marginTop: "15vw",
          alignSelf: "center",
          transform: "translateX(-4vw)",
        }}
      >
        <CollapseFrame
          width={110}
          height={135}
          rotation={-3}
          folds={{
            bottomLeft: { horPercent: 40, vertPercent: 60, perma: false },
            topRight: { horPercent: 15, vertPercent: 30, perma: true },
          }}
          foldColor="#000000"
        >
          <div
            id="kpkpbg"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#D2F2EB",
              overflow: "hidden",
            }}
          >
            <h2 style={{ marginLeft: "12%", marginTop: "10%" }}>
              KEIN_<span>Programm</span>
              <wbr />
              _KEIN_<span>Problem</span>
            </h2>
            <div id="kpkptextblock" style={{ marginLeft: "20%", width: "50%" }}>
              <p>
                <span>Ein_Grundstück</span> mit viel Potential. <br />
                <span>Eine_Fläche</span> die genutzt werden möchte.
                <br />
                <span>Eine_Grundlage</span> auf der Ideen wachsen. <br />
                <span>Eine_Spielwiese</span> auf der Kultur neu gedacht wird.
                <br />
                <br />
                Alles über den aktuellen Stand des Pembaus und bereits laufende
                Aktionen findest du hier.
              </p>
              <TextButton
                text="MEHR ERFAHREN"
                onClick={() => {
                  navigate("/About/");
                }}
              ></TextButton>
            </div>
          </div>
        </CollapseFrame>
      </div>

      {/*Hier Percent-Based CollapseFrame verwendet, um gut an den PageWrapper anzupassen, statt wie bisher an vw.
      Denn genau bei big kommts zu Problemen, sobald der width-cap des PageWrappers greift, da dann die festen vw Maße des CollapseFrames nicht mehr zum kleineren Wrapper passen.
      Achtung: in solchen Fällen muss ein ggf. umfassendes div auch die width des pagewrappers haben (100%) */}
      <div
        className="keinprogramm keinprogrammBig"
        style={{
          marginTop: "15%",
          alignSelf: "center",
          width: "100%",
          transform: "translateX(-4vw)",
        }}
      >
        <CollapseFramePercent
          width={110}
          height={50}
          rotation={-3}
          folds={{
            bottomLeft: { horPercent: 33, vertPercent: 73, perma: false },
            topRight: { horPercent: 15, vertPercent: 30, perma: true },
          }}
          foldColor="#000000"
        >
          <div
            id="kpkpbgPERC"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#D2F2EB",
              overflow: "hidden",
            }}
          >
            <h2 style={{ marginLeft: "12%", marginTop: "10%" }}>
              KEIN_<span>Programm</span>_KEIN_<span>Problem</span>
            </h2>
            <div id="kpkptextblock" style={{ marginLeft: "25%", width: "50%" }}>
              <p>
                <span>Ein_Grundstück</span> mit viel Potential. <br />
                <span>Eine_Fläche</span> die genutzt werden möchte.
                <br />
                <span>Eine_Grundlage</span> auf der Ideen wachsen. <br />
                <span>
                  Eine_Spielwiese auf der Kultur neu gedacht wird.
                </span>{" "}
                <br />
                Alles über den aktuellen Stand des Pembaus und bereits laufende
                Aktionen findest du hier.
              </p>
              <TextButton
                text="MEHR ERFAHREN"
                onClick={() => {
                  navigate("/About/");
                }}
              ></TextButton>
            </div>
          </div>
        </CollapseFramePercent>
      </div>

      {/**Mithelfen raus, da steht quasi eh nix drin, außerdem keine Links für Newsletter, Crowdfunding, "teil sein" 
      <div id="mithelfen" style={{ width: "140vw", height: "70vw", marginTop: "13vw", transform: "rotate(-4deg) translateX(-10vw)" }}>
        <MithelfenFrame uncollapsedImg={MithelfenImg} collapsedImg={MithelfenCollapsedImage}></MithelfenFrame>
      </div>

*/}

      <div
        className="textframe"
        id="ende"
        style={{
          width: "75%",
          marginTop: "5%",
          marginLeft: "2%",
          transform: "rotate(-3deg) ",
        }}
      >
        <TextFrameEndeLP></TextFrameEndeLP>
      </div>

      <div
        ref={endeRef}
        id="endbuttons"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
          marginTop: "10vh",
          width: "40vw",
          height: "auto",
          transform: "translateX(10vw)",
        }}
      >
        <TextButton
          text="ABOUT"
          onClick={() => {
            navigate("/About/");
          }}
        ></TextButton>

        {/**TODO: schauen, wie man hier ne richtige URL anbinden kann. sonst halt mit href als prop passen.
        <TextButton
          text="INSTAGRAM"
          onClick={() => {
            navigate("https://www.instagram.com/pembau.art/");
          }}
        ></TextButton>
         */}
        <TextButton
          text="ZURÜCK_ZUM_ANFANG"
          onClick={() => {
            navigate("/");
          }}
        ></TextButton>
      </div>
    </>
  );
};
export default LandingPage;
