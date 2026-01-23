import { useState } from "react";

interface FootLinkParams {

    text: string;
    onClick: (() => void);

}

const FootLink = ({ text, onClick }: FootLinkParams) => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <p className={isHovered ? "paragraph-white-line-hover" : "paragraph-white-line "}
            onMouseEnter={() => setIsHovered(true)
            }
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}>{text}</p>
    )


}

export default FootLink;