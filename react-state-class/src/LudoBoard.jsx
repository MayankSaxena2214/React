import {useState} from "react";
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0});
    let [arr,setArr]=useState(["no moves"]);
    let updateBlue=()=>{
        
        console.log(`Moves :${moves.blue}`);
        // setMoves(moves.blue); this will give no change in the value
        //because the object refetence is never changed and hence the page will never be renderend again
        //the below method will work
        // setMoves((prevMoves)=>{
        //     return ({...prevMoves,blue:prevMoves.blue+1});
        // });
        
        // setArr([...arr,"blue"]);  without using calback
        setArr((prevArr)=>{
            return [...prevArr,"blue"];
        })
        // console.log(arr);
    }
        let updateYellow=()=>{
        
            console.log(`Moves :${moves.yellow}`);
            // setMoves(moves.blue); this will give no change in the value
            //because the object refetence is never changed and hence the page will never be renderend again
            //the below method will work
            setMoves((prevMoves)=>{
                return ({...prevMoves,yellow:prevMoves.yellow+1});
            })
    }
    return (
        <div>
            <p>Game begins</p>
            {arr}
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}} >+1</button>
                <p>Yellow moves={moves.yellow} </p>
                <button onClick={updateYellow}  style={{backgroundColor:"yellow",color:"black"}}>+1</button>
                <p>Red moves={  moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
            </div>

        </div>
    );
}