import React from "react";
import axios from "axios";
import "../styles/CompletedEvents.css"

class CompletedEvents extends React.Component {
    constructor(){
        super();
        this.state = {

            description:"",
        
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

    }

    handleChange(event) {
        this.setState({description: event.target.value});
      }

    render(){
        console.log(this.state.description)
        return(
            <div className="completed">
                <h1 id="completedtitle">Checked Off</h1>
                <br/>
                
                 {this.props.completed.map(element => {
            const { description, imgUrl } = element;
            let newValue = {
                description: this.state.description
            }
            return (
                
                <ol className="list">
            
                 <li><img alt="event_image" id="completed_image" src={imgUrl}/></li>
                 <li id="description2">{description}</li>
                 <span>
                 <input placeHolder="Edit Description" type="text" value={this.state.value} onChange={this.handleChange} />
                 <button onClick={() => this.props.edit(element.id, newValue)}>Edit</button>
                 </span>
                 <button onClick={() => this.props.deleteC(element.id)} id="delete_button2">Delete</button>
                 <br/>
                 <br/>
                 </ol>      
            )
        })}
            </div>
            
        )
    }
}

export default CompletedEvents;