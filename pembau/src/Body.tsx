

//Images
import NiceTryImg from "./NiceTry/NiceTry.jpg"
import NiceTryCollapsedImg from "./NiceTry/NiceTryTrBljpg.jpg"
import AussichtImg from "./assets/Aussicht.jpg";
import AussichtCollapsedImg from "./assets/AussichtBrTl.jpg";
import GestaltenImg from "./assets/Gestalten.webp";
import GestaltenCollapsedImg from "./assets/GestaltenBrTl.webp";


// Components
import ImageFrameJPG from "./Components/ImageFrameJPG";
import TextFrameAussicht from "./TextFrameAussicht";
import { Head } from "./Head";
import TextFrameGestalten from "./TextFrameGestalten";

const Body = () => {





  return (
    <div className="body-instance"
      style={{

        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        gap: "2vw",
        overflow: "hidden",
      }}>


      <div id="headmenu" style={{
        position: "fixed",
        width: "100vw",
        height: "12vw",
        top: "0%",
        left: "0%",
        zIndex: "3",
        backgroundColor: "#000000"
      }}>
        <Head></Head>
      </div>

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
      }}>
        <ImageFrameJPG collapsedImg={NiceTryCollapsedImg} uncollapsedImg={NiceTryImg}></ImageFrameJPG>
      </div>

      <div id="textframeaussicht" style={{
        width: "80vw",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ccccccff",
        marginTop: "-5vw",
        zIndex: "2",
      }}>
        <TextFrameAussicht></TextFrameAussicht>
      </div>


      <div id="aussicht" style={{
        width: "120vw",
        marginTop: "-4vw",
        transform: "translateX(-9%)rotate(3deg)",
        zIndex: "1",
      }}>
        <ImageFrameJPG collapsedImg={AussichtCollapsedImg} uncollapsedImg={AussichtImg}></ImageFrameJPG>
      </div>


      <div id="gestalten" style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "-6vw",
        width: "100vw",

      }}>

        <div style={{


          width: "50%",
          zIndex: "1",

        }}>

          <TextFrameGestalten></TextFrameGestalten>

        </div>

        <div style={{
          width: "50%",
          zIndex: "2",


          transform: "translateX(-3vw) translateY(11vw) scale(170%) rotate(-10deg)"
        }} >
          <ImageFrameJPG collapsedImg={GestaltenCollapsedImg} uncollapsedImg={GestaltenImg}></ImageFrameJPG>

        </div>

      </div>

      <div id="placeholder" style={{ width: "100vw", height: "100vw" }}></div>

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
export default Body;
