function printHello(event){
    console.log("Hello");
    console.log(event);
}
function printBye(){
    console.log("Bye");
}
export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click Me</button>
            <p onMouseOver={printBye}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic ea recusandae dolores id voluptatum, ipsa exercitationem? Commodi enim corporis at saepe maiores, exercitationem est id consequuntur, incidunt sed fugiat!

            </p>
        </div>
    )
}