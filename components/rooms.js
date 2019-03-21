import React, { Component } from 'react'
import Room from '../components/room'

class Rooms extends Component {
  render () {
    const { rooms, click } = this.props
    return (
      <React.Fragment>
        {rooms.map(room => <Room key={room.id}
                                 click={click}
                                 roomNumber={room.id}
                                 children={room.children}
                                 adults={room.adults}
                                 room={room}
                                 isSelected={room.isSelected}/>)}
      </React.Fragment>

    )
  }
}

export default Rooms
