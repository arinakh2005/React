import { useState } from 'react';
import Modal from './Modal.jsx';
import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import classes from './PostsList.module.css';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
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