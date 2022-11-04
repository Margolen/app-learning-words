import Card from "../Card/Card";
import "./Training.scss";
import {useState} from 'react';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function Training({words}) {
    const shuffledWords = shuffle(words)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [disabled, setDisabled] = useState(false)
    function nextCard() {
        if (currentIndex + 2 <= shuffledWords.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div className="training-card">

            <Card word={shuffledWords[currentIndex]}/>
            <button onClick={nextCard} disabled={disabled}>Next</button>
        </div>
    )
}

export default Training;