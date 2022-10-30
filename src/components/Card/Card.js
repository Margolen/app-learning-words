import './Card.scss';

function Card(props) {
    const word = props.word;
    return (
        <div className="card">
            <div className="card-english">{word.english}</div>
            {/*<div className="Card-transcription">{word.transcription}</div>*/}
            {/*<div className="Card-russian">{word.russian}</div>*/}
            <button>Check translation</button>
        </div>
    )
}

export default Card;
