import React from "react";

export default function TodoItems(props) {        
    const { todo, removeTodo, completeTodo } = props 

    return (
        <div className={todo.completed ? "todo-row completed" : "todo-row"}>
            {todo.text}
            <div className="inconsContainer">
                <button className="icon text-black" title="Effacer la todo" style={{ marginRight: 5}} onClick={() => removeTodo(todo.id)} >Remove</button>
                <button className="icon text-black" title="Checker la todo" onClick={() => completeTodo(todo.id)} >Checked</button>
            </div>
        </div>
    );
}