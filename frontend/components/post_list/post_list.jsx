import React from 'react';
import PostListItem from './post_list_item';

class PostList extends React.Component {
  constructor(props) {
      super(props);
      this.state = { posts: [] };
  }

  /* Fetch posts's data by calling to the API when component is mounted. 
     Use the setState function to save data into the state. */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.setState({posts:json}));
  }

render() {
  const { posts } = this.props;
  const postItems = this.state.posts.map(post => (
      <PostListItem
        key={`post-list-item${post.id}`}
        post={post} />
    )
  );
  // Map <PostListItem /> component into postItems to display below. 
    return(
      <div>
        <ul className="post-list">
          { postItems }
        </ul>
       </div>
    );
  }
}

export default PostList;
