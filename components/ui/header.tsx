export function Header() {
  return (
    <div className="page-ui-showcase" id="headers">
      <h2>Headers</h2>
      <div className="page-ui-showcase-container">
        <header>
          <h3>Default Header</h3>
          <div className="header-menu">
            <button>Option 1</button>
            <button>Option 2</button>
            <a className="button" href="#headers">
              Option 3 - Link
            </a>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
