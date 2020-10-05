import React from 'react';

import '../styles/pagination.css';



class Pages extends React.Component{
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
        
<div class="pages_con">
    
<div class="pagination">
  <a href="#">&#8249; Previous</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">Next &#8250; </a>
</div>

    </div>
        )

  }
}


export default Pages;
