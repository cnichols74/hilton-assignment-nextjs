import React from 'react';
const Select = ({ value, name, onChange, options}, room) => {
  return (
    <select
      name={name}
      value={value}
      onChange={e => onChange(e.currentTarget.value, room)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
      <style jsx>{`
          select {
            position: relative;
            top: 10px;
            right: 13px;
            margin: 1px 1px 1px 12px;
             /* make arrow and background */

            background:
              linear-gradient(45deg, transparent 50%, #000 50%),
              linear-gradient(135deg, #000 50%, transparent 50%),
              linear-gradient(to right, silver, silver);
            background-position:
              calc(100% - 21px) calc(1em + 2px),
              calc(100% - 16px) calc(1em + 2px),
              100% 0;
            background-size:
              5px 5px,
              5px 5px,
              2.5em 2.5em;
            background-repeat: no-repeat;

            /* styling and reset */

             font: 300 1em/100% "Helvetica Neue", Arial, sans-serif;
            line-height: 1.5em;
            padding: 0.5em 3.5em 0.5em 1em;

            /* reset */

            border-radius: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance:none;
            -moz-appearance:none;
          }
        `}</style>
    </select>

  )
}

export default Select
