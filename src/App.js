import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
        super()
        this.state = {
        
          products:[]
          
        }
        this.getInventory = this.getInventory.bind(this)
      
      }
      getInventory(){
        axios.get('/api/inventory').then((results) => {
          this.setState({products: results.data})
        })

      }
      componentDidMount(){
        this.getInventory()
            
          }
    
    
    render() {
      return (
        <div className="App">
        {this.state.products}
          <Dashboard products={this.state.products}/>
          <Form getInventory = {this.getInventory}/>
          <Header/>
        </div>
      );
    }
  }
    

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       products:[]
//     }
//   }
//   componentDidMount(){
//     axios.get('/api/inventory').then((results) => {
//       this.setState({products: results.data})
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//       <h1>Hello World</h1>
//         <Dashboard products= {this.state.products}/>
//         <Form compMount= {this.componentDidMount}/>
//         <Header/>
//       </div>
//     );
//   }
// }

export default App;
