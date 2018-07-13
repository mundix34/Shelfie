import React, {Component} from 'react';
import Product from '../Product/Product'
class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state ={
            products:this.props.products
            
        }
    }
    renders(){
        const products = this.state.products.map( (product, i) => (<h3 key = {i}>{product.name} {product.price} {product.imageurl}));</h3>))
        return(
            <div>
                <h1>Dashboard</h1>
                {products}

                <Product/>
            </div>

        )
    }
}




export default Dashboard;