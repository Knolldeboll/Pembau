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
*/}
      <div id="nicetryjpg">
        <NiceTryJPG></NiceTryJPG>
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
