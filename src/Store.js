import { createStore, combineReducers} from "redux";
import input from './Reducers/input'
import output from './Reducers/output'


const Store = createStore(combineReducers({
    input: input,
    output:output,
  

}))
export default Store