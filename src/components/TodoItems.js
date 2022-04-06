import React from "react";

export default function TodoItems(props) {        
    const { todo, removeTodo, completeTodo } = props 

    return (
        <div className={todo.completed ? "todo-row completed" : "todo-row"}>
            {todo.text}
            <div className="inconsContainer">
                <button className="icon text-black" style={{ marginRight: 5}} onClick={() => removeTodo(todo.id)} >Remove</button>
                <button className="icon text-black" onClick={() => completeTodo(todo.id)} >Checked</button>
            </div>
        </div>
    );
}