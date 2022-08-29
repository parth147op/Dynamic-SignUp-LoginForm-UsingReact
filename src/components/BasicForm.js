import React, { useState } from 'react'

export const BasicForm = (props) => {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const nameisValid = fname.trim().length>4;
  const lnameisValid = lname.trim().length>4;
  const emailisValid = email.includes('@');
  const submitHandler = (event)=>{
    event.preventDefault();
    if(!fname || !lname || !email){
      return;
    }
    console.log(`Hi, My name is ${fname} ${lname} and my email id is ${email}`);
  }
  const formcontrolname = nameisValid||fname.trim().length===0?'form-control':'form-control invalid';
  const formcontrollname = lnameisValid||lname.trim().length===0?'form-control':'form-control invalid';
  const formcontrolemail = emailisValid||email.trim().length===0?'form-control':'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className={formcontrolname}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={(e)=>(setFname(e.target.value))}/>
        </div>
        <div className={formcontrollname}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={(e)=>(setLname(e.target.value))}/>
        </div>
      </div>
      <div className={formcontrolemail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={(e)=>(setEmail(e.target.value))}/>
      </div>
      <div className='form-actions'>
        <button disabled={!(nameisValid&&lnameisValid&&emailisValid)}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
