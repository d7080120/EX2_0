import { type } from "@testing-library/user-event/dist/type"

const ToDo=(props)=>
    {
   
        return(
            <div style={{color:"yellow",backgroundColor:"pink",font:"icon",fontSize:"30px"}}>
                <h3>{props.id}, {props.name}</h3>
                <button onClick={()=>{props.dispatch({type:"delete",id:props.id})}}style={{color:"yellow",backgroundColor:"black",font:"icon",fontSize:"30px"}}>delete</button>
            </div>
        )
    }
    export default ToDo