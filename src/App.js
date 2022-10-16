import "./App.scss";

import Dictionary from "./components/dictionary/Dictionary";
import Header from "./components/header/Header";
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
    <div class="app d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <Dictionary words={words} />
        <footer class="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" class="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" class="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
