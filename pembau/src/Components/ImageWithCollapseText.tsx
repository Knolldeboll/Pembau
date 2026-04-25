import { CollapseFrame } from "./CollapseFrame";
import { CollapseText } from "./CollapseText";

interface ImageWithCollapseTextProps {
    imgSrc: string;
    alwaysTextSrc: string;
    expandTextSrc: string;
}


const ImageWithCollapseText = ({ imgSrc, alwaysTextSrc, expandTextSrc }: ImageWithCollapseTextProps) => {



    return (<div className="imagewithcollapsetext"


        style={{
            display: "flex",
            alignItems: "stretch",
            flexWrap: "wrap",
            flexDirection: "row",
            zIndex: "2",
        }}
    >

        {/** bevorzugte breite des texts und bilds werden jeweils über flex base gesteuert */}
        {/**div für bild/content */}
        <div
            style={{
                position: "relative",
                zIndex: "1",
                flex: "1 1 50%"
            }}
        >


            {/** neu: CollapseFrame hat jetzt w/h in %, kann also auch in nem container drinne sein und nicht nur auf vport level */}
            {/**schau mer mal ob das mit den ecken auch in nem container klappt */}



            {/**TODO: Folds aus imgData ziehen.*/}

            {/**TODO: schauen, warum hier die Ecken innerhalb von nem Container div 
             * nicht ganz korrekt gerendert werden.. hat das mit inem transform zu tun hm? */}
            {/**Solange die beiden sachen mit den Folds noch nicht klappen, keine Folds erlauben... */}

            <CollapseFrame width={100} height={100} folds={{ topLeft: { horPercent: 15, vertPercent: 10 } }} rotation={0} bgColor="transparent" >
                <img width="100%" src={imgSrc}></img>
            </CollapseFrame>

        </div>

        {/**Width der children wird über flex basis definiert! ggf. als prop zum individuellen anpassen. */}

        {/**div text */}
        <div style={{ marginTop: "2vw", marginLeft: "2vw", flex: "1 1 550px" }} >

            <CollapseText
                marginTopProp="0vw"
                alwaysSrc={alwaysTextSrc}
                expandSrc={expandTextSrc}
            ></CollapseText>

        </div>

    </div>)

};
export default ImageWithCollapseText;