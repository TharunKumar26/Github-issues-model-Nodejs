import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import '../styles/filter_nav.css';
const PopupExample = () => (
    <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
      
<form>
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname" />
  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname" />
</form>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
  );

class Add_issue extends React.Component{
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
      <PopupExample />
</div>

        )

         }
}


export default Add_issue;
