import React, {Component} from 'react';


class Form extends Component(){
    constructor(){
        super()
        this.state = {
            name:'',
            price:'',
            imageurl:'',
            products:[]
            
        }
        this.addName = this.addName.bind(this);
        this.addPrice = this.addPrice.bind(this);
        this.addImageurl= this.addImageurl.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.clearInput =this.clearInput.bind(this);
        
    }
    addName(val){
        this.setState({
            name:val
        })
    }
    addPrice(val){
        this.setState({
            price:val
        })
    }
    addImageurl(val){
        this.setState({
            imageurl:val
        })
    }
    clearInput(){
        this.setState({
            name:'', price:'', imageurl:''
        })
    }
    addProduct(){
        let newProducts = [...this.state.products]
        newProducts.push({name: this.state.name, price: this.state.price, imageurl: this.state.imageurl})
        this.setState({
            products: newProducts
        })
    }
    
    renders(){
        return (
            <div>
                <form>
                    <input className = "input" onChange = {(e) => this.addName(e.target.value)}/>
                    <input className = "input" onChange = {(e) => this.addPrice(e.target.value)}/>
                    <input className = "input" onChange = {(e) => this.addImageurl(e.target.value)}/>
                    
                    <button className ="button" onClick = {() => this.clearInput()}>Cancel </button>
                    <button className ="button" onClick = {() => this.addProduct()}>Add</button>


                </form>
                
            </div>
    
        )
        
    }
}


export default Form;