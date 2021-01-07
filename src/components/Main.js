import React, { Component } from 'react';
import AddModal from "./AddModal/AddModal";
import Card from './card/Card';
import { v4 as uuidv4 } from 'uuid';
import './Main.scss';
class Main extends Component {
    state ={data: [{ 
        id:uuidv4(),
        desc:"djndcjd",
        status:"st",
        assignee:"jose",
        date:"12-12-13"
    
     }],
     addClicked:false,
     count:1
    }
    handleUpdate=(id)=>{
        console.log(id);
    }
    handleAdd=()=>{
        console.log("clicked");
        this.setState({addClicked:!this.state.addClicked});
    }
    componentDidMount(){
        localStorage.clear();
        localStorage.setItem('doc',JSON.stringify(this.state.data));
    }
    componentDidUpdate(prevProp, prevState)
    {
        console.log("prevstate",prevState);
        var oldItems = JSON.parse(localStorage.getItem('doc')) || [];
        console.log("len",oldItems.length);
        if(prevState.count<oldItems.length)
        {
             this.setState({count:this.state.count+1});
             this.setState({data:oldItems});
        }
        
    }
    handler=()=> {
        var oldItems = JSON.parse(localStorage.getItem('doc')) || [];
        this.setState({data:oldItems});
    }
    render() { 
        // var oldItems = JSON.parse(localStorage.getItem('doc')) || [];
        // console.log(oldItems[0]);
        console.log(this.state)
        return (<div className="main">
             <i onClick={this.handleAdd} class="fas fa-plus-circle" style={{textAlign:"right",fontSize: "3em" ,color: "Tomato",padding:"10px",cursor:'pointer'}}></i>
            {this.state.addClicked?<><AddModal action={this.handler}></AddModal>
            <div className="planned">
            <h1 >Planned</h1>{this.state.data.map(val=>val.status==="planned"?<Card  action={this.handler} id={val.id} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
        </div>
        <div className="started">
        <h1>Started</h1>
        {this.state.data.map(val=>val.status==="started"?<Card action={this.handler} id={val.id} style={{cursor : 'pointer'}} onClick={()=>this.handleUpdate(val.id)} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
        </div>
        <div className="done">
        <h1>Done</h1>
        {this.state.data.map(val=>val.status==="done"?<Card action={this.handler} id={val.id} style={{cursor : 'pointer'}} onClick={()=>this.handleUpdate(val.id)} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
        </div></>:
        <>
        <div className="planned">
        <h1>Planned</h1>{this.state.data.map(val=>val.status==="planned"?<Card action={this.handler} id={val.id} style={{cursor : 'pointer'}} onClick={()=>this.handleUpdate(val.id)} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
    </div>
    <div className="started">
    <h1>Started</h1>
    {this.state.data.map(val=>val.status==="started"?<Card action={this.handler}id={val.id}style={{cursor : 'pointer'}} onClick={()=>this.handleUpdate(val.id)} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
    </div>
    <div className="done">
    <h1>Done</h1>
    {this.state.data.map(val=>val.status==="done"?<Card action={this.handler} id={val.id} style={{cursor:'pointer'}} onClick={()=>this.handleUpdate(val.id)} desc={val.desc} status={val.status} assignee={val.assignee} date={val.date}></Card>:<></>)}
    </div></>}
        </div>);
    }
}
 
export default Main;