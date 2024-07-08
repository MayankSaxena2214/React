function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}
export default function  Form(){
    return (
        <form action="">
            <input type="text"/>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}