import React, { Component } from 'react'
import Button from '../components/common/button'
import Rooms from '../components/rooms'

class Index extends Component {
  state = {
    rooms: [
      {
        id: 1,
        children: [
          { value: '0', displayValue: '0' },
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        adults: [
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        selectedChildren: 0,
        selectedAdults: 0,
        isSelected: false
      },
      {
        id: 2,
        children: [
          { value: '0', displayValue: '0' },
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        adults: [
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        selectedChildren: 0,
        selectedAdults: 0,
        isSelected: false
      },
      {
        id: 3,
        children: [
          { value: '0', displayValue: '0' },
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        adults: [
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        selectedChildren: 0,
        selectedAdults: 0,
        isSelected: false
      },
      {
        id: 4,
        children: [
          { value: '0', displayValue: '0' },
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        adults: [
          { value: '1', displayValue: '1' },
          { value: '2', displayValue: '2' }
        ],
        selectedChildren: 0,
        selectedAdults: 0,
        isSelected: false
      },
    ]
  }
  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key)

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value)
          this.setState({ [key]: value })
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value })
        }
      }
    }
  }

  componentDidMount () {
    this.hydrateStateWithLocalStorage()
  }

  /**
   * @description On Submitting, save state to local storage.
   */
  handleSubmit = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }
  handleChange = ({ target: select }, room) => {
    const rooms = [...this.state.rooms]
    let index = rooms.indexOf(room)
    rooms[index] = { ...room }
    rooms[index]['selected' + select['name']] = select['value']
    this.setState({ rooms })
  }
  /**
   * @description Handle Checkbox Click and any preceding room checkboxes that need to be enabled.
   * @param room
   */
  handleCheckboxClick = room => {
    //Get a copy of Rooms to manipulate.
    let rooms = [...this.state.rooms]
    let index = rooms.indexOf(room)
    const selected = rooms[index].isSelected

    rooms[index] = { ...room }
    //Upon checked, clear out all checkboxes for a clean slate before main logic.
    for (let room = 1; room < rooms.length; room++) {
      rooms[room].isSelected = false
      rooms[room].selectedChildren = 0
      rooms[room].selectedAdults = 0
    }
    while (index >= 1) {
      //Start from Checkbox clicked and go backwards to enable any preceding rooms checkboxes that need enabling.
      rooms[index].isSelected = !selected
      index--
    }
    this.setState({ rooms })
  }

  render () {
    return (
      <React.Fragment>
        <main role="main">
          <div className="flex-container">
            <Rooms
              rooms={this.state.rooms}
              click={this.handleCheckboxClick}
              change={this.handleChange}
            />
          </div>
        </main>

        <Button label="Submit" onClick={this.handleSubmit}/>
        <style jsx>{`
         .flex-container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: flex-start;
            align-content: flex-start;
        }
        .flex-container:after {
            margin: 5px;
        }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Index
