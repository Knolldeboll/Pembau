//import { Head } from "./Head";
/*import { About } from "./About";
import { Aussicht } from "./Aussicht";
import { Futter } from "./Futter";
import { Gestalten } from "./Gestalten";

import { Hoch } from "./Hoch";
import { Instagram } from "./Instagram";
import { KeinprogrammKein } from "./KeinprogrammKein";
import { Mithelfen } from "./Mithelfen";
import { NiceTry } from "./NiceTry";
import { PropertyDefault } from "./PropertyDefault";
import { TeilSein } from "./TeilSein";

*/

import { BrowserRouter, Route, Routes } from "react-router";
import { Head } from "./menu/Head";
import LandingPage from "./LandingPage";
import Menu from "./menu/Menu";
import { useMainStore } from "./stores/MainStore";
import About from "./About";




// TODO: Footmenu hier auch?

export const App = () => {



  const menuOpen = useMainStore((state) => state.menuOpen);

  // nur zum testen, remove
  menuOpen ? console.log("menu opened") : console.log("menu closed")


  return <>

    <BrowserRouter>



      <div id="headmenu" style={{
        position: "fixed",
        width: "100vw",
        height: "max(10vw,5rem)",
        top: "0%",
        left: "0%",
        zIndex: "4",
        justifyContent: "center",
        backgroundColor: "#000000"
      }}>
        <Head currentPage="_HOME"></Head>
      </div>


      {/**TODO wegen dem Menü: Das sollte ggf. UNTER dem head platziert werden, so vielleicht flex column mäßig ohne flex? 
       * und dann von dem teil aus den margin haben, und nicht vom viewport!
       */}

      {menuOpen && <Menu></Menu>}


      {/**TODO: Routing hierrum */}

      <Routes>

        <Route path="/Pembau/" element={<LandingPage></LandingPage>} />
        <Route path="/Pembau/About/" element={<About></About>} />

      </Routes>




    </BrowserRouter>
  </>



};
