import MehrErfahrenButton from "./Components/MehrErfahrenButton";
import NiceTry from "./NiceTry/NiceTry";
import NiceTryJPG from "./NiceTry/NiceTryJPG";
import NiceTryVector from "./NiceTry/NiceTryVector";
import SVGTest from "./SVGTest";
import TextFrameAussicht from "./TextFrameAussicht";

const Body = () => {
  return (
    <div className="body-instance"
      style={{

        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF"
      }}>

      {/* früher war die hor. verschiebung und der rotate über position absolute und dann top gemacht. 
      besser aber für alles nur translate verwenden, um den normalen dokumentenflow zu erhalten und vertikale
      positionierung dann über gap machen. */}

      <div id="nicetryjpg" style={{
        width: "150vw",
        transform: "translateX(-29%) rotate(1.44deg)"

      }}>
        <NiceTryJPG></NiceTryJPG>
      </div>

      {/**alter css von aussicht 
       * 
        position: "absolute",
        width: "79%",
        height: "auto",
        left: "11.69%",
        top: "10.57%"
      */}
      <div style={{
        width: "79vw"
      }}>
        <TextFrameAussicht></TextFrameAussicht>
      </div>


      {/*
      <div id="test">
        <BodyFrame2></BodyFrame2>
      </div>

      */}

      {/** 
      <div id="aussicht">
        <BodyFrame1
          activeCorners={{ topLeft: true, bottomRight: true }}
          cornerColor="#000000ff"
        ></BodyFrame1>
      </div>

      */}
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
