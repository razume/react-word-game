import React from 'react';

const Words = props => {
  const adjectives = props.words.filter(word => word.type === 'adjective');
  const nouns = props.words.filter(word => word.type === 'noun');
  console.log('nouns: ', nouns);

  return (
    <div id="words-container">
      <div className="word-div">
        <h3>nouns</h3>
        <div className="word-content">
          {nouns.map(noun => {
            return <div className="word-tile">{noun.text}</div>;
          })}
        </div>
      </div>
      <div className="word-div">
        <h3>adjectives</h3>
        <div className="word-content">
          {adjectives.map(adj => {
            return <div className="word-tile">{adj.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Words;
