import { useState, useEffect } from "react";
import FootLink from "./FootLink";
//import { useNavigate } from "react-router";

const Foot = () => {
  //const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  /*
    useEffect(() => {
        if (isPopupOpen) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
        }
    }, [isPopupOpen]);
*/
  // footmenu: div als container für foot und popups!
  // footflex: div als container für die drei spalten (logo, social media, links), fixe größe.

  // tODO: Footpopup muss auch fixed sein!
  return (
    <div className="footcontainer">
      {isPopupOpen && (
        <div className="footpopup">
          <div
            style={{
              display: "grid",
              width: "fit-content",
              height: "100%",
              margin: "auto",
              gridTemplateColumns: "16vw 16vw ",
              gridTemplateRows: "2vw 2vw 2vw",
              rowGap: "max(0.9rem,1.5vw)",
              columnGap: "max(3.5rem,1.5vw)",
            }}
          >
            <FootLink
              text="IMPRESSUM"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="KONTAKT"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="NEWSLETTER"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="URHEBERRECHT"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="HAFTUNG"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="AGBS"
              onClick={() => console.log("implement")}
            ></FootLink>
          </div>
        </div>
      )}

      <div className="footmenu">
        <div className="footlogodiv">
          <svg
            style={{ flex: "none", width: "auto", height: "100%" }}
            viewBox="0 0 186 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.728 4.53274L179.845 132.504H4.50272V4.50391L143.728 4.53274Z"
              stroke="white"
              strokeWidth="9.00542"
              strokeMiterlimit="10"
            />
          </svg>
          <p className="foot-logo-text">
            PLATTFORM FÜR KUNST, <br></br> KULTUR UND <br></br> GESELLSCHAFT.
          </p>
        </div>

        {/**
                <div id="sprechblase" style={{ width: "10%", height: "auto", marginLeft: "2%", marginBlock: "auto" }}>
                  
                </div>

                <div id="text" style={{ minWidth: "0", width: "30%", height: "auto", color: "#ffffff", marginLeft: "1%", transform: "translateY(3.5vw)" }}>
                  
                </div>
 */}
        <div className="socialmedia">
          <svg
            className="icon socialmediaicon"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.47574 0.518077C10.376 -0.192367 26.5208 -0.111314 30.6928 0.394103C34.5693 0.866143 37.1679 3.99877 37.597 7.79416C38.1739 12.9342 38.0834 24.5063 37.6161 29.7464C37.2203 34.195 34.7552 37.0845 30.2065 37.5947C25.0665 38.1716 13.4944 38.081 8.25424 37.6137C3.80562 37.218 0.91616 34.7529 0.405975 30.2041C-0.104209 25.6554 -0.1805 11.9758 0.448886 7.3555C0.873246 4.22764 3.3002 1.09024 6.48051 0.513305L6.47574 0.518077ZM7.42459 3.37893C4.74016 3.92249 3.54338 6.2207 3.26206 8.75255C2.75664 13.3013 2.75187 24.7066 3.26206 29.2601C3.69119 33.1079 5.48398 34.4334 9.20308 34.7624C14.0332 35.1916 24.5134 35.2726 29.2481 34.7434C31.6417 34.4764 33.2438 33.785 34.1401 31.5011C35.2559 28.6641 35.0318 9.69663 34.1401 6.47818C33.6109 4.56618 31.6274 3.48859 29.7297 3.25972C26.0869 2.82106 10.7003 2.71616 7.41983 3.37893H7.42459Z" />
            <path d="M16.9656 9.58242C30.4545 7.2842 32.5238 26.4662 21.0328 28.4259C7.54386 30.7241 5.47451 11.5421 16.9656 9.58242ZM17.4424 12.4337C9.88022 13.9691 11.201 26.4471 19.6548 25.6556C28.7141 24.8069 26.7354 10.5456 17.4424 12.4337Z" />
            <path d="M29.0528 8.94282C27.8751 7.78895 29.6154 5.74344 31.0077 6.8544C32.4811 8.03212 30.488 10.3494 29.0528 8.94282Z" />
          </svg>

          <svg
            className="icon socialmediaicon"
            viewBox="0 0 45 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.3331 2.22263C45.4742 5.36369 45.2199 23.5003 43.4349 27.5895C42.1371 30.561 38.2545 30.9901 35.3889 31.1966C29.7106 31.6045 8.85675 31.9329 4.38617 30.3756C3.44862 30.0472 2.38394 29.5599 1.79599 28.7283C-0.645881 25.2959 -0.338661 8.45707 1.17625 4.39435C2.20914 1.61878 3.86178 0.776576 6.76447 0.448168C13.9153 -0.351663 22.8829 0.0879841 30.0496 0.46936C33.4661 0.649455 39.7376 -0.383446 42.3384 2.21733L42.3331 2.22263ZM16.5584 7.86912V22.7004L30.3357 15.5443L24.864 12.0166L16.5637 7.86912H16.5584Z" />
          </svg>

          <svg
            className="icon socialmediaicon"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.4218 12.3134H19.8696L20.1434 15.0031L24.1269 12.5443C27.1978 12.0718 31.4283 11.8947 33.855 14.1656C34.4831 14.7562 35.9756 17.317 35.9756 17.9505V35.9356H28.9963V21.1717C28.9963 21.0268 27.7937 18.8578 27.5629 18.7129C25.3939 17.3224 20.4065 18.6216 20.4065 21.1717V35.9356H13.4272V12.3134H13.4218Z" />
            <path d="M8.58987 12.3135H0V35.9356H8.58987V12.3135Z" />
            <path d="M1.22419 1.18915C4.85341 -2.44007 10.9039 3.0306 7.29077 6.98731C3.49513 11.1373 -2.56072 4.97943 1.22419 1.18915Z" />
          </svg>
        </div>

        <div id="links" style={{ width: "27%", height: "100%" }}>
          <div
            style={{
              display: "grid",
              width: "fit-content",
              gridTemplateColumns: "8vw 8vw ",
              gridTemplateRows: "1vw 1vw 1vw",
              gap: "1.5vw",
              marginLeft: "10%",
              marginTop: "1%",
            }}
          >
            <FootLink
              text="IMPRESSUM"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="KONTAKT"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="NEWSLETTER"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="URHEBERRECHT"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="HAFTUNG"
              onClick={() => console.log("implement")}
            ></FootLink>
            <FootLink
              text="AGBS"
              onClick={() => console.log("implement")}
            ></FootLink>
          </div>
        </div>

        <svg
          id="info-button"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 0C54.33 0 70 15.67 70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0ZM25.916 23.6445V26.6934H26.4756C27.1807 26.6934 27.8857 26.7765 28.5908 26.9424C29.296 27.1083 29.8977 27.4817 30.3955 28.0625C30.8932 28.6017 31.1426 29.4519 31.1426 30.6133V49.9023C31.1426 51.0637 30.8933 51.9349 30.3955 52.5156C29.9392 53.0964 29.3375 53.4908 28.5908 53.6982C27.8858 53.8641 27.1806 53.9463 26.4756 53.9463H25.667V56.9951H44.6445V53.9463H43.8975C43.1924 53.9463 42.4663 53.8641 41.7197 53.6982C40.9732 53.4908 40.3722 53.0962 39.916 52.5156C39.4597 51.8934 39.2314 50.9803 39.2314 49.7773V23.6445H25.916ZM34.9375 9.33301C33.6103 9.33306 32.4906 9.66551 31.5781 10.3291C30.707 10.9513 30.2715 12.0296 30.2715 13.5645C30.2715 15.0578 30.707 16.1361 31.5781 16.7998C32.4907 17.4634 33.5901 17.7959 34.876 17.7959C36.1617 17.7958 37.2613 17.4634 38.1738 16.7998C39.0861 16.1361 39.542 15.0576 39.542 13.5645C39.542 12.0299 39.0861 10.9514 38.1738 10.3291C37.2612 9.6654 36.1819 9.33301 34.9375 9.33301Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Foot;
