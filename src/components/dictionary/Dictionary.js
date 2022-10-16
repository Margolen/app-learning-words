function Dictionary(props) {
  const words = props.words.map((word) => (
    <tr>
      <td>{word.english}</td>
      <td>{word.transcription}</td>
      <td>{word.russian}</td>
      <td>{word.tags}</td>
    </tr>
  ));

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">English</th>
          <th scope="col">Transcription</th>
          <th scope="col">Russian</th>
          <th scope="col">Tags</th>
        </tr>
      </thead>
      <tbody>{words}</tbody>
    </table>
  );
}

export default Dictionary;
