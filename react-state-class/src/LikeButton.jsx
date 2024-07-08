import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [count,setCount]=useState(0);
    
    let toggleLike=()=>{
        let newval=!isLiked;
        setIsLiked(newval);
        setCount(count+1);
        console.log("Toggled");

    }
    let likeStyle={color:"red"};
    return (
        <div>    
            <p >Click count={count}</p>        
        <p onClick={toggleLike}>
            {isLiked?<i className="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-regular fa-heart"></i>} 
            <br />
           
        </p>
        </div>
    )
}