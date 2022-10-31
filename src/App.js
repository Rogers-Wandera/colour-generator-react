import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [lists, setLists] = useState(new Values("#F15025").all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setLists(colors);
    } catch (err) {
      setError(true)
      console.log(err)
    }
    console.log("Hello World")
  }

  return <>
    <section className='container'>
      <form onSubmit={handleSubmit}>
        <h3>Color generator</h3>
        <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          placeholder="#F15025"
          className={`${error ? "error" : null}`}
        />
        <button type='submit' className='btn'>generate</button>
      </form>
    </section>
    <section className='colors'>
      {
        lists.map((list,index) => {
          return <SingleColor key={index} {...list} index={index} hexColor={list.hex} />
        })
      }
    </section>
  </>
}

export default App
