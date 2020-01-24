import React from 'react'
import {Badge} from 'reactstrap'
import '../App.css'

function Cards(props){
console.log('help', props)
return (

 <div className='what'> 
<h5><Badge color='secondary'>{props.character.name}</Badge></h5>
<p>Gender: {props.character.gender}</p>
<p>Height: {props.character.height}</p>
<p>Birth Year: {props.character.birth_year}</p>
<div>
    <p>Created:</p>
<p>{props.character.created}</p>
</div>
</div>


)
      }
export default Cards;







