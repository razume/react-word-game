import React, { useState } from 'react';
import faker from 'faker';
import './App.css';
import Stats from './components/Stats';
import Words from './components/Words';
import Buttons from './components/Buttons';

const generateWord = type => {
  const method =
    type === 'noun' ? faker.company.bsNoun : faker.company.bsAdjective;
  return {
    type,
    text: method()
  };
};

function App() {
  const [words, setWords] = useState([]);

  const handleClick = type => {
    const newWord = generateWord(type);
    setWords([...words, newWord]);
  };

  console.log('generated noun:', generateWord('noun'));

  return (
    <div className="App">
      <Stats words={words} />
      <Buttons handleClick={handleClick} />
      <Words words={words} />
    </div>
  );
}

export default App;
