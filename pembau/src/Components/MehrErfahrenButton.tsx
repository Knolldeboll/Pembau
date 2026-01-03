const MehrErfahrenButton = () => {


    // So wies jetzt ist sind die echten maße des svg durch das div vorgegeben!
    // das svg gibt nur die linien innerhalb an.

    return (

        <div style={{
            position: "absolute",
            display: "inline-block",
            width: "10%",
            height: "auto",
            top: "5%"

        }}>

            <svg style={{ position: "absolute", top: "0%", left: "0%" }} viewBox="0 0 252 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M251.54 72.6994L229.576 0L0 0L0 72.6994L251.54 72.6994Z" fill="#1A1A1A" />
                Mehr erfahren
            </svg>
            <div color="#ffffff">Mehr erfahren</div>
        </div>

    )

}
export default MehrErfahrenButton;