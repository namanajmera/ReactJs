import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     category: ''
  //   }
  // }
  // category = (category) => {
  //   this.setState({
  //     category,
  //   })
  //   // console.log("Data ==> ", data);
  // }
  render() {
    return (
      <div>
        <NavBar category={(data) => this.content.category(data)} country={(data1) => this.content.country(data1)} />
        <News ref={instance => { this.content = instance; }} />
      </div>
    )
  }
}

