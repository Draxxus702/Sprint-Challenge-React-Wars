import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import './components/Cards'


import Cards from './components/Cards'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [star, starState] = useState([])

useEffect(()=>{
  axios.get('https://swapi.co/api/people/')
  .then(response =>{
    starState(response.data.results)
    console.log(response.data.results)
  })
  .catch(error =>{
    console.log('Could not retrieve Data', error)
  })
}, [])

  return (
    
    <div className="App">
      <h1>REACT WARS</h1>
      <div className='characters'>
     {star.map(p =>(
       <Cards
       key={p.name}
       character={p}
       />
     ))}
 </div>
    </div>
  );
}

export default App;
