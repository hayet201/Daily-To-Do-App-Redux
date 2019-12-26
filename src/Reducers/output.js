const output =(state=[], action)=>{
    if(action.type === "ADD_INPUT"){
        return [...state, action.payload]
        
    }
    else if (action.type === "DELETE_INPUT"){
        return state.filter(el =>el.id !== action.payload)
    }
    else if(action.type === "EDIT_INPUT"){
        
        return[...state.filter(el => el.id !== action.payload.id),action.payload ]

    }
    else {
        return state
    }

}
export default output