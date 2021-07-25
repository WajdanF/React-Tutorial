import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('LOL');
  const handleClick = ()=>{
    console.log('ha');
  }
  return (
      <>
          <h2>{text}</h2>
          <button type="button" className="btn" onClick={handleClick}>
              Change Title
          </button>
      </>
  );
};

export default UseStateBasics;
