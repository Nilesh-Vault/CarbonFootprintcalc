import './App.css';
import JSONDATA from './data 2.json'
import {useState} from 'react'

function App() {
  const[searchTerm, setSearchTerm] = useState('')
  return(

    <div className="App">
    <input type="text" placeholder= "Search..." onChange={event =>{setSearchTerm(event.target.value)}}/>
    <div>
    {JSONDATA.filter((val)=>{
      if (searchTerm == ""){
        return val
      } else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }

    }).map((val, key)=>{
      return (<div className='box'>
        <p>Item: {val.item}</p> <p>Servings required: {val.n}</p>
        <p>Mean Carbon footprint: {val.mean}</p>
        </div>);

    
    })}

    </div>
   
    </div>
  ) 
  
    
}
export default App;
