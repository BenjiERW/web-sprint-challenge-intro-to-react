import React from 'react'

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function Character({ name, homeworld, population }) {
    const [showHomeworld, setShowHomeworld] = useState(false);
  
    const toggleHomeworld = () => {
      setShowHomeworld(!showHomeworld);
    };
  
    return (
      <div className="character">
        <div className="character-info">
          <h3>{name}</h3>
          <button onClick={toggleHomeworld}>
            {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
          </button>
        </div>
        {showHomeworld && (
          <div className="homeworld-info">
            <p>Homeworld: {homeworld}</p>
            <p>Population: {population}</p>
          </div>
        )}
      </div>
    );
  }
  


export default Character;
