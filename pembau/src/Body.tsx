import BodyFrame1 from "./BodyFrame1";

const Body = () => {
  return (
    <div className="body-instance">
      <BodyFrame1
        activeCorners={{ topLeft: true, bottomLeft: true }}
      ></BodyFrame1>
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
