import React from 'react';
import axios from "axios";
import './reset.css';
//components
import InputFields from "./components/InputFields"
import Header from "./components/Header"
import FutureEvents from "./components/FutureEvents"
import CompletedEvents from "./components/CompletedEvents"
import Footer from "./components/Footer"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      completed: []
    }
    this.updateEvents = this.updateEvents.bind(this);
    this.updateCompleted = this.updateCompleted.bind(this);
    this.deleteEvents = this.deleteEvents.bind(this);
    // this.deleteComplete = this.deleteComplete.bind(this);
    this.editCompleted = this.editCompleted.bind(this);
  }

  componentDidMount(){
    axios.get("/api/events/").then(response => {
        this.setState({
            events: response.data
        })
    })

    axios.get("/api/completed").then(response => {
      this.setState({
          completed: response.data
      })
  })
  .catch(err => {
    console.log(err);
    //if the axios comes back with a bad status comes back, it allows you to run some code
  });
}

deleteEvents = (id) => {
  axios.delete(`/api/events/:${id}`).then(response => {
      this.setState({
          events: response.data
      })
  })

}

deleteCompleted = (id) => {
  axios.delete(`/api/completed/:${id}`).then(response => {
      this.setState({
          completed: response.data
      })
  })

}

editCompleted = (id, newValue) => {
  console.log(id, newValue)
  const {description} = newValue;
  axios.put(`/api/completed/${id}`, {description}).then(response => {
      this.setState({
          completed: response.data
      })
  })
}



  updateEvents(events){
    this.setState({events: events})
  }

  updateCompleted(completed){
    this.setState({completed: completed})
  }

  render() {
    console.log(this.state.events);
    return (
    
    <main className="App">
    
        <Header />
        <InputFields  updateEvents={this.updateEvents} updateCompleted={this.updateCompleted}/>
      <div className="components">
      
          <div id="container">
         
          
          <FutureEvents events={this.state.events} delete={this.deleteEvents}/>
          <CompletedEvents  completed= {this.state.completed} deleteC={this.deleteCompleted} edit={this.editCompleted}/>  
          
          </div>  
      </div>
      <Footer className="Footer" /> 
      
      </main>
       

    );
  }
}

export default App; 
