import './Card.scss';
import UpModal from '../UpModal/UpModal';
import React, { Component } from 'react';
class Card extends Component {
        state ={
            dbclick:false
        }
    handleUpdate=(id)=>{
        console.log(id);
        this.setState({dbclick:!this.state.dbclick})
    }
    fun=()=>
    {
        this.props.action();
    }

    render() { 
        return (<>{this.state.dbclick?<><UpModal fun={this.fun} id={this.props.id} desc={this.props.desc} status={this.props.status} assignee={this.props.assignee} date={this.props.date}></UpModal><div className="card" style={{cursor : 'pointer'} } onDoubleClick={()=>this.handleUpdate(this.props.id)}>
        <p>
            Description: {this.props.desc}
        </p>
        <p>
            Status: {this.props.status}
        </p>
        <p>
            Assignee: {this.props.assignee}
        </p>
        <p>
            Date: {this.props.date}
        </p>
    </div></>:<><div className="card" style={{cursor : 'pointer'} } onDoubleClick={()=>this.handleUpdate(this.props.id)}>
        <p>
            Description: {this.props.desc}
        </p>
        <p>
            Status :{this.props.status}
        </p>
        <p>
            Assignee :{this.props.assignee}
        </p>
        <p>
           Date: {this.props.date}
        </p>
    </div></>}</>);
    }
}
export default Card;
// const Card = (props) => {
//     return (
// }
// export default Card;