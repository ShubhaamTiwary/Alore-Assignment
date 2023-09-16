import React, { useState } from 'react';
import Segment from './component/Segment';
import './App.css'

function App() {
  const [fileObj,setFileObj]=useState([
    {
      name:'Segment 1',
      id: 1,
      files:[
       {
         name: '1.1',
         icon: '😀',
         color: 'red'
       },
       {
         name: '1.2',
         icon: '😀😀',
         color: 'green'
       }
      ]
    }
  ]);
  const [id,setId]=useState(0);

  return (
    <div id="App">
      {fileObj.map((ele)=>{
        return <Segment ele={ele}/>
      })}
    </div>
  );
}

export default App;
