
const input =(state ="",action)=>{
         if(action.type ==="SET_INPUT"){
             return state= action.value
         }
         else{
             return state
         }
}
export default input