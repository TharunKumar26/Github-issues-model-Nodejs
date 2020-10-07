import React from 'react';

import '../styles/filter_nav.css';
import Main_list from './issues_list';

import Loading from './loading';



class Filter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {open:0,closed:0,loading:true,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }
    geturl=()=>{
      return  window.location.search;
    }
 
      componentDidMount() {
        var listurl =  window.location.search;
       
        fetch('/api/page-stats',{
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
  {
      const icon_s = {
        'display': 'inline','margin-left':'5px'
      }
      return (
        <div class="main_container">

          
<div class="filter_nav">
      <div style={{'flex-grow': '1'}}><i class="fas fa-exclamation-circle"></i>{this.state.open} opened </div>
      <div style={{'flex-grow': '15','text-align':'left'}}><i class="fas fa-check"></i> {this.state.closed} closed</div>
  <div style={{'flex-grow': '1'}}>Author<i class="fa fa-caret-down" style={icon_s}></i></div>
    <div style={{'flex-grow': '1'}}>Label<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Projects<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Milestones<i class="fa fa-caret-down" style={icon_s}></i></div>
   <div style={{'flex-grow': '1'}}>Assignee<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Sort <i class="fa fa-caret-down" style={icon_s}></i></div>


</div>
  {console.log(this.state.data)}
  
    { this.state.loading ? <Loading /> : this.state.data.map((key)=>(<Main_list data={key}/>)) }
    
 
</div>
        )

  }
}


export default Filter;
