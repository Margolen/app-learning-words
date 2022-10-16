import "./App.scss";
import Dictionary from "./components/dictionary/Dictionary";
import React, { useEffect, useState } from "react";

function App() {
  const [words, setWords] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const data = await response.json();
    return setWords(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Dictionary words={words} />
    </div>
  );
}

export default App;
