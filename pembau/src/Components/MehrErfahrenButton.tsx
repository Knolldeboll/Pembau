import { useState } from "react";

const MehrErfahrenButton = () => {


    // So wies jetzt ist sind die echten maße des svg durch das div vorgegeben!
    // das svg gibt nur die linien innerhalb an.


    const [isHovered, setIsHovered] = useState(true);

    return (


        // altes css mit absolute:
        /*   position: "absolute", 
        top: "5%"
        */




        <div style={{

            display: "inline-block",
            width: "25%",
            height: "auto",


        }}

            onMouseEnter={() => setIsHovered(true)
            }
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => { console.log("ass") }}>

            <svg viewBox="0 0 252 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M251.54 72.6994L229.576 0L0 0L0 72.6994L251.54 72.6994Z" fill="#1A1A1A" />
                <text className={isHovered ? "icon-hover" : "icon"} x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="19"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="700">MEHR_ERFAHREN</text>
            </svg>
        </div>

    )

}
export default MehrErfahrenButton;