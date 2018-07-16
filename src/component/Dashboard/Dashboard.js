import React, {Component} from 'react';
import Product from '../Product/Product'
class Dashboard extends Component{
    constructor(props){
                super(props)
                this.state ={
                    products:this.props.products
                    
                }
            }
        
        
        render(){
        const products = this.state.products.map( (element, i) => 
        (<h3 key = {i}>{element}</h3>))

            return(
                <div>
                    
                    <Product products ={products}/>
                    <h1>Dashboard</h1>
                    {JSON.stringify(products)}
                    {/* {this.props.products} */}
                    
                </div>
    
            )
        }
    }
        














// import Product from '../Product/Product'
// class Dashboard extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             products:this.props.products
            
//         }
//     }
//     renders(){
//         return(
//             <div>
//                 <h1>Dashboard</h1>
//                 {products}

//                 <Product/>
//             </div>

//         )
//     }
// }




export default Dashboard;