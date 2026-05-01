// images
import GeschichteImg from "./assets/about/geschichteuncollapsed.webp";
import GeschichteCollapsedImg from "./assets/about/geschichtecollapsed.webp";
//import LeitbildImg from "./assets/about/leitbildwerte.webp";
//import LeitbildCollapsedImg from "./assets/about/leitbildwertebrtl.webp";
//import StartImg from "./assets/about/neu für start.webp";
import StartCollapsedImg from "./assets/about/neu für start br.webp";

import KulturImg from "./assets/about/kultur.webp";
import KulturCollapsedImg from "./assets/about/kulturbrtl.webp";
import HelpingHandsImg from "./assets/about/helpinghands.webp";
import HelpingHandsCollapsedImg from "./assets/about/helpinghandstrbl.webp";
import ContainerImg from "./assets/about/container.webp";
import ContainerCollapsedImg from "./assets/about/containerbltr.webp";
import InnsbruckLogo from "./assets/about/logoinnsbruck.webp";


import TxPImg from "./assets/about/txp.webp";
import PermaImg from "./assets/about/perma.webp";
import VisionImg from "./assets/about/vision.webp";
import PermaCollapsedImg from "./assets/about/permatrbl.webp";
import TeamImg from "./assets/about/team.webp";
import TeamCollapsedImg from "./assets/about/teambrtl.webp";
import TeamDream from "./assets/about/teamdream.webp";


import ImageFrameJPG from "./Components/ImageFrameJPG";

//import images from "./assets/about/images.json";
import TestRectImg from "./assets/bg-2.jpg";

//import Foot from "./menu/Foot";

//md texts

//import aboutGeschichteAlways from "./content/aboutGeschichteAlways.md"

import { CollapseText } from "./Components/CollapseText";
//import TextFrameAktuell from "./Customframes/TextFrameAktuell";
//import TextButton from "./Components/TextButton";
//import { CollapseImageFrame } from "./Components/CollapseImageFrame";
//import BodyFrame1 from "./alter shit/BodyFrame1";
//import TestImage from "./assets/bg-1.jpg"
//import { Carousel } from "./Components/Carousel";
//import { CollapseFrame } from "./Components/CollapseFrame";
//import CollapseFrameWithCollapseText from "./Components/CollapseFrameWithCollapseText";
import { ImageFrameJPGWithCollapseText } from "./Components/ImageFrameJPGWithCollapseText";
import { Carousel } from "./Components/Carousel";
import { CollapseFrame } from "./Components/CollapseFrame";
//import TextButton from "./Components/TextButton";
//import TextFrameGeschichte from "./Customframes/TextFrameGeschichte";

