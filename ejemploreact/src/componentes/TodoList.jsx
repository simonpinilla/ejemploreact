import React, { Fragment, useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from 'uuid';

const KEY="Todo-list-todos";

export function TodoList(){
    const [todos,setTodos,]=useState(


        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]
    )


    const taskRef=useRef();

    useEffect(()=>{
        localStorage.setItem(KEY,JSON.stringify(tod0os));
        },[todos]);

    const agregarTarea=()=>{
        const task=taskRef.current.value;
        const id=uuid();
        if(task=='')return;
        setTodos((prevTodos)=>{
            const newTask = {
                id:id,
                task:task,
                complete:false
            }
            return[...prevTodos,newTask]

        });
    
        taskRef.current.value="";
    }    
    const ResumenTareas=()=>{
        const cantidad=cantidadTareas();
        if(cantidad>1){
            return (<div className="alert alert-info mt-3">
            Te quedan {cantidad} tareas pendientes!
            </div>);
        
        }else if(cantidad===1){
            return (<div className="alert alert-info mt-3">
            Te queda {cantidad} tarea pendiente!
            /</div>);
            
        }else{
            return (<div className="alert alert-info mt-3">
            No te quedan tareas pendientes!
            /</div>);         
        }
    }

    const cantidadTareas=()=>{
        return todos.filter((todo)=>!todo.complete).lenght; 
    }

    const cambiarEstadoTarea=(id)=>{

        const newTodos=[...todos];
        const todo=newTodos.find((todo)=>todo.id===id);
        todo.complete=!todo.complete;
        setTodos(newTodos);
    }
    const eliminarTareasCompletadas=()=>{
        const newTodos=todos.filter((todo)=>!todo.complete);
    }
    
}


    return (
        <>
            
            <h1>Lista de Tareas</h1>
            <div className="input-group mb-3 at-4">
                <input ref={taskRef} placeholder="Ingrese una Tarea" className="form-control" type="text" id="">   
                </input>
                <button onClick={agregarTarea} className="btn-success ms-2"><i className="bi bi-plus-circle-fill"></i></button>
                <button onClick={eliminarTareasCompletadas} className="btn-btn-danger ms-2"><i className="bi bi-trash"></i></button> 
            </div>
            
        </>
    )

    
}