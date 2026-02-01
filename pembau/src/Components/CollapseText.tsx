import React from "react";
import { ReactNode } from "react";

interface CollapseTextProps {

    children: ReactNode
}

export const CollapseText = ({ children }: CollapseTextProps) => {


    React.Children.forEach(children, (child) => {

        // if (child?.type?)
    })

    return (<div className="collapsetextwrapper" >
        {children}
    </div>);

}


export const Always = ({ children }: any) => {

    return <>{children}</>;
}

// junge was das
Always.displayName = "Always";

export const Expand = ({ children }: any) => {
    return <>{children}</>;
}

Expand.displayName = "Expand";



