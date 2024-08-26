// src/components/UserForm.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);  
    window.history.pushState({}, '', '/quiz');  
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);  
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button type="submit">Start Quiz</button>
    </form>
  );
}
