import React from 'react';

import '../styles/filter_nav.css';



class Filter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }
  
    

  render()
  {
      const icon_s = {
        'display': 'inline','margin-left':'5px'
      }
      return (
        <div class="main_container">
<div class="filter_nav">
  <div style={{'flex-grow': '1'}}><i class="fas fa-exclamation-circle"></i>Number opened </div>
  <div style={{'flex-grow': '15','text-align':'left'}}><i class="fas fa-check"></i> number closed</div>
  <div style={{'flex-grow': '1'}}>Author<i class="fa fa-caret-down" style={icon_s}></i></div>
    <div style={{'flex-grow': '1'}}>Label<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Projects<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Milestones<i class="fa fa-caret-down" style={icon_s}></i></div>
   <div style={{'flex-grow': '1'}}>Assignee<i class="fa fa-caret-down" style={icon_s}></i></div>
  <div style={{'flex-grow': '1'}}>Sort <i class="fa fa-caret-down" style={icon_s}></i></div>


</div>
  
  <div class="issue_list_con">
  <div class="main_con">
  <div class="left_bl" ><i class="fas fa-exclamation-circle"></i>
    </div>
    <div class="cmt_bl">
    comments
    </div>
  <p class="issue_name"> name of the issue</p>
  <p class="user_date">date </p>
</div>
</div>
</div>
        )

  }
}


export default Filter;
