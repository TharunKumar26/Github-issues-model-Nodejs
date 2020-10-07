import React from 'react';
import logo from './logo.svg';
import './App.css';



import Pages from './components/pagination'
import Filter from './components/filter_nav'
import Topnav from './components/top_nav'
import Add_issue from './components/add_issue';


class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }

  
    geturl=()=>{
      return  window.location.search;
    }
 
      componentDidMount() {
        var listurl =  window.location.search;
       
        fetch('/api/page_stats',{
          method :'GET',
           headers :{
               "Content-type":"application/json",
           },
           body:JSON.stringify()
       }).then(res=>{
         console.log(res)
          return res.json()
          }).then(res=>{
            console.log(res.open)
              this.setState({
                  open : res.open,
                  closed : res.closed,
              },console.log(this.state.data))
          })
          console.log('/api/list-issues'+listurl)
        fetch('/api/list-issues'+listurl,{
            method :'GET',
             headers :{
                 "Content-type":"application/json",
             },
             body:JSON.stringify()
         }).then(res=>{
     
            return res.json()
            }).then(res=>{
              
                this.setState({
                    loading : false,
                    data : res.data,
                })
            }).catch((e)=>{
                console.log(e)
            })
        }

    

  render()
  {      return (
          
          <div>
        
        
          <Topnav />
          <Filter  />
          <Pages />
          <Add_issue />

          </div>
        
        );

  }
}


export default App;
