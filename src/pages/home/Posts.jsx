import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions";
import { Container } from "./mainSectionStyles";
import styled from "styled-components";

const Posts = ({ posts, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostsContainer>
      {posts &&
        posts.map((post) => {
          const [data, id] = post;
          return <SinglePost key={id} post={data} />;
        })}
    </PostsContainer>
  );
};
const PostsContainer = styled(Container)`
  background: none !important;
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
