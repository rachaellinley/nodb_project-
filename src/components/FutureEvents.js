import React from "react";
import "../styles/FutureEvents.css"

class FutureEvents extends React.Component {
    constructor(){
        super();
        this.state = {
           
        }
    }

   

    render(){
        console.log(this.state.events)
        return(
            <div className="events-wrapper">

            <div className="events">
                
                <h1 id="future">Bucket List</h1>
                <br/>
                
                 {this.props.events.map(element => {
            const { description, imgUrl } = element;
            return (
                <div className="list" key={element.id}>
                 <img alt="event_image" className="event_image" src={imgUrl}/>
                 <h1 id="description">{description}</h1>
                 <br/>
                 <button onClick={() => this.props.delete(element.id)} id="delete_button">Delete</button>
                 <br/>
                 <br/>
                 </div>
            )
        })}
            </div>
            </div>

        )
    }
}

export default FutureEvents;