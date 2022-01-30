import './App.css';
import JSONDATA from './data 2.json'
import {useState} from 'react'
import { FaSistrix} from 'react-icons/fa';

function App() {
  const[searchTerm, setSearchTerm] = useState('')
  return(

    <div className="App">
    {/* <p className='search'><FaSistrix className='searchIcon'/>
    <input type="text" className='searchBar'placeholder= "Search..." onChange={event =>{setSearchTerm(event.target.value)}}/>
    </p> */}
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search...." onChange={event =>{setSearchTerm(event.target.value)}}/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search">
          <FaSistrix/>
        </i>
     </button>
   </div>
</div>
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
