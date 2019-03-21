import React, { Component } from 'react'
import Select from './select'

class Form extends Component {
  renderSelect (data, name, selectValue, onChange, room) {
    return (
      <Select
        value={selectValue}
        name={name}
        onChange={()=>onChange(event, room)}
        options={data}
      >
      </Select>
    )
  }
}

export default Form
