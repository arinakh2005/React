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
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostList;