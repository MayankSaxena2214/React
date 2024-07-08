import {useState} from "react";
export default function CommentForm(){
    let [formData,setFormData]=useState({username:"",rating:3,remarks:""});
    function handleInputChange(event){
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value};
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        setFormData({username:"",rating:0,remarks:""});
    }
    return(
        <div>
            <h1>Comment Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" onChange={handleInputChange} name="username" type="text" value={formData.username} placeholder="username"/>
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea id="remarks" onChange={handleInputChange} name="remarks" cols="30" rows="10" value={formData.remarks}>Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input  id="rating" onChange={handleInputChange} name="rating" type="number" min={1} max={5} placeholder="rating" value={formData.rating} />
                <button>Add Comment</button>

            </form>
        </div>
    )
}