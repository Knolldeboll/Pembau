import { Link } from "react-router";
import { useMainStore } from "../stores/MainStore";

// TODO: Durch React-router-links austauschen wenn Links da.

const Menu = () => {

  const toggleMenuOpen = useMainStore((state) => (state.toggleMenuOpen));

  const setStoreContactsOpen = useMainStore((state) => state.setContactsOpen)

  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div
      id="sidemenu"
      style={{
        position: "fixed",
        width: "clamp(150px,30%, 576px)",
        height: "120vh",
        top: "0%",
        right: "max(0px, calc((100vw - 1920px) / 2))",
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

        <Link className="h4 hoverable" to={"/About/"} onClick={toggleMenuOpen}>
          _ABOUT
        </Link>
        {/**TODO: Toggle Contacts open, no to={}*/}
        <a className="h4 hoverable" onClick={() => { toggleMenuOpen(); setStoreContactsOpen(true); scrollToEnd(); }}>
          _KONTAKT
        </a>

        {/*
        <Link className="h4 hoverable" to={""}>
          _FORUM
        </Link>
        <Link className="h4 hoverable" to={""}>
          _INFRASTRUKTUR
        </Link>*/}
        {/**TODO:  to={../#Programm} falls es das gibt!
        <Link className="h4 hoverable" to={"/About/#programm"} onClick={toggleMenuOpen}>
          _PROGRAMM
        </Link>*/}

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
