import React, {Component} from 'react';
import Product from '../Product/Product';
class Dashboard extends Component{
    constructor(props){
                super(props)
                this.state = {
                    products: this.props.products
                    
                }
            }
        
        
        render(){
        const newProducts = this.state.products.map( (element, i) => 
        (<div key = {element.id}>{element.name}
            {element.price}
            {element.imageurl}
            <button onClick={() => this.deleteProduct(element.id)}>Delete</button>

         </div>))

            return(
                <div>
                    
                    <Product newProducts ={newProducts}/>
                    <h1>Dashboard</h1>
                    {newProducts}
                    {this.props.getProducts}
                    {this.props.deleteItem}
                    
                </div>
    
            )
        }
    }

    
export default Dashboard;

        














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



