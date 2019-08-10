import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // executa apenas uma vez (rendereização) //componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // executa sempre que tem alteração na variavel tech //componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // renderiza somente quando muda o valor ad variavel
  const techCount = useMemo(() => tech.length, [tech]);

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
      <strong>Você tem {techCount} tecnologias</strong>
    </>
  );
}

export default App;
