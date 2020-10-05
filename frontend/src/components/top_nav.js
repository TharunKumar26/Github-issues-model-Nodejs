import React from 'react';

import '../styles/top_nav.css';



class Topnav extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }
  
    

  render()
  {
    const label_b = {'border':'1px solid black','color':'black','padding-left':'20px','flex-grow': '1','border-radius':' 5px'}
    const add_b ={'border':'1px solid black','flex-grow':'1','margin-left':'15px','border-radius': '7px','background-color':'green'}  
    const search_start ={'color':'black','margin-left':'0.5px','margin-right':'10px','flex-grow': '8','border':'1px solid black','border-radius': '0px 5px 5px 0px'}

     
      return (
        <div class="nav_con">
    <div class="top_nav">
        <div style={{'flex-grow': '5'}}>
            <div class="top_nav_2">
                <div class="filter_d" style={{'border':'1px solid black','flex-grow':'1'}}>Filters<i class="fa fa-caret-down" style={{'margin-left':'5px'}}></i></div>
                <div class="seach_start" style={search_start}>2</div>

            </div>
        </div>
        <div class="label_b" style={label_b}>2</div>
        <div style={add_b}>3</div>
    </div>
        </div>
    )

 }
}


export default Topnav;