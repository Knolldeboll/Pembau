import { useEffect, useState } from "react";
import Markdown from "react-markdown";


interface CollapseTextProps {

    marginTopProp?: string;
    rotate?: string;
    textColor?: string;
    /**width: z.b. für direktes placement unter viewport-level, ohne parentdiv mit width */
    width?: string;
    height?: string;
    alwaysSrc: string,
    expandSrc?: string,
}

export const CollapseText = ({ alwaysSrc, expandSrc, marginTopProp, width, textColor, rotate }: CollapseTextProps) => {


    const [alwaysMd, setAlwaysMd] = useState("");
    const [expandMd, setExpandMd] = useState("");

    const [isCollapsed, setCollapsed] = useState(true);

    // md aus Datei fetchen, vor Render
    useEffect(() => {
        fetch(alwaysSrc)
            .then((r) => r.text())
            .then(setAlwaysMd).catch(() => console.log("Failed to load md"));;
    }, [alwaysSrc]);

    if (expandSrc) {
        useEffect(() => {
            fetch(expandSrc)
                .then((r) => r.text())
                .then(setExpandMd).catch(() => console.log("Failed to load md"));
        }, [expandSrc])
    }



    // md im render in reactMd shit packen

    // Width ist jetzt optional. wenn gegeben, nimm das, ansonsten 100%
    const appliedWidth = width ? width : "100%";

    // const appliedHeight = height ? height : "auto";

    //TODO: MarginTop conditional auf umbruch... damn son. 
    // das kommt ja auch vom css, kein state ablesbar. 
    // vielleicht kann 

    return (<div className="collapsetextwrapper" style={{ marginTop: marginTopProp, width: appliedWidth, color: textColor, rotate: rotate }} >

        <Markdown >
            {alwaysMd}
        </Markdown>

        {expandSrc && !isCollapsed &&
            <Markdown>
                {expandMd}
            </Markdown>}

        {expandSrc &&
            <p className="underline" onClick={() => setCollapsed(!isCollapsed)}>
                {isCollapsed ? "Mehr Lesen" : "Weniger Lesen"}
            </p>}

    </div>);

}



/*
export const Always = ({ children }: any) => {

    return <>{children}</>;
}

// junge was das
Always.displayName = "Always";

export const Expand = ({ children }: any) => {
    return <>{children}</>;
}

Expand.displayName = "Expand";


*/
