import {useState,useEffect} from "react";
export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    function incCountx(){
        setCountx((prevCount)=>{
            return prevCount+1;
        })
    }
    function incCounty(){
        setCounty((prevCount)=>{
            return prevCount+1;
        })
    }
    useEffect(()=>{
        console.log("First time called");
    },[])
    useEffect(()=>{
        console.log("useEffect called for x");
    },[countx])
    // useEffect(()=>{
    //     console.log("useEffect called for y");
    // },[county])
    // useEffect(()=>{
    //     console.log("useEffect called for y");
    // },[county,countx])
    return(
        <div>
            <h3>Count={countx}</h3>
            <button onClick={incCountx}>IncreaseCount</button>
            <h3>Count={county}</h3>
            <button onClick={incCounty}>IncreaseCount</button>
        </div>
    )
}