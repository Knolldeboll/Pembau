

interface FootLinkParams {

    text: string;
    onClick: (() => void);

}

const FootLink = ({ text, onClick }: FootLinkParams) => {


    return (

        <p className="paragraph-white-line"
            onClick={onClick}>{text}</p>
    )


}

export default FootLink;