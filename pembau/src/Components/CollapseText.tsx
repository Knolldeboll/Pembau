import { useEffect, useState } from "react";
import Markdown from "react-markdown";


interface CollapseTextProps {

    marginTopProp?: string;
    rotate?: string;
    textColor?: string;
    width: string;
    alwaysSrc: string,
    expandSrc: string,
}

export const CollapseText = ({ alwaysSrc, expandSrc, marginTopProp, textColor, width, rotate }: CollapseTextProps) => {


    const [alwaysMd, setAlwaysMd] = useState("");
    const [expandMd, setExpandMd] = useState("");

    const [isCollapsed, setCollapsed] = useState(true);

    // md aus Datei fetchen, vor Render
    useEffect(() => {
        fetch(alwaysSrc)
            .then((r) => r.text())
            .then(setAlwaysMd).catch(() => console.log("Failed to load md"));;
    }, [alwaysSrc]);

    useEffect(() => {
        fetch(expandSrc)
            .then((r) => r.text())
            .then(setExpandMd).catch(() => console.log("Failed to load md"));
    }, [expandSrc])


    // md im render in reactMd shit packen

    return (<div className="collapsetextwrapper" style={{ marginTop: marginTopProp, width: width, color: textColor, rotate: rotate }} >

        <Markdown >
            {alwaysMd}
        </Markdown>

        {!isCollapsed &&
            <Markdown>
                {expandMd}
            </Markdown>}

        <p className="underline" onClick={() => setCollapsed(!isCollapsed)}>
            {isCollapsed ? "Mehr Lesen" : "Weniger Lesen"}
        </p>

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
