import React, { Component } from 'react'
import { connect } from 'react-redux';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <div className="todolist ">
                <div className="todo">
                    <h1>Daily To Do List</h1>
                </div>
                <div>
                    <input type="text" onChange={(e)=>{this.props.input(e.target.value)}}/>
                    <button className="plus" onClick={() => { this.props.Add(this.props.inputText)}}>+</button>
                </div>

            </div>
         );
       
    }
 
}
const mapStateToProps = (state) =>{
    return {
        inputText:state.input
           
        }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        input :(x) => { 
            dispatch({
                type:"SET_INPUT",
                value:x
            })
        },
        Add:(x)=>{
            dispatch({
                type:"ADD_INPUT",
                payload: { value:x, id:Math.random()}
            })

        }
    }
        
    
}
export default connect (mapStateToProps, mapDispatchToProps)(Todo) ;
