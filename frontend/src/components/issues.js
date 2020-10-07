import React from 'react';


import '../styles/filter_nav.css';



class Issues_con extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }


  render()
  {
   
      return (
        
  
  <div>
     

   
      <p class="issue_name"> {this.props.data.issue}</p>
      <p class="user_date">#{this.props.data.id} { this.props.data.isopen? 'opened' :'closed'} by {this.props.data.user}  </p>
</div>




        )

  }
}


export default Issues_con;
