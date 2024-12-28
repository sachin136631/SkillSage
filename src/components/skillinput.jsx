import React from 'react'
import { useState } from 'react'

const Skillinput = ({onAddSkill}) => {
    const [skill,setSkill]=useState('');
    const [level,setLevel]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(skill&level){
            onAddSkill({skill,level:parseInt(level)});
            setLevel("");
            setSkill("");
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input>
            type="text"
            placeholder="Skill name"
            value={skill}
            onChange={(e)=>{setSkill(e.target.value)}}
        </input>
        <input>
            type="number"
            placeholder="proficiency level (0-100)"
            value={level}
            onChange={(e)=>{setLevel(e.target.value)}}
        </input>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Skillinput
