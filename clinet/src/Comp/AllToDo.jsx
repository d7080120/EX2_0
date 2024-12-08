import { useReducer, useState } from "react"
import ToDo from "./ToDo";

const AllToDo = () => {
    const [flag, setFlag] = useState(false)
    const initialState = [];
    const [cnt, setCnt] = useState(0)
    const [txt, setTxt] = useState("")
    // <button type="button" onClick={addToDo}>addToDo </button>
    const addToDo = () => {
        dispatch({ type: "add" })
    }
    const filter = () => {
        dispatch({ type: "filter" })
    }
    const listToDoReducer = (state, action) => {
        switch (action.type) {
            case "add":
                const c = state.map((a) => { return { id: a.id, name: a.name } })
                c.push({ id: cnt, name: txt })
                setCnt(cnt + 1)
                return c
            case "delete":
                return state.filter((f) => { return !(f.id === action.id) })
            case "filter":
                return state
            default:
                throw new Error();
        }
    }
    const [listToDo, dispatch] = useReducer(listToDoReducer, initialState);

    return (<>


        <button onClick={() => addToDo()}>add ToDo</button>
        <button onClick={() => filter()}>filter</button>

        <input onChange={(i) => { setTxt(i.target.value) }}></input>
        {
            listToDo.map(e => {
                return <ToDo id={e.id} name={e.name} dispatch={dispatch} />
            }
            )}



    </>)

}

export default AllToDo