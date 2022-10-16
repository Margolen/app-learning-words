import "./Header.scss";

function Header(props) {
  return (
    <header className="mb-3">
      <div>
        <h3 className="float-md-start mb-0">Learning Words</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link active" aria-current="page" href="#">
            Dictionary
          </a>
          <a className="nav-link" href="#">
            Training
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
