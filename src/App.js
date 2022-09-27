import logo from './logo.svg';
import './App.css';
import {useState, UseState} from 'react';
import menu from './data';
import DisplayMenu from './view';
import Comp from './component';

const all_types = ['all', ...new Set(menu.map((a) => a.type))]


function App() {
  const [menu_item, setMenuItem] = useState(menu)
  const [types, setTypes] = useState(all_types)

  console.log(menu_item, types)

  const filter_type = (a) => {
    if(a === 'all'){
      setMenuItem(menu)

      return
    }

    const newItem = menu.filter((b) => b.type === a)
    setMenuItem(newItem)
  }

  


  return (
    <div className="App">
      <Comp a = {types} b = {filter_type} />
      <DisplayMenu item = {menu_item}/>
      
    </div>
  );
}

export default App;
