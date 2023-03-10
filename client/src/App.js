import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  };

  return (
    <div className='app-container'>
      <div className='register-container'>
        <h1 className='register-title'>Game Shop</h1>
        <input type='text'
               name='name'
               placeholder='Name'
               className='register-input'
               onChange={handleChangeValues}>
        </input>
        <input type='text'
               name='cost'
               placeholder='Price'
               className='register-input'
               onChange={handleChangeValues}>
        </input>
        <input type='text'
               name='category'
               placeholder='Category'
               className='register-input'
               onChange={handleChangeValues}>
        </input>
        <button 
          className='register-button' 
          onClick={() => handleClickButton()}
          >
            Register
        </button>
      </div>
    </div>
  );
  };


export default App;


