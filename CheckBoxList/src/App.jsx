import React, { useState } from 'react'
import './App.css'

const LIST_DATA = [
  { id: "1", value: "Javascript" },
  { id: "2", value: "React" },
  { id: "3", value: "HTML" },
  { id: "4", value: "CSS" },
  { id: "5", value: "Java" },
  { id: "6", value: "NodeJS" },
];

const App = () => {

  const [checkedList, setCheckedList] = useState([]);

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <p className="title">
            Select Skills
          </p>
        </div>
      </div>      
    </div>
  )
}

export default App
