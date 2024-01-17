import React from 'react';
import './style.css';
import { useRef } from 'react'
import React,{useState} from 'react';

export default function App() {
  let name = useRef()
let salary = useRef()
let company = useRef()

let formhandle=(e)=>{
e.preventDefault()

let a = name.current.value
let b = salary.current.value
let c = company.current.value
alert(`Thank you ${a}, your message was received successfully! `);

}
  return (
    <div>
    <form>
<label htmlFor="name">Name</label><br/>
<input type="text" ref={name}/>
<br/><br/>
<label htmlFor="email">Email</label><br/>
<input type="email" ref={salary}/>
<br/><br/>
<label htmlFor="message" >Message</label><br/>
<textarea id="message" ref={company} rows="3" cols="21"></textarea>

<br/><br/>
<button onClick={formhandle}>Submit</button>
</form>
    </div>
  );

}