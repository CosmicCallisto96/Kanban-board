import './UpModal.scss';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class UpModal extends Component {
    state = { 
        show:"yes",
        data:{
                id:this.props.id,
                desc:this.props.desc,
                status:this.props.status,
                assignee:this.props.assignee,
                date:this.props.date         
        }
     }
     close=()=>{
         this.setState({show:"no"});
     }
     handleSubmit = (event) => {
        event.preventDefault();
        var doc = JSON.parse(localStorage.doc);
for (var i = 0; i < doc.length; i++) {
   if(this.props.id === doc[i].id){  //look for match with name
       doc[i].desc=this.state.data.desc;  
       doc[i].date=this.state.data.date;  
       doc[i].status=this.state.data.status;  
       doc[i].assignee=this.state.data.assignee;  
       break;  //exit loop since you found the person
   }
}
localStorage.setItem("doc", JSON.stringify(doc));
//         var oldItems = JSON.parse(localStorage.getItem('doc')) || [];

// var newItem = this.state.data

//  oldItems.push(newItem);

//  localStorage.setItem('doc', JSON.stringify(oldItems));
 this.setState({show:"no"});
 this.props.fun();
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
                <label>DESCRIPTION :</label>
                <textarea id="noter-text-area" name="desc" value={this.state.data.desc} onChange={this.onTextChange} /><br></br>
                <label>Due DATE :</label>
                <input type="date" name="date" value={this.state.data.date} onChange={this.onDateChange} ></input>
                <br></br>
                <label>ASIGNEE :</label>
                <select name="asignee" value={this.state.data.assignee} onChange={this.onAssigneeChange} >
                    <option>James</option>
                    <option>Jane</option>
                    <option>Jenny</option>
                </select>
                <br></br>
                <label >STATUS :</label>
                <select name="status" value={this.state.data.status} onChange={this.onStatusChange} >
                    <option>planned</option>
                    <option>started</option>
                    <option>done</option>
                </select>
                <br></br>
                <input type="submit" value="save"></input>
                </form>
                <button className="close" onClick={this.close} style={{height: "50px",
    fontSize: "14px",
    color: "#fff",
    marginLeft:"65px",
    marginTop: "20px",
    background:"#EA1B35",
    border: "none",
    cursor: "pointer"}}>close</button></>:null}
            </div>
         );
    }
}
 
export default UpModal;