// images
import GeschichteImg from "./assets/about/geschichte.webp";
import GeschichteCollapsedImg from "./assets/about/geschichtetrbl.webp";
import LeitbildImg from "./assets/about/leitbildwerte.webp";
import LeitbildCollapsedImg from "./assets/about/leitbildwertebrtl.webp";
import StartImg from "./assets/about/neu für start.webp";
import StartCollapsedImg from "./assets/about/neu für start br.webp";
import ImageFrameJPG from "./Components/ImageFrameJPG";
import KulturImg from "./assets/about/kultur.webp";
import KulturCollapsedImg from "./assets/about/kulturbrtl.webp";
import HelpingHandsImg from "./assets/about/helpinghands.webp";
import HelpingHandsCollapsedImg from "./assets/about/helpinghandstrbl.webp";
import ContainerImg from "./assets/about/container.webp";
import ContainerCollapsedImg from "./assets/about/containerbltr.webp";


import TxPImg from "./assets/about/txp.webp";
import PermaImg from "./assets/about/perma.webp";
import VisionImg from "./assets/about/vision.webp";
import PermaCollapsedImg from "./assets/about/permatrbl.webp";
import TeamImg from "./assets/about/team.webp";
import TeamCollapsedImg from "./assets/about/teambrtl.webp";
import TeamDream from "./assets/about/teamdream.webp";

//import images from "./assets/about/images.json";
import TestRectImg from "./assets/bg-2.jpg";

//import Foot from "./menu/Foot";

//md texts

//import aboutGeschichteAlways from "./content/aboutGeschichteAlways.md"

import { CollapseText } from "./Components/CollapseText";
import TextFrameAktuell from "./Customframes/TextFrameAktuell";
import TextButton from "./Components/TextButton";
//import { CollapseImageFrame } from "./Components/CollapseImageFrame";
//import BodyFrame1 from "./alter shit/BodyFrame1";
import TestImage from "./assets/bg-1.jpg"
import { Carousel } from "./Components/Carousel";
import { CollapseFrame } from "./Components/CollapseFrame";
import ImageWithCollapseText from "./Components/ImageWithCollapseText";
//import TextFrameGeschichte from "./Customframes/TextFrameGeschichte";

