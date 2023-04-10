import React from "react";
import styled from "styled-components";
import { Text, Title } from "./modalStyles";

const SinglePost = ({ post }) => {
  return (
    <div>
      {post.user && (
        <UserInfo>
          <Text>
            <div>
              <img src={post.user.image && post.user.image} alt="user-photo" />
              <h2>{post.user.name}</h2>
            </div>
          </Text>
          <Details>
            <h2>{post.user.email}</h2>
            <h2>{post.user.timeStamp}</h2>
          </Details>
        </UserInfo>
      )}
      <h2>{post.description && post.description}</h2>
      {post.video !== "" ? <video src={post.video} /> : null}
    </div>
  );
};
const UserInfo = styled.div``;
const Details = styled.div``;
export default SinglePost;
