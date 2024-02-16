import React, { useState } from 'react'
import './App.css'

const LIST_DATA = [
  { id: "1", value: "Javascript" },
  { id: "2", value: "Python" },
  { id: "3", value: "Java" },
  { id: "4", value: "Kotlin" },
  { id: "5", value: "Dart" },
  { id: "6", value: "C#" },
];

const App = () => {

  const [checkedList, setCheckedList] = useState([]);

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <p className="title">
            Select Programming Language
          </p>
        </div>
      </div>      
    </div>
  )
}

export default App
