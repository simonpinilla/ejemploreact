import React from "react"
export function TodoItem({todo,cambiarEstado}){
    const {id,taskcomplete}=todo

    const fnCambiarEstado=()=>{
        cambiarEstado(id);
    }
    return (
        <>
            <li className="list-group-item">
            <input className="form-check-input me-2" onChange={fnCambiarEstado} checked={complete} type="checkbox">       
            </input>   
            </li>
        </>
    )





