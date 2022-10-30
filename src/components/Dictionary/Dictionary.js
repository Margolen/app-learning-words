import DictionaryLine from "../DictionaryLine/DictionaryLine";

function Dictionary(props) {
    const words = props.words.map((word) => <DictionaryLine word={word} />);

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
            <tbody>{words}</tbody>
        </table>
    );
}

export default Dictionary;
