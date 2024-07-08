import React from 'react';
import { useState,useEffect} from 'react';

function Counter() {
    let [count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(0);
    function handle2(){
        setCount2(count2+1);
    }
    function handle1(){
        setCount1(count1+1);
    }
    useEffect(()=>{
        console.log("Counter Rendered");
    },[count1])
  return (
    <>Counter1
    <h1>Count={count1}</h1>
    <button onClick={handle1}>Increment </button>
    <h1>Counter 2 count={count2}</h1>
    <button onClick={handle2}>Increment </button>
    </>
  )
}

export default Counter