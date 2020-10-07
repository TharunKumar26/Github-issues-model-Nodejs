
import React from 'react';
import queryString from 'query-string';
import '../styles/pagination.css';
import Loading from './loading';

function Users(c) {
  var list = [];
 var url = new URL(window.location.href);
  console.log(window.location.search)
  console.log(url.searchParams)
  for(var l =0; l<c;l++ ){
    var url = '/api/list-issues'+(l+1);
    list.push({'url':url,'num':l+1});
    
  }
  console.log(list)
  return (
    <span>
     
      {list.map((key)=>{
        return(
          <a href={key.url} >{key.num}</a>
        )
      })}
    </span>
  );
}


class Pages extends React.Component{


  
  constructor(props) {
      super(props);
      this.state = {loading:true,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count:null};
    
    
    }
 
    geturl=()=>{
      return  window.location.search;
    }

    componentDidMount() {
      var listurl =  window.location.search;
          fetch('/api/list-issues'+listurl,{
          method :'GET',
           headers :{
               "Content-type":"application/json",
           },
           body:JSON.stringify()
       }).then(res=>{
          console.log(res)
          return res.json()
          }).then(res=>{
            
              this.setState({
                  loading : false,
                  count : Math.floor(res.page/10)+1,
              })
          }).catch((e)=>{
              console.log(e)
          })
      }

    
  
    

  render()

  {
    var pagecount= this.state.count;
    var pages = "";
function pages_fun() {
  
  
  for (var i = 0; i < pagecount/6; i++) {
  pages+=<a href='indent' key={i}>{i+1}</a>;
  }
  console.log("pages" + pages)
  return pages
}


    
    
   
    const parsed = queryString.parse(window.location.search);
    console.log(parsed)
    console.log(window.location.hash);

      const icon_s = {
        'display': 'inline','margin-left':'5px'
      }
      return (
        
<div class="pages_con">
    
<div class="pagination">



  <a href="#">&#8249; Previous</a>


  {this.state.loading ? Users(0): Users(this.state.count) }
  
  <a href="#">Next &#8250; </a>
</div>

    </div>
        )

  }
}


export default Pages;
