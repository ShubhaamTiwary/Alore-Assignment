import React, { useState } from 'react'
import TableCard from './TableCard'
import Black from '../utils/black-dropdown.svg';
import Blue from '../utils/blue-dropdown.svg';

const Segment = ({ele}) => {
  const [show,setShow]=useState(false);
  return (
    <div>
      <span id='segHeader' >🐔 {ele.name}</span>
      <span><img src={show ? Blue:Black} id='icon' onClick={()=>{setShow(!show)}} /></span>
      {show &&
      <div id='TableIterator'>
        {ele.files.map((ele)=>{
          return <TableCard ele={ele}/>
        })}
      </div>}
    </div>
    
  )
}

export default Segment