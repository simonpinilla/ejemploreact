import React, { Fragment } from "react"
import { TodoItem } from "./TodoItem"

export function TodoList(){
    return (
        <>
            <h1>Lista de Tareas</h1>
            <ul class="list-group">
                <TodoItem></TodoItem>
            </ul>
        </>
    )

    
}