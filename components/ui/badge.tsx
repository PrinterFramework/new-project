export function Badge() {
  return (
    <div className="page-ui-showcase" id="badges">
      <h2>Badges</h2>
      <div className="page-ui-showcase-container">
        <div className="page-ui-showcase-row">
          <span className="badge">Badge</span>
          <span className="badge badge-outline">Badge Outline</span>
          <span className="badge badge-secondary">Badge Secondary Outline</span>
          <span className="badge badge-outline badge-secondary">
            Badge Secondary
          </span>
          <span className="badge badge-green">Badge Green</span>
          <span className="badge badge-yellow">Badge Yellow</span>
          <span className="badge badge-red">Badge Red</span>
        </div>
      </div>
    </div>
  )
}

export default Badge
