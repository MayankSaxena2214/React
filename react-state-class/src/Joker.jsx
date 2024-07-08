import {useState,useEffect} from "react";
export default function Joker(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke]=useState({});
    const getNewJoke=async()=>{
        const response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }
    useEffect(()=>{
        async function getNewJoke(){
            const response=await fetch(URL);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
        }
        getNewJoke();
    },[])
    return (
        <div>
            <h1>JK</h1>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}