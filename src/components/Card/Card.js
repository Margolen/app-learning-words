import "./Card.scss";
import { useEffect, useState } from "react";

function Card(props) {
  const [open, setOpen] = useState(false);
  const word = props.word;
  useEffect(() => {
    setOpen(false);
  }, [word]);
  return (
    <div className="card">
      <div className="card-english">{word.english}</div>
      {open ? (
        <>
          <div className="card-transcription">{word.transcription}</div>
          <div className="card-russian">{word.russian}</div>
          <button onClick={() => setOpen(false)}>Hide</button>
        </>
      ) : (
        <button onClick={() => setOpen(true)}>Check translation</button>
      )}
    </div>
  );
}

export default Card;
