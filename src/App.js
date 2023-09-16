import React, { useState } from 'react';
import Segment from './component/Segment'
import './App.css'

function App() {
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
    },
    {
      name: 'Segment 2',
      icon: '😎',
      id: 1,
      files: [
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😛',
          color: 'purple'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😇',
          color: 'blue'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😬',
          color: 'orange'
        }
      ]
    },
    {
      name: 'Segment 2',
      icon: '😎',
      id: 1,
      files: [
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😛',
          color: 'purple'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😇',
          color: 'blue'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😬',
          color: 'orange'
        }
      ]
    }
    ,
    {
      name: 'Segment 2',
      icon: '😎',
      id: 1,
      files: [
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😛',
          color: 'purple'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😇',
          color: 'blue'
        },
        {
          name: 'Newyork-ITeS-11-50',
          icon: '😬',
          color: 'orange'
        }
      ]
    }
  ]);
  const [id, setId] = useState(0);

  return (
    <div className='MainDiv'>
      <div className='sideBar'>
        <span>Prospector</span>
        <span id='SegmentsHeader'>SEGMENTS</span>
        {fileObj.map((ele) => {
          return <span id='segmentText'>{ele.icon} {ele.name}</span>
        })}
      </div>

      <div id="App">
        <div id='header'>
        </div>
        {fileObj.map((ele) => {
          return <Segment ele={ele} />
        })}
      </div>
    </div>

  );
}

export default App;
