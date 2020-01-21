import React from 'react';

const Buttons = props => {
  return (
    <div>
      <span>
        <button onClick={() => props.handleClick('noun')}>Add Noun</button>
        <button onClick={() => props.handleClick('adjective')}>
          Add Adjective
        </button>
      </span>
    </div>
  );
};

export default Buttons;
