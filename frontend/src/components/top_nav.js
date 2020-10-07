import React from 'react';

import '../styles/top_nav.css';



class Topnav extends React.Component{
  constructor(props) {
      super(props);
      this.state = {loading:false,data:{},image:"https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",categories: ['one','two'], count :0};
    }
  
     delborder =(e)=>{
         console.log(e)

    }

  render()
  {
    const label_b = {'box-shadow': '0px 0px 2px 0px #1f1f1f','display':'flex','align-item':'stretch','background-color':'#f1f1f9','color':'black','flex-grow': '1','border-radius':'7px'}
    const add_b ={'flex-grow':'1','margin-left':'15px','border-radius': '7px','background-color':'#4CAF50'}  
    const search_start ={'text-align':'left','color':'black','margin-left':'1px','margin-right':'10px','flex-grow': '8','box-shadow': '0px 0px 2px 0px #1f1f1f','border-radius': '0px 5px 5px 0px'}
    const label_b_1 ={'flex-grow':'1','position':'relative'}
    const circle ={'border-radius':'50%','box-shadow': '0px 0px 2px 0px #1f1f1f','width':'5px','height':'5px','margin-left':'3px'}
      return (
        <div class="nav_con">
    <div class="top_nav">
        <div style={{'flex-grow': '5'}}>
            <div class="top_nav_2">
                <div className="filter_d" style={{'box-shadow': '0px 0px 2px 0px #1f1f1f','flex-grow':'1'}}>Filters<i class="fa fa-caret-down" style={{'marginLeft':'5px'}}></i></div>
                <div class="seach_start" style={search_start}><i class="fa fa-search" style={{'margin-left':'5px'}}></i><input type="text" /></div>

            </div>
        </div>
        <div class="label_b" style={label_b}>
            <div style={label_b_1}><svg style={{'margin-top':'3px'}} class="octicon octicon-tag" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path style={{'margin-top':'10px'}} fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>Labels
            <span style={circle}>538</span></div><span style={{'border-right':'1px solid grey'}}></span>
            <div style={label_b_1}><svg class="octicon octicon-milestone" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>Milestones
            <span style={circle}>538</span>
            </div>
        </div>
        <div style={add_b}>add issue</div>
    </div>
        </div>
    )

 }
}


export default Topnav;