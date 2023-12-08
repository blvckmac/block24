import {useState} from 'react'
import {puppyList} from './data.js'

function App(){
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId){
    setFeatPupId(puppyId)
console.log ('Clicked puppy id:', puppyId);

}
const featuredPup = puppies.find((pup) => pup.id === featPupId);

console.log('Featured Puppy:', featuredPup);

  return(
     <div style ={{ textAlign: 'center', marginTop: '50px' }}>
      <p> selctect Puppy ID: {featPupId}</p>
      <div className="App"></div>
      {
        puppies.map((puppy) => (
          <p
          key={puppy.id}
          onClick={() => handleClick(puppy.id)}>
            {puppy.name}
            </p>
        ))}
 {/* Display information about the selected puppy */}
 {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            {/* Add more details based on your puppy object properties */}
          </ul>
        </div>
      )}

    </div>
  );
  }

export default App
