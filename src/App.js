import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ColorManage from './color';
import Value from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Value('#f15025').all(10));

  const handleSubmit = (e)=> {
    e.preventDefault();
    //console.log(e.preventDefault)
    try {
      let colors = new Value(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(e);
    }
  }

  return (
    <div className="App">
     
        <section className='container'>
          <form onSubmit= {handleSubmit}>
            <input
              type = 'text'
              value = {color}
              onChange = {(e)=> setColor(e.target.value)}
              placeholder = '#f15025'
              className= {`${error ? 'error' : null}`} 
            />

            <button
            className='btn'
            type = 'submit'
            >Submit</button>
          </form>
        </section>

        
        <section className='color'>
          {list.map((color, index)=> {
            return(
              <ColorManage 
              key = {index}
              {...color}
              index = {index}
              hexColor = {color.hex}
              />
             
             
            )
          })}
        </section>

<h1>Title</h1>
    </div>
  );
}

export default App;
