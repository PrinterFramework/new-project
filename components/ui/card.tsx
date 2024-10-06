export function Card() {
  return (
    <div className="page-ui-showcase" id="cards">
      <h2>Cards</h2>
      <div className="card">
        <div className="card-header">
          <h3>Card Header</h3>
          <button>Okay</button>
        </div>
        <div className="card-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="card-footer">
          <button className="button-outline">No</button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default Card
