import React, { useState } from 'react';
import Skillinput from '../components/Skillinput';

const Input = () => {

    const [skills,setSkills]=useState([]);

    const handleAddSkill=(skill)=>{
        setSkills([...skills,skill]);
    }
    <skillinput/>
  return (
    <div>
      <h1>Add skill</h1>
      <Skillinput onAddSkill={handleAddSkill}/>
      <ul>{skills.map((s, index) => (<li key={index}>{`${s.skill}: ${s.level}`}</li>))}</ul>
    </div>
  )
}

export default Input
