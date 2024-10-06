export function Form() {
  return (
    <div className="page-ui-showcase" id="forms">
      <h2>Forms</h2>
      <div className="page-ui-showcase-container">
        <form>
          <h3>Default Form</h3>
          <p className="label">Value</p>
          <input type="text" placeholder="Default Input" />
          <p className="label">Value 2</p>
          <input type="text" placeholder="Default Input" />
          <button>Submit</button>
          <div className="box box-active red">Invalid Input</div>
        </form>
        <form className="panel">
          <h3>Default Form as Panel</h3>
          <p className="label">Value</p>
          <input type="text" placeholder="Default Input" />
          <p className="label">Value 2</p>
          <input type="text" placeholder="Default Input" />
          <button>Submit</button>
          <div className="box box-active green">Valid Input</div>
        </form>
      </div>
    </div>
  )
}

export default Form
