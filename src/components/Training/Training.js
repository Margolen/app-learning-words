import Card from "../Card/Card";
import "./Training.scss";

function Training(props) {
    const word = props.words[Math.floor(Math.random() * props.words.length)];
    return (
        <div className="training-card">

            <Card word={word}/>
        </div>
    )
}

export default Training;