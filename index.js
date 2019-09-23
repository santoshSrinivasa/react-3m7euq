import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state={
      persons : [],
    }
  }
  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({persons});
    })
  }
  render() {
    return (
      <div>
      <ul>
      {this.state.persons.map(  details => <li>{details.username}</li>)}
      </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
