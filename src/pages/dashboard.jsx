import React , {useState} from 'react';
import SkillChart from '../components/SkillChart';

const Dashboard = () => {
    const [skills,setSkills]=useState([{skill:'python',level:80},{skill:'java',level:90}]);
  return (
    <div>
      <h1>Dashboard</h1>
      <SkillChart skills={skills}/>
    </div>
  )
}

export default Dashboard
