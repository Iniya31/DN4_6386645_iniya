import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 5) }); // Showing first 5 posts
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  componentDidMount() {
    this.loadPosts(); // Called after component renders
  }

  componentDidCatch(error, info) {
    alert('Error occurred: ' + error);
    console.log('Caught error:', info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;