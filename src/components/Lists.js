import React, { Component } from 'react'
import { connect } from 'react-redux'

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
                    <div className="list">
                        <ul>
                            {this.props.tab.map(el=>{
                                return(
                                    <div className="mylist" key={el.id}>
                                        <p>{el.value}</p>
                                        <button className="btn btn btn-danger" onClick={()=>{this.props.delete(el.id)}}>delete</button>
                                        <button type="button" className="btn btn-success btn1" onClick={() => { this.props.edit(el.id) }}>Edit</button>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                 </div> );
    }
}
 const mapStateToProps =(state)=>{
     return{
         tab:state.output
     }
     
 }
const mapDispatchToProps =(dispatch)=>{
     return{
         delete:(x)=>{
             dispatch({
                 type: "DELETE_INPUT",
                 payload: x
             })
            
         },
         edit : (x)=>{
             dispatch({
                 type:'EDIT_INPUT',
                 payload:{value:prompt(), id:x}
             })
        }   
    } 
 }
    export default connect(mapStateToProps, mapDispatchToProps)(Lists);
