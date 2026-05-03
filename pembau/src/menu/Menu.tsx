import { Link } from "react-router";
import { useMainStore } from "../stores/MainStore";

// TODO: Durch React-router-links austauschen wenn Links da.

const Menu = () => {

  const toggleMenuOpen = useMainStore((state) => (state.toggleMenuOpen));


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

      {/**Voll smart auch: max (vh vs vw) - das eine trägt bei h>w mehr effekt, das andere bei h<w - Screens! Dient zum Umschalten und adäquaten Spacing entlang der mental Axis! */}
      <div
        id="menu"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "max(3vh,3.5vw)",
          marginTop: " max(15vh,9.5vw)",
          marginLeft: "5vw",
        }}
      >

        <Link className="h4 hoverable" to={"/Pembau/About/#leitbild"} onClick={toggleMenuOpen}>
          _ABOUT
        </Link>
        {/**TODO: Toggle Contacts open, no to={}*/}
        <Link className="h4 hoverable" to={""} onClick={toggleMenuOpen}>
          _KONTAKT
        </Link>

        {/*
        <Link className="h4 hoverable" to={""}>
          _FORUM
        </Link>
        <Link className="h4 hoverable" to={""}>
          _INFRASTRUKTUR
        </Link>*/}
        {/**TODO:  to={../#Programm} falls es das gibt!*/}
        <Link className="h4 hoverable" to={""} onClick={toggleMenuOpen}>
          _PROGRAMM
        </Link>
        {/*
        <Link className="h4 hoverable" to={""}>
          _MITWIRKEN
        </Link>
        */}
      </div>
    </div>
  );
};

export default Menu;
