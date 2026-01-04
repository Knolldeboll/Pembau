import MehrErfahrenButton from "./Components/MehrErfahrenButton";
import NiceTry from "./NiceTry/NiceTry";
import NiceTryJPG from "./NiceTry/NiceTryJPG";
import NiceTryVector from "./NiceTry/NiceTryVector";
import SVGTest from "./SVGTest";

const Body = () => {
  return (
    <div className="body-instance">
      {/*
      <div id="nicetry">
        <BodyFrame1
          activeCorners={{ topLeft: true, bottomLeft: true }}
          cornerColor="#3d3636ff"
        ></BodyFrame1>
      </div>
*/}

      {/*
      <div id="nicetryvector">
        <NiceTryVector></NiceTryVector>
      </div>

        left: "-29.28 %",
        right: "-3.79 %",
        top: "-0.18 %",
        bottom: "81.15 %",

        VVVVVVVVVVVVVV
*/}
      <div id="nicetryjpg" style={{
        position: "absolute",
        width: "150%",
        height: "auto",
        top: "-0.18%",
        left: "-29%",


        transform: "rotate(1.44deg)"

      }}>
        <NiceTryJPG></NiceTryJPG>


      </div>

      <div style={{

        position: "absolute",
        width: "20%",
        height: "auto",
      }}></div>
      <MehrErfahrenButton></MehrErfahrenButton>
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
