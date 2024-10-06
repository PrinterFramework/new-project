import Link from 'next/link'

export function Navigation() {
  return (
    <div className="page-ui-showcase" id="navigations">
      <h2>Navigations</h2>
      <div className="page-ui-showcase-container">
        <nav>
          <h3>Navigation Default</h3>

          <button className="active">Selected Navigation</button>
          <Link href="/ui" className="button">
            Navigation Option
          </Link>
          <button>Navigation Option</button>
          <button>Default Button</button>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
