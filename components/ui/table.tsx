export function Table() {
  return (
    <div className="page-ui-showcase" id="panels">
      <h2>Tables</h2>
      <p className="description">
        If the number of columns is undetermined and you do not want to align
        column sizes dynamically. Use a table tag, even if it is less stylish.
        However, in general, using div based tables is better for flexibility
        and customizations.
      </p>

      <div className="page-ui-showcase-container">
        <table>
          <thead>
            <tr>
              <td>Default Table Value 1</td>
              <td>Default Table Value 2</td>
              <td>Default Table Value 3</td>
              <td>Default Table Value 4</td>
            </tr>
          </thead>
          <tbody>
            {new Array(4).fill(0).map((item, index) => (
              <tr key={index}>
                <td>Default Table Value 1</td>
                <td>Default Table Value 2</td>
                <td>Default Table Value 3</td>
                <td>Default Table Value 4</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table">
          <div className="table-row table-row-header">
            <div className="table-column">Default Div Table Value 1</div>
            <div className="table-column">Default Div Table Value 2</div>
            <div className="table-column">Default Div Table Value 3</div>
            <div className="table-column">Default Div Table Value 4</div>
          </div>
          {new Array(4).fill(0).map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-column">Default Div Table Value 1</div>
              <div className="table-column">Default Div Table Value 2</div>
              <div className="table-column">Default Div Table Value 3</div>
              <div className="table-column">Default Div Table Value 4</div>
            </div>
          ))}
        </div>

        <div className="table table-stylish">
          <div className="table-row table-row-header">
            <div className="table-column">Stylish Div Table Value 1</div>
            <div className="table-column">Stylish Div Table Value 2</div>
            <div className="table-column">Stylish Div Table Value 3</div>
            <div className="table-column">Stylish Div Table Value 4</div>
          </div>
          {new Array(4).fill(0).map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-column">Stylish Div Table Value 1</div>
              <div className="table-column">Stylish Div Table Value 2</div>
              <div className="table-column">Stylish Div Table Value 3</div>
              <div className="table-column">Stylish Div Table Value 4</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Table
