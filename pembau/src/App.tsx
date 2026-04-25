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
import Foot from "./menu/Foot";
import AboutAktuell from "./AboutAktuell";



// TODO: Footmenu hier auch?

export const App = () => {



  const menuOpen = useMainStore((state) => state.menuOpen);

  // nur zum testen, remove
  menuOpen ? console.log("menu opened") : console.log("menu closed")


  return <>

    <BrowserRouter>



      <Head currentPage="_HOME"></Head>



      {/**TODO wegen dem Menü: Das sollte ggf. UNTER dem head platziert werden, so vielleicht flex column mäßig ohne flex? 
       * und dann von dem teil aus den margin haben, und nicht vom viewport!
       */}

      {menuOpen && <Menu></Menu>}


      {/**TODO: Routing hierrum */}


      {/**Kann man den Foot auch hier in den Flow mit reingeben? 
         * Header heht ja auch, liegt halt an Positon fixed. 
         */}

      <div id="pageswrapper" style={{

        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        gap: "2vw",
        overflow: "hidden",
      }}>
        <Routes>

          <Route path="/Pembau/" element={<LandingPage></LandingPage>} />
          <Route path="/Pembau/About/" element={<AboutAktuell></AboutAktuell>} />

        </Routes>


        <Foot></Foot>

      </div>



    </BrowserRouter>
  </>



};
