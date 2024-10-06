import { IconSpinner } from 'components/shared/icon'

export function Button() {
  return (
    <div className="page-ui-showcase" id="buttons">
      <h2>Buttons</h2>
      <div className="page-ui-showcase-row">
        <button>Button Primary</button>
        <button className="button-outline">Primary Outline</button>
        <button className="button-blank">Primary Blank</button>
        <button className="button-disabled">Primary Disabled</button>

        <button className="button-secondary">Button Secondary</button>
        <button className="button-secondary button-outline">
          Secondary Outline
        </button>
        <button className="button-secondary button-blank">
          Secondary Blank
        </button>
        <button className="button-secondary button-disabled">
          Secondary Disabled
        </button>

        <button className="button-red">Button Red</button>
        <button className="button-red button-outline">Red Outline</button>
        <button className="button-red button-blank">Red Blank</button>
        <button className="button-red button-disabled">Red Disabled</button>

        <button className="button-yellow">Button Yellow</button>
        <button className="button-yellow button-outline">Yellow Outline</button>
        <button className="button-yellow button-blank">Yellow Blank</button>
        <button className="button-yellow button-disabled">
          Yellow Disabled
        </button>

        <button className="button-green">Button Green</button>
        <button className="button-green button-outline">Green Outline</button>
        <button className="button-green button-blank">Green Blank</button>
        <button className="button-green button-disabled">Green Disabled</button>

        <button className="button-loading">
          <IconSpinner className="icon icon-spinner" />
          Loading State
        </button>
        <button className="button-loading" style={{ minWidth: 150 }}>
          <IconSpinner className="icon-spinner" />
        </button>
      </div>
    </div>
  )
}

export default Button
