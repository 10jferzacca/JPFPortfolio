import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'JonPaul Ferzacca',
      headerLinks : [
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'Be great',
        subTitle: 'Lets make a project',
        text: 'check out my stuff'
      },
      about: {
        title: 'About Me',
      },
      home: {
        title: 'Let\'s Talk',
      },
    }
  }

  render() {
    return <h1>Hello! {this.props.name}</h1>;
  }
}
export default App;
