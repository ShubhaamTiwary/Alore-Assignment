import React from 'react'

const TableCard = ({ele}) => {
  return (
    <div className='TableCard'>
        <div id='outerCircle' style={{borderColor:`${ele.color}`}}>
            {ele.icon}
        </div>
        <div id='smallCircle' style={{borderColor:`${ele.color}` , backgroundColor:`${ele.color}`}}>
        </div>
        <span id='text'>{ele.name}</span>
    </div>
  )
}

export default TableCard