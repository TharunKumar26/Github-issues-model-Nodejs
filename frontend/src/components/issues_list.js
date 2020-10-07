import React from 'react';

import '../styles/filter_nav.css';




class Main_list extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }
    getdata=()=>{
        this.setState({loading: true},()=>{
           fetch('http://localhost:3000/api/list-issues')
           .then(res=>{
            
              this.setState({
                loading: false,
                data : res,
                },console.log(res.json()))
            })
            
        
        })
      }

     

  render()
  {
   
      return (
        
  
  <div>
      <div class="issue_list_con">
  <div class="main_con">
  <div class="left_bl" ><i class="fas fa-exclamation-circle"></i>
    </div>
    <div class="cmt_bl">
    comments
    </div>
    
      <p class="issue_name"> {this.props.data.issue}</p>
      <p class="user_date">#{this.props.data.id} { this.props.data.isopen? 'opened' :'closed'} by {this.props.data.user}  </p>
</div>
</div>
</div>



        )

  }
}


export default Main_list;
