import React from 'react';
class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.showmodal = this.showmodal.bind(this);
    this.hidemodal = this.hidemodal.bind(this);
}
// fetch User's data by calling to the API when component is mounted, promise returned
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => this.setState({users:json}));
  }

  showmodal() {  
      document.body.style.backgroundColor = '#4c8086';
        this.setState({ showmodal: true,}, () => {
        document.addEventListener('click', this.hidemodal);
      });
  }

// show or hide modal when onClick{} event is triggered 

  hidemodal() {
      document.body.style.backgroundColor = '#7eb5bb';
      this.setState({ showmodal: false }, () => {
        document.removeEventListener('click', this.hidemodal);
      });
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
            <div className="post-title" onClick={this.showmodal}>
                <li id='title-id'>{id}.</li><li></li> <li id='title'>{ title }</li>
                <div>
                    { this.state.showmodal ? 
                       (<div>
                            <div className="modal" onClick={this.hidemodal} >
                              <li className='title-body'> <li className='part3'> Author :</li>  <li className='part4'>{name}</li></li>
                              <li className='title-body'> <li className='part3'> CatchPhrase :</li> <li className='part4'>{catchPhrase}</li></li>
                              <li className='title-body'> <li className='part3'> Title :</li> <li className='part4'>{title}</li> </li>
                              <li className='title-body'> <li className='part3'> Body :</li> <li className='part4'> {body}</li></li>
                            </div>
                            <button id='butten-close' onClick={this.showmodal}>X Close</button>
                        </div>) : null
                    }     
                </div>
            </div>
        </div>
    );
  }
}
export default PostListItem;
