import TextButton from "./Components/TextButton";


const TextFrameGestalten = () => {

    return (
        <div >
            <h2 className="headline">PEMBAU<span className="span">_gemeinsam_gestalten</span></h2>
            <p className="paragraph">Leerstand bedeutet Stillstand. Damit sich der ehemalige Bauernhof in einen lebendigen, dynamischen und vielseitigen Begegnungsort verwandeln kann, brauchen wir euch. Denn so wie wir Orte brauchen, um uns zu entfalten, brauchen die Orte auch uns.Deswegen laden wir euch ein, Teil zu werden.Der Pembau versteht sich als flexible Plattformund Zuhause für unterschiedlichste Ideen.</p>

            <div id="gestaltenbuttons" style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
                <TextButton text="TEIL_SEIN" onClick={() => { console.log("teil geseien TODO") }}></TextButton>
                <TextButton text="MEHR_ERFAHREN" onClick={() => { console.log("mehr erfahren gestalten TODO") }}></TextButton>

            </div>

        </div>
    )
}

export default TextFrameGestalten;