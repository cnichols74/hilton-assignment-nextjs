import React, { Component } from 'react'
import Room from '../components/room'

class Rooms extends Component {
  render () {
    const { rooms, click, change } = this.props
    return (
      <React.Fragment>
        {rooms.map(room => <Room key={room.id}
                                 click={click}
                                 onChange={change}
                                 roomNumber={room.id}
                                 children={room.children}
                                 adults={room.adults}
                                 selectedAdults={room.selectedAdults}
                                 selectedChildren={room.selectedChildren}
                                 room={room}
                                 isSelected={room.isSelected}/>)}
      </React.Fragment>

    )
  }
}

export default Rooms
