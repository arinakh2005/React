import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import classes from './PostsList.module.css';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostList;