import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=>todo.id!=id)
        }); 
    }
    let MarkAsDoneAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return { ...todo,isDone:true };
            });
        });
    };
    let UpperCaseOne=(id)=>{
        // let newtodos=todos.map((todo)=>{
            
        //     if(todo.id==id){
        //         return {...todo,task:todo.task.toUpperCase()};
        //     }
        //     else{
        //         return todo;
        //     }
        // })
        // setTodos(newtodos);
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo,task:todo.task.toUpperCase()};
                }
                else{
                    return todo;
                }
            })
        })
    }
    let markAsDoneOne=(id)=>{
        let newTodos=todos.map((todo)=>{
            if(todo.id==id){
                return {...todo,isDone:true};
            }
            else{
                return todo;
            }
        })
        console.log(newTodos);
        setTodos(newTodos);
    }
    return (
        <div>
            <input type="text" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br />
            <hr />
            <h4>Todo Tasks</h4>
            <ul>
               
                {
    todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.isDone ? 'completed' : 'not-completed'}`}>
            <span>{todo.task}</span>&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => UpperCaseOne(todo.id)}>UpperCaseOne</button>
            <button onClick={() => markAsDoneOne(todo.id)}>Mark As done </button>
        </li>
    ))
}
            </ul>
            <h4><button onClick={MarkAsDoneAll}>MarkAllDone</button></h4>
        </div>
    )
}/* TodoList.css */