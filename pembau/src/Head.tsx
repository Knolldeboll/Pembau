//import React from "react";
//import { BurgerIcon } from "./BurgerIcon";
//import { LogoIcon } from "./LogoIcon";
import "./style.css";
import { LogoHead } from "./LogoHead";
//import { Burger } from "./Burger";
//import { TextHome } from "./TextHome";

export const Head = () => {
  // Vielleicht macht es Sinn, so einfache Formen wie der Banner-Background durch normale HTML-Elemente zu machen statt durch
  // svgs, da die iwie unflexibler sind!

  // Nur So Shit wie Logos etc. als pngs.

  return (
    <div className="head-instance">
      {/* Banner machen wir nicht! dieser Div direkt ist das Banner, bg Black */}

      {/*TEXT 
      <div className="text-home-instance">
        <TextHome></TextHome>
      </div>
      Home*/}
      {/*Logo Head*/}
      <div className="logo-head-instance">
        <LogoHead></LogoHead>
      </div>
    </div>
  );
};
