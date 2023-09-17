import React, { useState } from 'react'
import TableCard from './TableCard'
import Black from '../utils/black-dropdown.svg';
import Blue from '../utils/blue-dropdown.svg';
import InputEmoji from 'react-input-emoji'

const AddTableComponent=({setAddTable,ele,fileObj,setFileObj})=>{
  // console.log("ele",ele);
  const onAdd=()=>{
    let newFileObj=fileObj;
    newFileObj.forEach((item)=>{
      if(item.name==ele.name){
        item.files.push({
          name:name,
          icon:icon,
          color:color
        })
      }
    })
    console.log(newFileObj);
    setFileObj(newFileObj);
    setAddTable(false);
  }
  const [name,setName]=useState('');
  const [icon,setIcon]=useState('');
  const [color,setColor]=useState('');
  return(
    <div className="modal-overlay">
      <div className="table">
        <div className="table-header ">
          <h2>Add Table</h2>
          <button className="close-button" onClick={()=>{setAddTable(false)}} >X</button>
        </div>
        <div className="table-body">
          <span>Name</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <span>Icon</span>
          <InputEmoji
            type="text"
            placeholder="Icon"
            value={icon}
            onChange={(e) => setIcon(e)}
          />

          <span>Color</span>
          <input
            type="color"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="table-footer">
          <button className="add-button" onClick={onAdd}>Add</button>
          <button className="cancel-button" onClick={()=>{setAddTable(false)}}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const Segment = ({ ele,fileObj,setFileObj }) => {
  const [show, setShow] = useState(false);
  const [addTable,setAddTable] = useState(false);
  return (
    <div id='segment'>
      {addTable && <AddTableComponent setAddTable={setAddTable} ele={ele} fileObj={fileObj} setFileObj={setFileObj} />}
      <span id='segHeader' >{ele.icon} {ele.name}</span>
      <span><img src={show ? Blue : Black} id='icon' onClick={() => { setShow(!show) }} /></span>
      {show &&
        <div id='TableIterator'>
          {ele.files.map((ele) => {
            return <TableCard ele={ele} />
          })}
          <div className='TableCard'>
            <div id='label'>Add a new Table</div>
            <div id='outerCircle2' >
              <span onClick={()=>{setAddTable(true)}}>+</span>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Segment