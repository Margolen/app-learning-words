import "./App.scss";

import React, {useEffect, useState} from "react";
import Dictionary from "./components/Dictionary/Dictionary";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Training from "./components/Training/Training";

function App() {
    const [words, setWords] = useState([]);
    const [page, setPage] = useState("dictionary");
    const [loading, setLoading] = useState(true);
    function createOrUpdateWord(newWord) {
        const wordIndex = words.findIndex(word => word.id === newWord.id)
        let newWords;
        if (wordIndex) {
            newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)]
        } else {
            newWords = [newWord, ...words]
        }
        setWords(newWords)
    }

    const fetchData = () => {
        fetch("http://itgirlschool.justmakeit.ru/api/words").then(
            response => response.json()
        ).then(data => {
                setWords(data);
                setLoading(false);
            }
        );
    };
    useEffect(() => {
        console.log("empty deps")
        setLoading(true);
    }, [])
    useEffect(() => {
        console.log("app", loading)
        if (!loading) {
            return undefined
        }
        fetchData();
    }, [loading]);

    let activePage;
    const pages = ["Dictionary", "Training", "Contact", "About"]
    if (page === "dictionary" && words) {
        activePage = <Dictionary words={words} createOrUpdateWord={createOrUpdateWord} />
    } else if (page === "training" && words) {
        activePage = <Training words={words} />
    }

    return (
        <div className="app d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header changePage={setPage} pages={pages} activePage={page}/>
                {activePage}
                <Footer/>
            </div>
        </div>
    );
}

export default App;
