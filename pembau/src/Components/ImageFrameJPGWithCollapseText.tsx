import { CollapseText } from "./CollapseText";
import ImageFrameJPG from "./ImageFrameJPG";

interface ImageFrameJPGWithCollapseTextProps {

    alwaysTextSrc: string;
    expandTextSrc?: string; // optional, da es auch Collapsetexte ohne expand geben kann
    uncollapsedImg: string;
    collapsedImg: string;
}


export const ImageFrameJPGWithCollapseText = ({ alwaysTextSrc, expandTextSrc, uncollapsedImg, collapsedImg }: ImageFrameJPGWithCollapseTextProps) => {

    {/**Container City - based */ }

    return (
        <div
            className="imagejpgcollapsetext"
            style={{
                display: "flex",
                alignItems: "stretch",
                flexWrap: "wrap",
                flexDirection: "row",
                marginTop: "5vw",
                zIndex: "2",
            }}
        >

            <div
                className="imagejpgcollapsetextimagewrapper"
                style={{
                    position: "relative",
                    transform: "translateX(-3vw)",
                    zIndex: "1",
                    flex: "1 1 60vw"
                }}>
                <ImageFrameJPG
                    collapsedImg={collapsedImg}
                    uncollapsedImg={uncollapsedImg}
                ></ImageFrameJPG>
            </div>

            <div className="imagejpgcollapsetexttextwrapper" style={{ marginTop: "2vw", flex: "1 1 550px" }} >
                <CollapseText
                    marginTopProp="0vw"
                    alwaysSrc={alwaysTextSrc}
                    expandSrc={expandTextSrc}
                ></CollapseText>
            </div>

        </div>)

}