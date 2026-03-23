import { Link } from "react-router";

// TODO: Durch React-router-links austauschen wenn Links da.

const Menu = () => {
  return (
    <div
      id="sidemenu"
      style={{
        position: "fixed",
        width: "fit-content",
        paddingRight: "25vw",
        height: "100vh",
        top: "0%",
        right: "-25%",
        zIndex: "3",
        backgroundColor: "#ffffff",
        transform: "rotate(-5deg)",
      }}
    >
      <div
        id="menu"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7vw",
          marginTop: " max(15vw, 6rem)",
          marginLeft: "5vw",
        }}
      >
        <Link className="h4 hoverable " to={"/Pembau/About/"}>
          _ABOUT
        </Link>
        <Link className="h4 hoverable m10t" to={""}>
          _KONTAKT
        </Link>
        <Link className="h4 hoverable m10t" to={""}>
          _FORUM
        </Link>
        <Link className="h4 hoverable m10t" to={""}>
          _INFRASTRUKTUR
        </Link>
        <Link className="h4 hoverable m10t" to={""}>
          _PROGRAMM
        </Link>
        <Link className="h4 hoverable m10t" to={""}>
          _MITWIRKEN
        </Link>
      </div>
    </div>
  );
};

export default Menu;
