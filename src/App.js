import "./App.scss";

import React, {useEffect, useState} from "react";
import Dictionary from "./components/Dictionary/Dictionary";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Training from "./components/Training/Training";

function App() {
    const [words, setWords] = useState([]);
    const [isDictionaryActive, setIsDictionaryActive] = useState(true);

    const fetchData = async () => {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = await response.json();
        return setWords(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleDictionaryClick() {
        setIsDictionaryActive(true);
    }

    function handleTrainingClick() {
        setIsDictionaryActive(false);
    }

    let activePage;
    if (isDictionaryActive) {
        activePage = <Dictionary words={words} />
    } else {
        activePage = <Training words={words} />
    }

    return (
        <div className="app d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header onDictionaryClick={handleDictionaryClick} onTrainingClick={handleTrainingClick} />
                {activePage}
                <Footer/>
            </div>
        </div>
    );
}

export default App;
