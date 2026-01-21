const Foot = () => {



    return (

        <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "10vw", backgroundColor: "black", fill: "white" }}>
            <div id="sprechblase" style={{ width: "12%", height: "auto", marginLeft: "1.5%", marginTop: "1.5%" }}>
                <svg viewBox="0 0 186 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M143.728 4.53274L179.845 132.504H4.50272V4.50391L143.728 4.53274Z" stroke="white" stroke-width="9.00542" stroke-miterlimit="10" />
                </svg>
            </div>

            <div id="text" style={{ minWidth: "0", width: "22%", height: "auto", color: "#ffffff", marginLeft: "1%", transform: "translateY(5vw)" }}>
                <p className="foot-text" >PLATTFORM FÜR KUNST, KULTUR UND GESELLSCHAFT.</p>
            </div>

            <div id="socialmedia" style={{ width: "10%", height: "auto", backgroundColor: "#978282ff", marginLeft: "5%" }}></div>

            <div id="links" style={{ width: "45%", height: "auto", backgroundColor: "#978282ff", marginLeft: "20%" }}>grid rein</div>

        </div>

    );


}

export default Foot;