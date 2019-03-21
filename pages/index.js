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
        isSelected: false
      },
    ]
  }
  handleCheckboxClick = room => {
    //console.log('Checked', room)
    let rooms = [...this.state.rooms]
    let index = rooms.indexOf(room)
    const selected = rooms[index].isSelected

    rooms[index] = { ...room }
    for(room of rooms){
      room.isSelected = false;
    }
    while (index >= 1) {

      rooms[index].isSelected = !selected
      //console.log('Checked', rooms[index])
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
            />
          </div>
        </main>

        <Button label="Submit"/>
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
