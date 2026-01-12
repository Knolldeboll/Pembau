import TextButton from "./Components/TextButton";

const TextFrameAussicht = () => {


    return (
        <div>
            <h2 className="headline">PEMBAU<span className="span">_eine_gute_Aussicht</span>_FÜR_INNSBRUCK</h2>
            <p className="paragraph">Als Kunst- und Kulturplattform versteht sich der Pembau als ein Ort, der neuen Raum für kreative Entfaltung und gemeinsames Experimentieren bietet.Ziel ist es, mit dem Pembau einen lebendigen Ort der Begegnung zu erschaffen, an dem sich Kultur, Bildung, Gemeinschaft und Individuum im Zusammenspiel von alpin-urbanem Leben und naturnaher Harmonie entfalten können.</p>
            <TextButton text="MEHR_ERFAHREN" onClick={() => { console.log("mehr erfahren Aussicht TODO") }}></TextButton>
        </div>
    )
}
export default TextFrameAussicht;