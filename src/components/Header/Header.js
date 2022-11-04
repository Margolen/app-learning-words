import "./Header.scss";

function Header({changePage, pages, activePage}) {

  return (
    <header className="mb-3">
      <div>
        <h3 className="float-md-start mb-0">Learning Words</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          {pages.map(page => {
            console.log(page, activePage)
            let className = page.toLowerCase() === activePage ? "nav-link active" : "nav-link"
            return (
                <a className={className} aria-current="page" href="#" onClick={() => changePage(page.toLowerCase())}>
                  {page}
                </a>
            )
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