const AboutAktuell = () => {
  console.log("testrectimg:", TestRectImg);


  const carouselImages: string[] = [TestImage, PermaImg, TeamImg];

  return (
    <>
      <div
        id="start_about"
        style={{
          display: "flex",
          flexDirection: "row",
          transform: "translateX(-19vw) translateY(-10vw)",
          width: "120vw",

          zIndex: "2",
        }}
      >
        <ImageFrameJPG
          collapsedImg={StartCollapsedImg}
          uncollapsedImg={StartImg}
        ></ImageFrameJPG>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
            height: "fit-content",
            transform: " rotate(10deg) translateY(35vw) translateX(0vw)",
          }}
        >
          <a className="h2 hoverable" href="#leitbild">
            _Leitbild_und_Werte
          </a>
          <a className="h2 hoverable">_Geschichte</a>
          <a className="h2 hoverable">_Vision</a>
          <a className="h2 hoverable">_Aktuell</a>
          <a className="h2 hoverable">_Team</a>
        </div>
      </div>

      <div
        id="leitbild"
        style={{
          marginTop: "-15vw",
        }}
      >
        <ImageFrameJPG
          collapsedImg={LeitbildCollapsedImg}
          uncollapsedImg={LeitbildImg}
        ></ImageFrameJPG>
      </div>

      <div
        id="geschichte"
        style={{
          display: "flex",

          flex: "none",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="geschichteimgwrapper"
          style={{
            position: "relative",
            width: "65vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={GeschichteCollapsedImg}
            uncollapsedImg={GeschichteImg}
          ></ImageFrameJPG>
          <p
            className="h1serif"
            style={{
              display: "block",
              position: "absolute",
              top: "-1%",
              left: "48%",
              rotate: "20deg",
              width: "35vw",
              height: "fit-content",
              zIndex: "0",
            }}
          >
            Vom
            <span className="dmsans700orange">
              _BAUERNHOF
              <br />
              _ZUR{" "}
            </span>
            _Kulturplattform
          </p>
        </div>
        <CollapseText
          marginTopProp="15vw"
          width="55vw"
          alwaysSrc="/Pembau/content/aboutGeschichteAlways.md"
          expandSrc="/Pembau/content/aboutGeschichteExpand.md"
        ></CollapseText>
      </div>

      <div
        id="grundstück"
        style={{
          position: "relative",
          backgroundColor: "rgba(170, 131, 131, 0.36)",
          color: "#000000",
        }}
      >
        <img
          src={VisionImg}
          style={{
            width: "100%",
            height: "auto",
            zIndex: "2",
          }}
        ></img>

        {/*wtf wyh absolute hier?!?  mach doch einfach alle untereinander..*/}
        <div
          id="gscollapsecontainer"
          style={{ position: "absolute", top: "15%", left: "30%" }}
        >
          <CollapseText
            marginTopProp="0vw"
            rotate="-4deg"
            width="33vw"
            textColor="#ffffff"
            alwaysSrc="/Pembau/content/aboutGrundstuckAlways.md"
            expandSrc="/Pembau/content/aboutGrundstuckExpand.md"
          ></CollapseText>
        </div>

      </div>

      <div
        id="aktuelles"
        style={{
          width: "80vw",
          marginLeft: "5vw",
          height: "30vw",
          color: "#000000",
        }}
      >
        <TextFrameAktuell></TextFrameAktuell>
      </div>

      <div
        id="slideshow"
        style={{ width: "100vw", height: "40vw", backgroundColor: "#3c8f3c" }}
      >
        PLACEHOLDER SLIDESHOW
      </div>

      <div className="aktuell" style={{ width: "65vw", marginLeft: "10vw" }}>
        <p>
          Alles was bisher schon am Pembau entsteht, entstanden ist und
          entstehen soll, dass erfährst du hier!
        </p>
      </div>

      {/*Ab hier die Bilder mit Collapsetext nebenan    transform: "translateX(25vw )translateY(-70vw) rotate(20deg)", transform: "translateX(25vw )translateY(-70vw) rotate(20deg)",*/}
      <div
        id="kultursommer"
        style={{
          display: "flex",
          flex: "none",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="kulturimgwrapper"
          style={{
            position: "relative",
            width: "65vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={KulturCollapsedImg}
            uncollapsedImg={KulturImg}
          ></ImageFrameJPG>
        </div>
        <CollapseText
          marginTopProp="0vw"
          width="55vw"
          alwaysSrc="/Pembau/content/aboutKulturAlways.md"
          expandSrc="/Pembau/content/aboutKulturExpand.md"
        ></CollapseText>
      </div>

      <div
        id="helpinghands"
        style={{
          display: "flex",
          flex: "none",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="helpingimgwrapper"
          style={{
            position: "relative",
            width: "65vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={HelpingHandsCollapsedImg}
            uncollapsedImg={HelpingHandsImg}
          ></ImageFrameJPG>
        </div>
        <CollapseText
          marginTopProp="14vw"
          width="55vw"
          alwaysSrc="/Pembau/content/aboutHelpingAlways.md"
          expandSrc="/Pembau/content/aboutHelpingExpand.md"
        ></CollapseText>
      </div>



      {/**Container City */}
      <div
        id="containercity"
        style={{
          display: "flex",
          alignItems: "stretch",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >

        <div
          id="containercityimagewrapper"
          style={{
            position: "relative",
            transform: "translateX(-3vw)",
            zIndex: "1",
            flex: "1 1 60vw"
          }}>
          <ImageFrameJPG
            collapsedImg={ContainerCollapsedImg}
            uncollapsedImg={ContainerImg}
          ></ImageFrameJPG>
        </div>

        <div id="containercitytextwrapper" style={{ marginTop: "2vw", flex: "1 1 550px" }} >
          <CollapseText
            marginTopProp="0vw"
            alwaysSrc="/Pembau/content/aboutContainerAlways.md"
            expandSrc="/Pembau/content/aboutContainerExpand.md"
          ></CollapseText>
        </div>

      </div>




      {/**Techno x Punsch */}
      <div
        id="technoxpunsch"
        style={{
          display: "flex",
          alignItems: "stretch",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >

        <div
          id="technoxpunschimagewrapper"
          style={{
            position: "relative",
            transform: "translateX(-3vw)",
            zIndex: "1",
            flex: "1 1 60vw"
          }}>

          <img width="100%" src={TxPImg}></img>
        </div>

        <div id="technoxpunschtextwrapper" style={{ marginTop: "2vw", flex: "1 1 550px" }} >
          <CollapseText
            marginTopProp="0vw"
            alwaysSrc="/Pembau/content/aboutContainerAlways.md"

          ></CollapseText>
          <div style={{ display: "flex", flexDirection: "row", flex: "none", marginTop: "2vw", justifyContent: "center", gap: "3vw" }}>
            <div>Button 1</div>
            <div>Button 2</div>
          </div>
        </div>

      </div>


      {/**unnötige testkacke bzgl collapseFrame mit nem collapsetext zusammen, die nicht funktioniert hat.. */}
      {/**Test: neue component mit image und collapsetext gemeinsam  */}

      {/** 
      <ImageWithCollapseText imgSrc={TxPImg} alwaysTextSrc="/Pembau/content/aboutContainerAlways.md" expandTextSrc="/Pembau/content/aboutContainerExpand.md" >
      </ImageWithCollapseText>
*/}
      {/**Test: warum klappt CollapseImage im ImageWithCollapseText nicht? test mit txp bild, vllt liegts nur am bilde */}

      {/**
      <CollapseFrame width={100} height={100} folds={{ topLeft: { horPercent: 15, vertPercent: 10 } }} rotation={0} bgColor="transparent" >
        <img width="100%" src={TxPImg}></img>
      </CollapseFrame>
*/}
      {/**Test CollapseFrame (with image inside) */}

      {/**
      <CollapseFrame width={80} height={50} rotation={2} bgColor="rgb(116, 116, 155)" folds={{ bottomRight: { horPercent: 10, vertPercent: 20 }, topLeft: { horPercent: 10, vertPercent: 20 } }}>
        <img width="100%" src={TestImage}></img>
      </CollapseFrame>
*/}
      {/** TODO: Für TXP am Besten manuell was machen, eig so wie oben bei ContainerCity -> Denn da kommt noch Custom Shit wie Buttons etc. dazu. */}


      <div
        id="perma"
        style={{
          display: "flex",
          flex: "none",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="permaimgwrapper"
          style={{
            position: "relative",
            width: "65vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={PermaCollapsedImg}
            uncollapsedImg={PermaImg}
          ></ImageFrameJPG>
        </div>
        <CollapseText
          marginTopProp="14vw"
          width="55vw"
          alwaysSrc="/Pembau/content/aboutPermaAlways.md"
          expandSrc="/Pembau/content/aboutPermaExpand.md"
        ></CollapseText>
      </div>

      <div
        id="neuerungen"
        style={{
          width: "100vw",
          height: "40vw",
          backgroundColor: "rgba(59, 131, 131, 0.2)",
          textAlign: "center",
        }}
      >
        neuerungen text und buttons placeholder
      </div>

      <div
        id="team"
        style={{
          width: "95vw",
          transform: "translateX(5%) rotate(0deg)",
          zIndex: "2",
        }}
      >
        <ImageFrameJPG
          collapsedImg={TeamCollapsedImg}
          uncollapsedImg={TeamImg}
        ></ImageFrameJPG>
      </div>

      <div
        id="teamdream"
        style={{
          position: "relative",
          width: "95vw",
          transform: "translateX(5%) rotate(0deg)",
          zIndex: "2",
        }}
      >
        <img
          src={TeamDream}
          style={{
            width: "100%",
            height: "auto",
            zIndex: "2",
          }}
        ></img>

        <div
          className="aktuell"
          style={{ position: "absolute", top: "3%", left: "37%", width: "45%" }}
        >
          <h2 style={{ marginBottom: "10%" }}>Ohne Team </h2>
          <p>
            Mehr als 100 Vereinsmitglieder im Verein Frühschicht aus den
            vielfältigsten Lebensrealitäten sind heute schon ehrenamtlich tätig,
            um mit dem Pembau einen neuen Ort für Innsbruck zu erschaffen.
            <br></br> <br></br>
            Unser Projekt richtet sich an Menschen aller Art und jeden Alters,
            die Neues lernen wollen, kreative Ideen entwickeln, Wachstum
            erleben, nach einem Ausgleich suchen oder ihre Erfahrungen teilen
            möchten.
            <br></br> <br></br>
            Der Verein und das Projekt leben von einer bunten Mischung an
            Menschen mit verschiedenen Denkweisen, Talenten und Kompetenzen. Der
            Austausch und das gegenseitige Verständnis fördern eine lebendige
            Gemeinschaft. Wir glauben, jede Perspektive ist wertvoll und
            bereichert unser gemeinsames Wirken – und wir freuen uns deswegen
            über alle, die sich einbringen möchten!
          </p>
          <div style={{ width: "50%", marginTop: "10%" }}>
            <TextButton
              text="TEIL_SEIN"
              width="20vw"
              onClick={() => console.log("implement teil sein")}
            ></TextButton>
          </div>
        </div>


      </div>



    </>

    //Futti Futti
  );
};

export default AboutAktuell;
