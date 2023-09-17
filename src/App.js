import React, { useState } from 'react';
import Segment from './component/Segment'
import './App.css'
import InputEmoji from 'react-input-emoji'

const AddSegmentComponent=({setShowSegment,fileObj,setFileObj,id,setId})=>{
  // console.log("ele",ele);
  const onAdd=()=>{
    let newFileObj=fileObj;
    newFileObj.push({
      name:name,
      icon:icon,
      id:id,
      files:[]
    })
    setId(id+1);
    setFileObj(newFileObj);
    setShowSegment(false);
  }
  const [name,setName]=useState('');
  const [icon,setIcon]=useState('');
  const [color,setColor]=useState('');
  return(
    <div className="modal-overlay">
      <div className="table">
        <div className="table-header ">
          <h2>Add Segment</h2>
          <button className="close-button" onClick={()=>{setShowSegment(false)}} >X</button>
        </div>
        <div className="table-body">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputEmoji
            type="text"
            placeholder="Icon"
            value={icon}
            onChange={(e) => setIcon(e)}
          />
        </div>
        <div className="table-footer">
          <button className="add-button" onClick={onAdd}>Add</button>
          <button className="cancel-button" onClick={()=>{setShowSegment(false)}}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [showSegment,setShowSegment]=useState(false);
  const [fileObj, setFileObj] = useState([
    {
      name: 'Segment 1',
      icon: '🐔',
      id: 1,
      files: [
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😀',
          color: 'red'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '🤩',
          color: 'green'
        }
      ]
    }
  ]);
  const [id, setId] = useState(1);

  return (
    <div className='MainDiv'>
      {showSegment && <AddSegmentComponent setShowSegment={setShowSegment} fileObj={fileObj} setFileObj={setFileObj} id={id} setId={setId}/>}
      <div className='sideBar'>
        <span>Prospector</span>
        <span id='SegmentsHeader'>SEGMENTS</span>
        {fileObj.map((ele) => {
          return <span id='segmentText'>{ele.icon} {ele.name}</span>
        })}
        <button style={{width:100, marginTop:10, marginLeft:20}} onClick={()=>{setShowSegment(true)}}>Add Segment</button>
      </div>

      <div id="App">
        <div id='header'>
        </div>
        {fileObj.map((ele) => {
          return <Segment ele={ele} fileObj={fileObj} setFileObj={setFileObj}/>
        })}
      </div>

    </div>

  );
}

export default App;
