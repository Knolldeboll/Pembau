const MehrErfahrenButton = () => {


    // So wies jetzt ist sind die echten maße des svg durch das div vorgegeben!
    // das svg gibt nur die linien innerhalb an.

    return (

        <div style={{
            position: "absolute",
            display: "inline-block",
            width: "20%",
            height: "auto",
            top: "5%"

        }}

            onClick={() => { console.log("ass") }}>

            <svg viewBox="0 0 252 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M251.54 72.6994L229.576 0L0 0L0 72.6994L251.54 72.6994Z" fill="#1A1A1A" />
                <text x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="19"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="700">MEHR_ERFAHREN</text>
            </svg>
        </div>

    )

}
export default MehrErfahrenButton;