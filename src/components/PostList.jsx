import { useLoaderData } from 'react-router-dom';
import Post from './Post.jsx';
import classes from './PostsList.module.css';

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length &&
        <ul className={classes.posts}>
          {posts.map((post) => <Post id={post.id} key={post.body} author={post.author} body={post.body} />)}
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