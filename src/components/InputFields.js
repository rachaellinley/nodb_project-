import React from "react";
import axios from "axios";
import "../styles/InputFields.css";

class InputFields extends React.Component {
    constructor(){
        super();
        this.state = {
            description: "",
            imgUrl: ""
        }
        this.updateDescription = this.updateDescription.bind(this);
        this.updateImgUrl = this.updateImgUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCompletedClick = this.handleCompletedClick.bind(this);
    }

    updateDescription(e){
        this.setState({ description: e.target.value});
    }

    updateImgUrl(e){
        this.setState({ imgUrl: e.target.value })
    } 

    handleClick(){
        const { description, imgUrl } = this.state;
        let body = {
            description,
            imgUrl
        }

        axios.post("/api/events", body).then(response => {
           console.log('OKAY')
           this.props.updateEvents(response.data)
        });
    }

    handleCompletedClick(){
        const { description, imgUrl } = this.state;
        let body = {
            description,
            imgUrl
        }

        axios.post("/api/completed", body).then(response => {
           console.log('OK')
           this.props.updateCompleted(response.data)
        });
    }


    render(){
        return (
           
            <div id="input_container">
            <br/>
            <br/> 
            <input className="input-style" onChange={this.updateDescription} placeholder="Add an item!" />
            <input className="input-style" onChange={this.updateImgUrl} placeholder="Add a picture!" />
           <div id="buttons_container">
            <button className="button" onClick={this.handleClick}>Add to Bucket List</button>
            <button className="button" onClick={this.handleCompletedClick}>Check Off Bucket List</button>
            <br/>
            <br/>
            <br/>
           
            <br/>

            </div>

            </div>
        )
    }
}

export default InputFields;