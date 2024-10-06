'use client'
import { useState } from 'react'

export function Popup() {
  const [popup, setPopup] = useState(false)

  return (
    <div className="page-ui-showcase" id="popups">
      <h2>Popups</h2>
      <button onClick={(e) => setPopup(true)}>Show Popup</button>

      <div
        className="popup"
        style={{
          opacity: popup ? 1 : 0,
          pointerEvents: popup ? 'auto' : 'none'
        }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h3>Demo Popup</h3>
            <button onClick={(e) => setPopup(false)}>Close</button>
          </div>
          <div className="popup-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="popup-footer">
            <button className="button-outline" onClick={(e) => setPopup(false)}>
              Close
            </button>
            <button onClick={(e) => setPopup(false)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
