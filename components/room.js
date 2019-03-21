import React from 'react'
import Form from './common/form'

class Room extends Form {
  render () {
    const { adults, children, selectedAdults, selectedChildren, isSelected, roomNumber, click, room, onChange } = this.props
    return (
      <div className="room-form-container">
        <p className="room-form-title"><label>{roomNumber !== 1 ?
          <input type="checkbox" onChange={() => click(room)} checked={isSelected}/> : null} Room</label> {roomNumber}
        </p>
        <form className="room-form"
              style={roomNumber === 1 || isSelected === true ? { backgroundColor: '#fff' } : null}>
          <fieldset disabled={roomNumber !== 1 && !isSelected}>
            <span>Adults</span>
            <span>Children</span>
            <div>
              <span>(18+)</span>
              <span>(0-17)</span>
            </div>

            <div>
              {this.renderSelect(adults, 'Adults', selectedAdults, onChange, room)}
              {this.renderSelect(children, 'Children', selectedChildren, onChange, room)}
            </div>
          </fieldset>
        </form>

        <style jsx>{`
          .room-form-title {
              position: relative;
              font-size: 18px;
              font-weight: bold;
              left: 23px;
          }
          fieldset {
            border: none;
          }
          span {
             display: inline-block;
             width: 96px;
          }

          .room-form-container {
             background: #eee;
             margin: 20px 18px;
             padding: 0px 13px;
             border: 1px solid #eee;
             border-radius: 10px;
             box-shadow: 2px 3px 10px 2px #ccc;
          }
          .room-form {
                margin: 1px 1px 7px;
                padding: 35px 30px;
                border-radius: 0 0px 5px 5px;
          }

        `}</style>
      </div>

    )
  }
}

export default Room
