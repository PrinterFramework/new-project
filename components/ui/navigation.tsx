export function Navigation() {
  return (
    <div className="page-ui-showcase" id="navigations">
      <h2>Navigations</h2>
      <div className="page-ui-showcase-container">
        <div className="navigation">
          <h3>Navigation Default</h3>

          <button className="navigation-option active">
            Selected Navigation
          </button>
          <button className="navigation-option">Navigation Option</button>
          <button className="navigation-option">Navigation Option</button>
          <button>Default Button</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
