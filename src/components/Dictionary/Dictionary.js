import DictionaryLine from "../DictionaryLine/DictionaryLine";

function Dictionary({words, createOrUpdateWord}) {

    return (
        <table className="table table-dark table-striped table-bordered align-middle text-start">
            <thead>
            <tr>
                <th scope="col">English</th>
                <th scope="col">Transcription</th>
                <th scope="col">Russian</th>
                <th scope="col">Tags</th>
                <th scope="col">Controls</th>
            </tr>
            </thead>
            <tbody>{
                words.map((word) => {
                    return (<DictionaryLine word={word} key={word.id} createOrUpdateWord={createOrUpdateWord}/>)
                })}
            </tbody>
        </table>
    );
}

export default Dictionary;
