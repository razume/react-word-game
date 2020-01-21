import React from 'react';

const Stats = props => {
  const nouns = props.words.filter(word => word.type === 'noun');
  const nounCount = nouns.length;
  const adjectives = props.words.filter(word => word.type === 'adjective');
  const adjectiveCount = adjectives.length;
  return (
    <div>
      <p>
        You generated {nounCount} nouns and {adjectiveCount} adjectives
      </p>
    </div>
  );
};

export default Stats;
