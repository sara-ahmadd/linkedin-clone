import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions";
import { Container } from "./mainSectionStyles";

const Posts = ({ posts, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      {posts && posts.map((post) => <SinglePost post={post} />)}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.postsState.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
