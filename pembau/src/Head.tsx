//import React from "react";
//import { BurgerIcon } from "./BurgerIcon";
//import { LogoIcon } from "./LogoIcon";
import { useMainStore } from "./stores/MainStore";
import "./style.css";
//import { Burger } from "./Burger";
//import { TextHome } from "./TextHome";

interface HeadProps {

  currentPage: string,
}



// TODO: CurrentPage nicht per Props, sondern aus dem Store ziehen.
// Vorteil ist, dass der shit dann von überall aus gesetzt werden kann, und nicht nur aus der Parent-Component! 
// Machts ggf. einfacher bei den ganzen Links
export const Head = ({ currentPage }: HeadProps) => {




  const toggleMenuOpen = useMainStore((state) => (state.toggleMenuOpen));



  return (

    <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>



      <div id="logodiv" style={{
        display: "flex", flexDirection: "row", width: "15vw", height: "auto",
        marginLeft: "1.5%",
        marginTop: "1.5%"
      }}

      >

        <svg className="icon" onClick={() => console.log("clickcik")} viewBox="0 0 97 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.92857 18.5328V5.71563H23.0365V11.5473L6.92857 18.5328ZM29.9641 0H0V40.4144H6.92857V24.4794L29.9651 15.415V0H29.9641Z" />
          <path d="M40.1866 18.5908V5.94662H55.6016V11.1423L40.1866 18.5898V18.5908ZM61.3752 0H34.2979V40.4144H61.3752V34.4678H40.1866V24.4794L61.3752 15.299V0Z" />
          <path d="M97 0H65.072V40.3564H70.9896V5.83164H78.0777V40.3564H83.8772L83.8192 5.83164H91.0244L91.0834 40.3564H97V0Z" />
          <path d="M6.81256 81.0019V67.0878L22.7476 75.1713V81.003H6.81256V81.0019ZM6.81256 62.0641V51.7878H22.7476V57.5034L6.81256 62.0651V62.0641ZM29.5601 46.1871H0V86.6015H29.5601V71.4175L13.3361 65.4129L29.5601 61.3722V46.1882V46.1871Z" />
          <path d="M40.2436 81.0019V73.8434L55.7166 64.432V81.0019H40.2436ZM61.6632 46.1871H34.297V52.0757H55.7166V57.7334L34.297 71.3015V86.6015H61.6632V46.1871Z" />
          <path d="M97 46.1871H91.1114V80.6549H70.9617V46.1871H65.072V86.6015H97V46.1871Z" />
        </svg>


        <p className="headline" style={{ color: "#ffffff", fontSize: "2vw", transform: " translateX(0.6vw) translateY(2.7vw)" }}>{currentPage}</p>



      </div>

      <div id="burger" style={{ width: "10vw", height: "auto", marginRight: "1.5%", marginTop: "1.5%" }}>

        <svg className="icon" onClick={toggleMenuOpen} width="69" height="39" viewBox="0 0 69 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 39L2.09669 33H69V39H0Z" />
          <path d="M4 28L6.09677 22H69V28H4Z" />
          <path d="M8 17L10.1057 11H69V17H8Z" />
          <path d="M12 6L14.0946 0H69V6H12Z" />
        </svg>


      </div>

    </div>
  );
};
