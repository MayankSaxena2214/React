import {useState} from "react";
export default function Form(){
    let [formData,setFormData]=useState({fullname:"",username:""});
    function handleInput(event){
        let fieldName=event.target.name;
        let newvalue=event.target.value;
        
        setFormData((currData)=>{
            formData[fieldName]=newvalue;//more used in the react 
            return {...currData,[fieldName]:newvalue};
            //or we can directly use the below
            // return {...currData,[fieldName]:newvalue};
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        setFormData({fullname:"",username:""});
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Fullname</label>
            <input value={formData.fullname} name="fullname" onChange={handleInput} id="fullname" type="text" placeholder="enter your name" />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input value={formData.username} name="username" onChange={handleInput} id="username" type="text" placeholder="enter username"/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}