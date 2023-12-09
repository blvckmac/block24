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
      <div style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}></div>
      <p> select Puppy ID below: {featPupId}</p>
      <div className="App"></div>
      {
        puppies.map((puppy) => (
          <p
          key={puppy.id}
          onClick={() => handleClick(puppy.id)}
          style={{
            cursor: 'pointer',
            color: featPupId === puppy.id ? 'red' : 'black',
            border: '1px solid black', 
            padding: '5px', 
            margin: '5px', 
            display: 'inline-block', 
          }}
          >
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
            <li>isCute: {featuredPup.isCute ? 'True' : 'False'}</li>
          
          </ul>
        </div>
      )}

    </div>
  );
  }

export default App
