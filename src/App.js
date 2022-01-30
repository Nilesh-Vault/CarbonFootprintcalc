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
     <img src={"https://i1.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/oxygen-nature-header.jpg?ssl=1"} width="100%" />
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
      return (
      <div className='box'>
        <img src={"https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://listonic.com/wp-content/uploads/2018/12/grocery-bag-1-3.png"} width="50%"/>
        <p>Food item: {val.item}</p> <p>Servings per Kg: {val.n} </p>
        <p>Mean Carbon footprint: {val.mean} kg CO2 eg/Kg</p>
        </div>);

    
    })}

    </div>
   
    </div>
  ) 
  
    
}
export default App;
