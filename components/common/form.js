import React, { Component } from 'react'
import Select from './select'

class Form extends Component {
  handleBtnClick = e => {
    e.preventDefault()
    //this.doSubmit()
  }
  handleChange = ({ currentTarget: select }) => {
    console.log(select)
  }

  renderSelect (data) {
    //console.log(data)
    return (
      <Select
        value={data['value']}
        onChange={this.handleChange}
        options={data}
      >
      </Select>
    )
  }
}

export default Form
