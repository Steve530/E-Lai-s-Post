import React from 'react';
class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], showmodal: false };
    this.showmodal = this.showmodal.bind(this);
    this.hidemodal = this.hidemodal.bind(this);
}
// fetch User's data by calling to the API when component is mounted, promise returned
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => this.setState({users:json}));
  }

  showmodal(e) {  
        document.body.style.backgroundColor = '#4c8086';
        var post_title = document.getElementById("title-id");
        if ((post_title.className)) {
          this.hidemodal   
        } 
        else {
            post_title.classList.add("add_className");
            this.setState({ showmodal: true,})    
        }
  }

// show or hide modal when onClick{} event is triggered 

  hidemodal() {
      document.body.style.backgroundColor = '#7eb5bb';
      this.setState({ showmodal: false }, () => {
          var post_title = document.getElementById("title-id");
          post_title.classList.remove("add_className");
        }
      );
  }

  render() {
    const { post } = this.props;
    const { title ,body ,id,userId} = post;
    const user1 =(this.state.users)[userId-1]
    let name ;
    let catchPhrase
    if (user1)  { 
      name = user1.name;
      catchPhrase = user1.company.catchPhrase
    }
    return (
      <div >
        <div className="post-title" >
          <li id='title-id' onClick={this.showmodal}>{id}.</li> <li id='title' onClick={this.showmodal}>{ title }</li>
          <div>
              { this.state.showmodal ? 
                (<div>
                    <div className='middle_layer' onClick={this.hidemodal} ></div>
                    <div id= 'modal_id' className="modal" >
                      <ul className='title-body'> <li className='part3'> Author :</li>  <li className='part4'>{name}</li></ul>
                      <ul className='title-body'> <li className='part3'> CatchPhrase :</li> <li className='part4'>{catchPhrase}</li></ul>
                      <ul className='title-body'> <li className='part3'> Title :</li> <li className='part4'>{title}</li> </ul>
                      <ul className='title-body'> <li className='part3'> Body :</li> <li className='part4'> {body}</li></ul>
                    </div>
                    <button id='butten-close'onClick={this.hidemodal} >X Close</button>
                </div>) : null
              }     
          </div>
        </div>
      </div>
    );
  }
}
export default PostListItem;
