import React from 'react';


class Loading extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
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
                }, 1000))
        
        })
      }
    

  render()
  {
     
      return (
        
  
            <div>
            
            <h1> Loading ....</h1>
            </div>

        )

         }
}


export default Loading;
