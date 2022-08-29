import React, { useState } from 'react'

const SimpleInput = (props) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  
  const enteredNameIsValid = name.trim().length>4;
  const enteredEmailIsValid = email.includes('@');

  const submitHandler = (event)=>{
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    event.preventDefault();
    console.log(`Hi, ${name} and my email id is ${email}`);
    setName('');
    setEmail('');
  }

  const inputHandler = (event)=>{
    setName(event.target.value);
  }
  const emailinputHandler = (event)=>{
    setEmail(event.target.value)
  }

  const formvalidname = name.length===0 || enteredNameIsValid ? 'form-control' : 'form-control invalid';
  const formvalidemail =email.length===0 || enteredEmailIsValid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className={formvalidname}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputHandler} value={name}/>
      </div>
      {name.length!==0&&!enteredNameIsValid &&  <p className='error-text'>Name must not be less than of 5 characters. </p>}
      <div className={formvalidemail}>
        <label htmlFor='name'>Your Email</label>
        <input type='email' id='email' onChange={emailinputHandler} value={email}/>
      </div>
      {email.length!==0&&!enteredEmailIsValid &&  <p className='error-text'>Invalid email</p>}
      <div className="form-actions">
        <button disabled={!(enteredNameIsValid&&enteredEmailIsValid)}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
