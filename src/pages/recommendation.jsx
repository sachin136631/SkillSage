import React from 'react'

const Recommendation = () => {
    const recommendedSkills = [
        { skill: 'Node.js', reason: 'Great for backend development' },
        { skill: 'TypeScript', reason: 'Enhances JavaScript development' },
    ];
  return (
    <div>
        <h1>Recommendations</h1>
        <ul>
            {recommendedSkills.map((rec, index) => (<li key={index}>{`${rec.skill}: ${rec.reason}`}</li>))}
        </ul>
    </div>
  )
}

export default Recommendation;