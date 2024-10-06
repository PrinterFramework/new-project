export function Textarea() {
  return (
    <div className="page-ui-showcase" id="textareas">
      <h2>Textareas</h2>
      <div className="page-ui-showcase-row">
        <textarea placeholder="Default Textarea" />
        <textarea className="textarea-outline" placeholder="Outline Textarea" />
        <textarea
          className="textarea-underline"
          placeholder="Underline Textarea"
        />
        <textarea className="textarea-blank" placeholder="Blank Textarea" />
      </div>
    </div>
  )
}

export default Textarea
