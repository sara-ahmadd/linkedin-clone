import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions";
import { Container } from "./mainSectionStyles";
import styled from "styled-components";

const Posts = ({ posts, getAllPosts, loading }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostsContainer>
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          const [data, id] = post;
          return <SinglePost key={id} post={data} />;
        })
      ) : (
        <h2>No Posts to display</h2>
      )}
    </PostsContainer>
  );
};
const PostsContainer = styled(Container)`
  background: none !important;
  margin: 0 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
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
