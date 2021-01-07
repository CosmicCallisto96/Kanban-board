import './AddModal.scss';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class AddModal extends Component {
    state = { 
        show:"yes",
        data:{
                id:uuidv4(),
                desc:"",
                status:"planned",
                assignee:"James",
                date:""         
        }
     }
     close=()=>{
         this.setState({show:"no"});
     }
     handleSubmit = (event) => {
        event.preventDefault();
        var oldItems = JSON.parse(localStorage.getItem('doc')) || [];

var newItem = this.state.data

 oldItems.push(newItem);

 localStorage.setItem('doc', JSON.stringify(oldItems));
 this.setState({show:"no"});
 this.props.action();
        // localStorage.setItem('doc',JSON.stringify(this.state.data));
     }
     onTextChange=(e)=>{
         e.preventDefault();
         this.setState(prevState => {
            let data = Object.assign({}, prevState.data);  
            data.desc = e.target.value;                                    
            return { data };                                
          })
        
     }

     onDateChange=(e)=>{
        e.preventDefault();
        this.setState(prevState => {
           let data = Object.assign({}, prevState.data);  
           data.date = e.target.value;                    
           return { data };                                 
         })
        }
        onAssigneeChange=(e)=>{
            e.preventDefault();
            this.setState(prevState => {
               let data = Object.assign({}, prevState.data); 
               data.assignee = e.target.value;                    
               return { data };                                 
             })
            }
            onStatusChange=(e)=>{
                e.preventDefault();
                this.setState(prevState => {
                   let data = Object.assign({}, prevState.data);  
                   data.status = e.target.value;                     
                   return { data };                                 
                 })
                }
    render() { 
        // console.log(this.state);
        return ( 
            <div className={this.state.show}>
                {this.state.show?<>
                <form onSubmit={this.handleSubmit}>
                <label>Description: </label>
                <textarea id="noter-text-area" name="desc" value={this.state.data.desc} onChange={this.onTextChange} /><br></br>
                <label>Due Date</label>
                <input type="date" name="date" value={this.state.data.date} onChange={this.onDateChange} ></input>
                <br></br>
                <label>Assignee :</label>
                <select name="asignee" value={this.state.data.assignee} onChange={this.onAssigneeChange} >
                    <option>James</option>
                    <option>Jane</option>
                    <option>Jenny</option>
                </select>
                <br></br>
                <label >Status</label>
                <select name="status" value={this.state.data.status} onChange={this.onStatusChange} >
                    <option>planned</option>
                    <option>started</option>
                    <option>done</option>
                </select>
                <br></br>
                <input type="submit" value="Save"></input>
                </form>
                <button onClick={this.close}>close</button></>:null}
            </div>
         );
    }
}
 
export default AddModal;