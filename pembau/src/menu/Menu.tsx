import { Link, useNavigate } from "react-router";

// TODO: Durch React-router-links austauschen wenn Links da. 

const Menu = () => {

    const navigate = useNavigate();
    return (

        <div style={{ display: "flex", flexDirection: "column", gap: "10%", marginTop: "30%", marginLeft: "10%" }}>


            <Link className="h4 hoverable " to={"/About"}>_ABOUT</Link>
            <Link className="h4 hoverable m10t" to={""}>_KONTAKT</Link>
            <Link className="h4 hoverable m10t" to={""}>_FORUM</Link>
            <Link className="h4 hoverable m10t" to={""}>_INFRASTRUKTUR</Link>
            <Link className="h4 hoverable m10t" to={""}>_PROGRAMM</Link>
            <Link className="h4 hoverable m10t" to={""}>_MITWIRKEN</Link>
        </div>
    )

}

export default Menu;