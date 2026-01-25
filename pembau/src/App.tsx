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




export const App = () => {



  const menuOpen = useMainStore((state) => state.menuOpen);

  // nur zum testen, remove
  menuOpen ? console.log("menu opened") : console.log("menu closed")


  return <>

    <BrowserRouter>



      <div id="headmenu" style={{
        position: "fixed",
        width: "100vw",
        height: "10vw",
        top: "0%",
        left: "0%",
        zIndex: "4",
        backgroundColor: "#000000"
      }}>
        <Head currentPage="_HOME"></Head>
      </div>



      {menuOpen && <div id="sidemenu" style={{
        position: "fixed",
        width: "35vw",
        height: "100vh",
        top: "5%",
        right: "-5%",
        zIndex: "3",
        backgroundColor: "#ffffff",
        transform: "rotate(-5deg)"
      }} >
        <Menu></Menu>


      </div>}


      {/**TODO: Routing hierrum */}

      <Routes>

        <Route path="/Pembau/" element={<LandingPage></LandingPage>} />
        <Route path="/" element={<LandingPage></LandingPage>} />

      </Routes>




    </BrowserRouter>
  </>



};
