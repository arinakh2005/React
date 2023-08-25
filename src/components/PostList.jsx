import { useLoaderData } from 'react-router-dom';
import Post from './Post.jsx';
import classes from './PostsList.module.css';

function PostList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length &&
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
        </ul>
      }
      {!posts.length &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      }
    </>
  );
}

export default PostList;