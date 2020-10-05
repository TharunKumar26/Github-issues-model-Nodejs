import React from 'react';
import App from './App';
import About from './about';
import './shop1.css'
import Product from './shop/product'
import Server from './socket'
class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
      }

    increment=()=>{
      setTimeout(() => {
        this.setState({

          count : this.state.count +1

      })
      
      }, 1000);
        
    }
    componentDidMount(){
      setInterval(() => {
        
      }, 2000);
    }
    image=()=>{
      setTimeout(() => {
        return this.state.image
      }, 1000);
    }
    getdata=()=>{
      this.setState({loading: true},()=>{
         fetch('https://www.anapioficeandfire.com/api/')
         .then(
          setTimeout(() => {
            this.setState({
              loading: false,
              data : "done",
        })
            
          }, 1000)
          
         )
      
      })
     
    }

   
    render()
    {
        return (
            
            <div classname="category">
            <img alt="" src={this.image} />
            {<Server />}
            <button onClick={this.increment}>Hello I am Button </button>
            <h3> {this.state.count}</h3>    
            <button onClick={this.getdata}>fetch here</button>
            {this.state.loading ? <App /> : <About />}
            {<Product name="test"/>}
            {console.log(this.state.loading)}</div>
          );

    }
}


export default Category;
