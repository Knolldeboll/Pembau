import FootLink from "./FootLink";

const Foot = () => {



    return (

        <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "10vw", backgroundColor: "black", fill: "white" }}>
            <div id="sprechblase" style={{ width: "10%", height: "auto", marginLeft: "2%", marginBlock: "auto" }}>
                <svg viewBox="0 0 186 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M143.728 4.53274L179.845 132.504H4.50272V4.50391L143.728 4.53274Z" stroke="white" strokeWidth="9.00542" strokeMiterlimit="10" />
                </svg>
            </div>

            <div id="text" style={{ minWidth: "0", width: "30%", height: "auto", color: "#ffffff", marginLeft: "1%", transform: "translateY(3.5vw)" }}>
                <p className="foot-text" >PLATTFORM FÜR KUNST, KULTUR UND GESELLSCHAFT.</p>
            </div>

            <div id="socialmedia" style={{ display: "flex", flexDirection: "row", scale: "0.7", gap: "2.5vw", width: "20%", height: "auto", marginLeft: "1%" }}>


                <svg className="icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.47574 0.518077C10.376 -0.192367 26.5208 -0.111314 30.6928 0.394103C34.5693 0.866143 37.1679 3.99877 37.597 7.79416C38.1739 12.9342 38.0834 24.5063 37.6161 29.7464C37.2203 34.195 34.7552 37.0845 30.2065 37.5947C25.0665 38.1716 13.4944 38.081 8.25424 37.6137C3.80562 37.218 0.91616 34.7529 0.405975 30.2041C-0.104209 25.6554 -0.1805 11.9758 0.448886 7.3555C0.873246 4.22764 3.3002 1.09024 6.48051 0.513305L6.47574 0.518077ZM7.42459 3.37893C4.74016 3.92249 3.54338 6.2207 3.26206 8.75255C2.75664 13.3013 2.75187 24.7066 3.26206 29.2601C3.69119 33.1079 5.48398 34.4334 9.20308 34.7624C14.0332 35.1916 24.5134 35.2726 29.2481 34.7434C31.6417 34.4764 33.2438 33.785 34.1401 31.5011C35.2559 28.6641 35.0318 9.69663 34.1401 6.47818C33.6109 4.56618 31.6274 3.48859 29.7297 3.25972C26.0869 2.82106 10.7003 2.71616 7.41983 3.37893H7.42459Z" />
                    <path d="M16.9656 9.58242C30.4545 7.2842 32.5238 26.4662 21.0328 28.4259C7.54386 30.7241 5.47451 11.5421 16.9656 9.58242ZM17.4424 12.4337C9.88022 13.9691 11.201 26.4471 19.6548 25.6556C28.7141 24.8069 26.7354 10.5456 17.4424 12.4337Z" />
                    <path d="M29.0528 8.94282C27.8751 7.78895 29.6154 5.74344 31.0077 6.8544C32.4811 8.03212 30.488 10.3494 29.0528 8.94282Z" />
                </svg>



                <svg className="icon" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.3331 2.22263C45.4742 5.36369 45.2199 23.5003 43.4349 27.5895C42.1371 30.561 38.2545 30.9901 35.3889 31.1966C29.7106 31.6045 8.85675 31.9329 4.38617 30.3756C3.44862 30.0472 2.38394 29.5599 1.79599 28.7283C-0.645881 25.2959 -0.338661 8.45707 1.17625 4.39435C2.20914 1.61878 3.86178 0.776576 6.76447 0.448168C13.9153 -0.351663 22.8829 0.0879841 30.0496 0.46936C33.4661 0.649455 39.7376 -0.383446 42.3384 2.21733L42.3331 2.22263ZM16.5584 7.86912V22.7004L30.3357 15.5443L24.864 12.0166L16.5637 7.86912H16.5584Z" />
                </svg>

                <svg className="icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4218 12.3134H19.8696L20.1434 15.0031L24.1269 12.5443C27.1978 12.0718 31.4283 11.8947 33.855 14.1656C34.4831 14.7562 35.9756 17.317 35.9756 17.9505V35.9356H28.9963V21.1717C28.9963 21.0268 27.7937 18.8578 27.5629 18.7129C25.3939 17.3224 20.4065 18.6216 20.4065 21.1717V35.9356H13.4272V12.3134H13.4218Z" />
                    <path d="M8.58987 12.3135H0V35.9356H8.58987V12.3135Z" />
                    <path d="M1.22419 1.18915C4.85341 -2.44007 10.9039 3.0306 7.29077 6.98731C3.49513 11.1373 -2.56072 4.97943 1.22419 1.18915Z" />
                </svg>


            </div>

            <div style={{ width: "45%", height: "100%" }}>

                <div id="links" style={{ display: "grid", width: "fit-content", gridTemplateColumns: "8vw 8vw ", gridTemplateRows: "1vw 1vw 1vw", gap: "1.5vw", marginLeft: "10%", marginTop: "1%" }}>




                    <FootLink text="IMPRESSUM" onClick={() => console.log("implement")}></FootLink>
                    <FootLink text="KONTAKT" onClick={() => console.log("implement")}></FootLink>
                    <FootLink text="NEWSLETTER" onClick={() => console.log("implement")}></FootLink>
                    <FootLink text="URHEBERRECHT" onClick={() => console.log("implement")}></FootLink>
                    <FootLink text="HAFTUNG" onClick={() => console.log("implement")}></FootLink>
                    <FootLink text="AGBS" onClick={() => console.log("implement")}></FootLink>




                </div>


            </div>

        </div>

    );


}

export default Foot;