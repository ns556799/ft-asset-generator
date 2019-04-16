import React, { Component } from 'react'

export default class ColorPallete extends Component {
  help() {
    alert()
  }
  render() {
    return (
      <div>
        {  Object.keys(this.props.colors).map((key, i) => {
            return <div onClick={this.props.func.bind(this)}> {this.props.colors[key] }</div>
        })}
      </div>
    )
  }
}
