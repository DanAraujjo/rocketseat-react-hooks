import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['NodeJs', 'ReactJs']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  return (
    <>
      <h1>React Hooks</h1>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
      <br />
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
