import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <ul>
                <li><Link to="/addskill">Add skill</Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="recommendation">recommendation</Link></li>
            </ul>
        </nav>      
    </div>
  )
}

export default navbar
