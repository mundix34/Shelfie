import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products:[{
        name: 'Watch',
        price: '$233',
        imageurl: 'shop.watch.com'
      }]
    }
  }
  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
        <Dashboard products= {this.state.products}/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
