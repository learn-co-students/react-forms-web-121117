import React from 'react'

export default class ControlledInput extends React.Component {
  constructor(){
    super()

    this.state = {
      value: ''
    }
  }
  handleClick = () => {
    if (this.state.value === "dogs"){
      console.log(this.state.value)
    }
  }

  render(){
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onClick={this.handleClick}
      />
    )
  }
}
