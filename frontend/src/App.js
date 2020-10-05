import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from './components/pagination'
import Filter from './components/filter_nav'
import Topnav from './components/top_nav'
class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }


    

  render()
  {      return (
          
          <div>

          <div>
              
            <form method="POST" action="/api/add-issue">
                <input type="text" name="name" id=""/>
          
                <textarea name="issue" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="" />
              </form>

          
          </div>
          <Topnav />
          <Filter />
          <Pages />


          </div>
        
        );

  }
}


export default App;
