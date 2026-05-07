

interface FootLinkParams {

    text: string;
    onClick: (() => void);

}

const FootLink = ({ text, onClick }: FootLinkParams) => {


    return (

        <p className="dmsans400footlinkresponsive paragraph-white-line"
            onClick={onClick}>{text}</p>
    )


}

export default FootLink;