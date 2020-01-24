import React from 'react'
import './StarWars.css'
import {Badge} from 'reactstrap'

function Card(props){
console.log('help', props)
return (
<div>
<p><Badge color='secondary'>{props.name}</Badge></p>


  
</div>
)
      }
export default Card;