const AboutAktuell = () => {
  console.log("testrectimg:", TestRectImg);

  const imageModules = import.meta.glob<string>('./assets/about/carousel/*.webp', { eager: true, import: 'default' })
  const carouselImages: string[] = Object.values(imageModules);
  //console.log("image paths: ", carouselImages)

  return (
    <>
      <div
        id="start_about"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100vw",
          overflow: "hidden",  // Clip overflow
          zIndex: "1",
          height: " fit-content",
          marginBlockEnd: "-8vw",
        }}
      >
        <div style={{
          flex: "1 1 60%",
          minWidth: "550px",
          transform: " translateX(-17vw) translateY(-8vw)",
          zIndex: "1"
        }}>
          <img src={StartCollapsedImg} style={{ width: "100%", height: "auto" }}></img>
        </div>

        <div
          id="start_about_menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
            height: "fit-content",
            minWidth: "170px",
            zIndex: "2",
            alignSelf: "center",
            transform: " translateY(-5vw) translateX(-25vw) rotate(10deg)   ",

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


      {/** Raus_ altes lbwt 
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
*/}

      {/*Leitbild neu/skalierbar: */}
      <div className="leitbild leitbildSmall" style={{ display: "flex", justifyContent: "center" }}>
        <CollapseFrame width={80} height={100} rotation={0} folds={{ topLeft: { horPercent: 60, vertPercent: 25, perma: true }, bottomRight: { horPercent: 25, vertPercent: 25, perma: false } }} foldColor="#30196C">
          <h2 style={{ rotate: "32deg", position: "absolute", left: "12%", top: "33%", zIndex: "3" }}>Leitbild</h2>
          <h2 style={{ rotate: "-55deg", position: "absolute", left: "30%", top: "30%", zIndex: "3" }}>_UND</h2>
          <div id="leitbildtextcontainer" style={{ width: "100%", height: "100%", backgroundColor: "#C3D9FF" }}>

            <div id="lowerlefttext" style={{ position: "absolute", top: "40%", left: "5%", width: "45%", }}>
              <p>Der Pembau lebt von Menschen. Von ihren Ideen, ihrer Vielfalt und ihrem gemeinsamen Wunsch nach Ausdruck.
                Wir sind überzeugt davon, dass echte Entwicklung dort entsteht, wo Menschen sich ausprobieren dürfen - in einem sicheren, inspirierenden, respektvollen Umfeld. Wir wollen Räume schaffen, in denen Menschen sich entfalten, begegnen, wachsen, ausprobieren und mitgestalten können - als Individuum und als Gemeinschaft.
                Pembau mehr als ein Ort - er ist eine Haltung und ein Wunsch nach Wandel und Veränderung.
                Wir tragen gemeinsame Werte, die unser Miteinander und unser Tun prägen. Sie sind nicht starr, sondern wachsen mit uns, genauso wie der Ort selbst.
                Er soll als Raum dienen, Kultur neu zu denken und auszuprobieren - die eigenen Grenzen zu sprengen und die eines bestehenden Systems.
                Kultur nicht als etwas, das wir nur konsumieren, sondern das wir aktiv gestalten und entwickeln - und wo jeder Selbstwirksamkeit erfahren kann.
              </p>
            </div>

            <div id="upperrighttext" className="hide-scrollbar-blue" style={{ position: "absolute", top: "7%", right: "1%", width: "45%", overflowY: "scroll", height: "90%" }}>
              <h2>Werte</h2>

              <h3>GEMEINSCHAFT_IM ZENTRUM</h3>
              <p>Wir schaffen Räume in denen Menschen sich<wbr />
                verbinden können. Mit sich selbst, mit anderen und<wbr />
                mit einer gemeinsamen Vision. </p>

              <h3>VERANTWORTUNG_HEIßt ACHTSAM ZU HANDELN</h3>
              <p>Im Umgang miteinander, mit der Umwelt, mit uns<wbr />
                selbst und dem Raum den wir gestalten.</p>

              <h3>EMPOWERMENT_ALS ANTRIEB</h3>
              <p>Wir glauben daran, dass jede*r etwas beitragen kann <wbr />
                wenn es Raum zum Ausprobieren, Lernen und<wbr />
                Wachsen gibt. Den Mut, das Selbstvertrauen und die<wbr />
                Lust, Dinge selbst in die Hand zu nehmen wollen wir<wbr />
                fördern.</p>

              <h3>FREIHEIT_ALS MÖGLICHKEIT ZUR ENTFALTUNG</h3>
              <p>Sowohl persönlich, kreativ und gesellschaftlich. Dabei<wbr />
                endet die eigene Freiheit dort, wo die des <wbr />
                Gegenübers beginnt.</p>

              <h3>KREATIVE VERSPIELTHEIT_EINE EINLADUNG</h3>
              <p>Wir wollen neugierig bleiben. Wie auf einem Spielplatz<wbr />
                wollen wir ausprobieren, scheitern, weiterdenken -<wbr />
                gemeinsam, spontan und mit Freude am Prozess.</p>

              <h3>AUTHENTIZITÄT_IST WICHTIGER ALS PERFEKTION</h3>
              <p>Was zählt ist Raum für echten Ausdruck, ein ehrliches<wbr />
                Miteinander und Offenheit - auch gegenüber<wbr />
                Unsicherheiten, Zweifeln oder Ungewohnten.</p>

              <h3>NACHHALTIGKEIT_ALS ALLUMASSENDER BEGRIFF</h3>
              <p>Ökologisch, sozial, kulturell und wirtschaftlich. Was wir<wbr />
                hier schaffen, soll nicht nur für den Moment bestehen,<wbr />
                sondern auch langfristig tragfähig und sinnvoll sein.</p>

            </div>
          </div>
        </CollapseFrame >
      </div>


      {/*Leitbild neu/skalierbar: */}
      <div className="leitbild leitbildBig" style={{ display: "flex", justifyContent: "center", marginRight: "10vw" }}>
        <CollapseFrame width={80} height={250} rotation={0} folds={{ topLeft: { horPercent: 50, vertPercent: 10, perma: true }, bottomRight: { horPercent: 30, vertPercent: 12, perma: false } }} foldColor="#30196C">
          <h2 style={{ rotate: "28deg", position: "absolute", left: "0%", top: "10.5%", zIndex: "3" }}>Leitbild</h2>
          <h2 style={{ rotate: "-62deg", position: "absolute", left: "28%", top: "8.5%", zIndex: "3" }}>_UND</h2>
          <div id="leitbildtextcontainer" style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#C3D9FF" }}>

            <div id="lowerlefttext" className="hide-scrollbar-blue" style={{ position: "absolute", top: "18%", left: "5%", width: "45%", overflowY: "scroll", height: "79%" }}>
              <p>Der Pembau lebt von Menschen. Von ihren Ideen, ihrer Vielfalt und ihrem gemeinsamen Wunsch nach Ausdruck.
                Wir sind überzeugt davon, dass echte Entwicklung dort entsteht, wo Menschen sich ausprobieren dürfen - in einem sicheren, inspirierenden, respektvollen Umfeld. Wir wollen Räume schaffen, in denen Menschen sich entfalten, begegnen, wachsen, ausprobieren und mitgestalten können - als Individuum und als Gemeinschaft.
                Pembau mehr als ein Ort - er ist eine Haltung und ein Wunsch nach Wandel und Veränderung.
                Wir tragen gemeinsame Werte, die unser Miteinander und unser Tun prägen. Sie sind nicht starr, sondern wachsen mit uns, genauso wie der Ort selbst.
                Er soll als Raum dienen, Kultur neu zu denken und auszuprobieren - die eigenen Grenzen zu sprengen und die eines bestehenden Systems.
                Kultur nicht als etwas, das wir nur konsumieren, sondern das wir aktiv gestalten und entwickeln - und wo jeder Selbstwirksamkeit erfahren kann.
              </p>
            </div>

            <div id="werteh2placer" style={{ display: "flex", flexDirection: "column", flex: "none", position: "absolute", top: "7%", right: "1%", width: "45%", height: "90%" }}>
              <h2>Werte</h2>

              <div id="upperrighttext" className="hide-scrollbar-blue" style={{ overflowY: "scroll", overflowX: "hidden", }}>

                <h3>GEMEINSCHAFT_<wbr />IM ZENTRUM</h3>
                <p>Wir schaffen Räume in denen Menschen sich<wbr />
                  verbinden können. Mit sich selbst, mit anderen und<wbr />
                  mit einer gemeinsamen Vision. </p>

                <h3>VERANTWORTUNG_<wbr />HEIßt ACHTSAM ZU HANDELN</h3>
                <p>Im Umgang miteinander, mit der Umwelt, mit uns<wbr />
                  selbst und dem Raum den wir gestalten.</p>

                <h3>EMPOWERMENT_<wbr />ALS ANTRIEB</h3>
                <p>Wir glauben daran, dass jede*r etwas beitragen kann <wbr />
                  wenn es Raum zum Ausprobieren, Lernen und<wbr />
                  Wachsen gibt. Den Mut, das Selbstvertrauen und die<wbr />
                  Lust, Dinge selbst in die Hand zu nehmen wollen wir<wbr />
                  fördern.</p>

                <h3>FREIHEIT_<wbr />ALS MÖGLICHKEIT ZUR ENTFALTUNG</h3>
                <p>Sowohl persönlich, kreativ und gesellschaftlich. Dabei<wbr />
                  endet die eigene Freiheit dort, wo die des <wbr />
                  Gegenübers beginnt.</p>

                <h3>KREATIVE VERSPIELTHEIT_<wbr />EINE EINLADUNG</h3>
                <p>Wir wollen neugierig bleiben. Wie auf einem Spielplatz<wbr />
                  wollen wir ausprobieren, scheitern, weiterdenken -<wbr />
                  gemeinsam, spontan und mit Freude am Prozess.</p>

                <h3>AUTHENTIZITÄT_<wbr />IST WICHTIGER ALS PERFEKTION</h3>
                <p>Was zählt ist Raum für echten Ausdruck, ein ehrliches<wbr />
                  Miteinander und Offenheit - auch gegenüber<wbr />
                  Unsicherheiten, Zweifeln oder Ungewohnten.</p>

                <h3>NACHHALTIGKEIT_<wbr />ALS ALLUMASSENDER BEGRIFF</h3>
                <p>Ökologisch, sozial, kulturell und wirtschaftlich. Was wir<wbr />
                  hier schaffen, soll nicht nur für den Moment bestehen,<wbr />
                  sondern auch langfristig tragfähig und sinnvoll sein.</p>

              </div>

            </div>
          </div>
        </CollapseFrame >
      </div>




      {/**
      <div className="leitbild leitbildBid">

        *TODO Big Smoke number 9 large
         * 
        
      </div> */}








      {/*geschichte*/}


      <div
        id="geschichte"
        style={{
          display: "flex",
          flex: "none",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="geschichteimgwrapper"
          style={{
            position: "relative",
            flex: "1 1 60vw",

            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >       {/**nicht mehr gebraucht: ist jetzt image. 
          <p
            className="h1serif"
            style={{
              display: "block",
              position: "absolute",

              left: "42%",
              top: "-2%",
              rotate: "20deg",
              width: "60vw",
              textAlign: "center",
              height: "fit-content",
              zIndex: "0",
              fontSize: "max(1rem,2.5vw)"

            }}
          >
            Vom
            <span className="dmsans700orange" style={{ fontSize: "max(1rem,2.5vw)" }} >
              _BAUERNHOF
              <br />
              _ZUR{" "}
            </span>
            _Kulturplattform
          </p>

          */}
          <ImageFrameJPG
            collapsedImg={GeschichteCollapsedImg}
            uncollapsedImg={GeschichteImg}
          ></ImageFrameJPG>


        </div>


        {/**Textsize ist responsive! */}
        <div id="geschichtetextwrapper" style={{ flex: "1 1 550px", marginTop: "14vw" }} >


          <CollapseText
            alwaysSrc="/Pembau/content/aboutGeschichteAlways.md"
            expandSrc="/Pembau/content/aboutGeschichteExpand.md"
          ></CollapseText>

        </div>
      </div>


      {/**Grundstück */}
      <div
        id="grundstück"
        style={{
          position: "relative",
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

        {/*hier absolute, für platzierung innerhalb des imgs.*/}
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

          color: "#000000",
        }}
      >
        <div className="aktuell">
          <h2 >PEMBAU<span >_aktuell</span></h2>
          <p >Der Pembau ist derzeit ein Ort im Aufbau. Mögliche Konzepte für den Ort werden erforscht und getestet. Menschen kommen zusammen, tauschen sich aus, bauen auf, füllen die Räume mit Leben – und eine lebendige Gemeinschaft entsteht. Da sich das Gelände aktuell im rechtlichen Übergang befindet, finden die Aktivitäten bisher im Rahmen privater Veranstaltungen statt – doch das soll sich bald ändern! Aktuell arbeiten wir daran, die Infrastruktur auszubauen und rechtliche Grundlagen zu schaffen, um das Gelände Stück für Stück für mehr Menschen nutzbar und zugänglich zu machen.</p>

        </div>
      </div>


      {/** TODO: Hier Slideshow*/}

      <div style={{ alignSelf: "center", width: "95vw", height: "max(45vw, 300px)" }}>
        <Carousel images={carouselImages}></Carousel>
      </div>


      <div className="aktuell" style={{ width: "65vw", marginLeft: "5vw", }}>
        <p>
          Alles was bisher schon am Pembau entsteht, entstanden ist und
          entstehen soll, dass erfährst du hier:
        </p>
      </div >

      {/*Ab hier die Bilder mit Collapsetext nebenan    transform: "translateX(25vw )translateY(-70vw) rotate(20deg)", transform: "translateX(25vw )translateY(-70vw) rotate(20deg)",*/}



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

          {/**Normal kommt hier imgFrameJpg */}
          <img width="100%" src={TxPImg}></img>
        </div>

        <div id="technoxpunschtextwrapper" style={{ marginTop: "2vw", flex: "1 1 550px" }} >
          <CollapseText
            marginTopProp="0vw"
            alwaysSrc="/Pembau/content/aboutTxPAlways.md"
          ></CollapseText>
          <div style={{ display: "flex", flexDirection: "row", flex: "none", marginTop: "2vw", justifyContent: "center", gap: "3vw" }}>
            <div id="instatxp" style={{
              display: "flex", flexDirection: "column", flex: "none", alignItems: "center"
            }} >
              <p className="dmsans400regularresponsive">Folge Techno x Punsch</p>
              <a
                className="socialmedialinkwrapper"
                href="https://www.instagram.com/technoxpunsch/"
              >
                <svg style={{ width: "5vw" }}
                  className="blackicon socialmediaicon"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.47574 0.518077C10.376 -0.192367 26.5208 -0.111314 30.6928 0.394103C34.5693 0.866143 37.1679 3.99877 37.597 7.79416C38.1739 12.9342 38.0834 24.5063 37.6161 29.7464C37.2203 34.195 34.7552 37.0845 30.2065 37.5947C25.0665 38.1716 13.4944 38.081 8.25424 37.6137C3.80562 37.218 0.91616 34.7529 0.405975 30.2041C-0.104209 25.6554 -0.1805 11.9758 0.448886 7.3555C0.873246 4.22764 3.3002 1.09024 6.48051 0.513305L6.47574 0.518077ZM7.42459 3.37893C4.74016 3.92249 3.54338 6.2207 3.26206 8.75255C2.75664 13.3013 2.75187 24.7066 3.26206 29.2601C3.69119 33.1079 5.48398 34.4334 9.20308 34.7624C14.0332 35.1916 24.5134 35.2726 29.2481 34.7434C31.6417 34.4764 33.2438 33.785 34.1401 31.5011C35.2559 28.6641 35.0318 9.69663 34.1401 6.47818C33.6109 4.56618 31.6274 3.48859 29.7297 3.25972C26.0869 2.82106 10.7003 2.71616 7.41983 3.37893H7.42459Z" />
                  <path d="M16.9656 9.58242C30.4545 7.2842 32.5238 26.4662 21.0328 28.4259C7.54386 30.7241 5.47451 11.5421 16.9656 9.58242ZM17.4424 12.4337C9.88022 13.9691 11.201 26.4471 19.6548 25.6556C28.7141 24.8069 26.7354 10.5456 17.4424 12.4337Z" />
                  <path d="M29.0528 8.94282C27.8751 7.78895 29.6154 5.74344 31.0077 6.8544C32.4811 8.03212 30.488 10.3494 29.0528 8.94282Z" />
                </svg>
              </a>
            </div>
            <div id="innsbruck" style={{
              display: "flex", flexDirection: "column", flex: "none", alignItems: "center"
            }} >
              <p className="dmsans400regularresponsive">Gefördert von</p>
              <img width="100vw" src={InnsbruckLogo}></img>
            </div>
          </div>
        </div>

      </div>

      {/**Kultursommer - ok wrapped!*/}
      <div
        id="kultursommer"
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
          id="kulturimgwrapper"
          style={{
            position: "relative",
            flex: "1 1 60vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={KulturCollapsedImg}
            uncollapsedImg={KulturImg}
          ></ImageFrameJPG>
        </div>

        <div id="kulturtextwrapper"
          style={{ flex: "1 1 550px" }}
        >
          <CollapseText
            alwaysSrc="/Pembau/content/aboutKulturAlways.md"
            expandSrc="/Pembau/content/aboutKulturExpand.md"
          ></CollapseText>
        </div>

      </div>




      {/**helpinghands  - ok wrapped!*/}
      <div
        id="helpinghands"
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
          id="helpingimgwrapper"
          style={{
            position: "relative",
            flex: "1 1 60vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={HelpingHandsCollapsedImg}
            uncollapsedImg={HelpingHandsImg}
          ></ImageFrameJPG>
        </div>

        <div id="helpingtextwrapper" style={{ flex: "1 1 550px", marginTop: "14vw" }} >
          <CollapseText
            marginTopProp="0vw"
            alwaysSrc="/Pembau/content/aboutHelpingAlways.md"
            expandSrc="/Pembau/content/aboutHelpingExpand.md"
          ></CollapseText></div>

      </div>




      {/** gut gedacht das auszutauschen, aber das originale hat eben auch custom styling drinnen, bzgl. translate, margins & percentage! 

      <ImageFrameJPGWithCollapseText
        alwaysTextSrc="/Pembau/content/aboutHelpingAlways.md"
        expandTextSrc="/Pembau/content/aboutHelpingExpand.md"
        collapsedImg={HelpingHandsCollapsedImg} uncollapsedImg={HelpingHandsImg} >
      </ImageFrameJPGWithCollapseText>
*/}

      {/**Container City - hier passt das neue Component ja. */}

      <ImageFrameJPGWithCollapseText
        alwaysTextSrc="/Pembau/content/aboutContainerAlways.md"
        expandTextSrc="/Pembau/content/aboutContainerExpand.md"
        collapsedImg={ContainerCollapsedImg} uncollapsedImg={ContainerImg} >
      </ImageFrameJPGWithCollapseText>






      {/**unnötige testkacke bzgl collapseFrame mit nem collapsetext zusammen, die nicht funktioniert hat.. */}
      {/**Test: neue component mit image und collapsetext gemeinsam  */}

      {/** 
      <CollapseFrameWithCollapseText imgSrc={TxPImg} alwaysTextSrc="/Pembau/content/aboutContainerAlways.md" expandTextSrc="/Pembau/content/aboutContainerExpand.md" >
      </CollapseFrameWithCollapseText>
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
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "5vw",
          zIndex: "2",
        }}
      >
        <div
          id="permaimgwrapper"
          style={{
            position: "relative",
            flex: "1 1 60vw",
            transform: "translateX(-3vw)",
            zIndex: "1",
          }}
        >
          <ImageFrameJPG
            collapsedImg={PermaCollapsedImg}
            uncollapsedImg={PermaImg}
          ></ImageFrameJPG>
        </div>

        <div id="permatextwrapper"
          style={{ flex: "1 1 550px" }}>

          <CollapseText
            marginTopProp="14vw"
            alwaysSrc="/Pembau/content/aboutPermaAlways.md"
          ></CollapseText>
        </div>

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
          alignSelf: "flex-end",
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
          style={{ position: "absolute", top: "3%", left: "37%", width: "40%", height: "90%", overflow: "scroll" }}
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

          {/**Aktuell draußen der Button - gibt kein Teil sein Link! 
          <div style={{ width: "50%", marginTop: "10%" }}>
            <TextButton
              text="TEIL_SEIN"
              width="20vw"
              onClick={() => console.log("implement teil sein")}
            ></TextButton>
          </div>*/}
        </div>

        {/**Test CollapseFrame (with image inside) 


        <CollapseFrame width={80} height={50} rotation={2} bgColor="rgb(116, 116, 155)" folds={{ bottomRight: { horPercent: 10, vertPercent: 20, perma: true }, topLeft: { horPercent: 10, vertPercent: 20 } }}>
          <img width="100%" height="100%" src={TeamImg}></img>
        </CollapseFrame>
*/}

      </div>



    </>

    //Futti Futti
  );
};

export default AboutAktuell;
