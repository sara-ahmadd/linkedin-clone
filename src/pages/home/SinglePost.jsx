import React, { useState } from "react";
import * as Styles from "./singlePostStyles";
import comment from "/images/share-comment.svg";
import send from "/images/send-icon.svg";
import like from "/images/like-icon.svg";
import share from "/images/share-icon.svg";
import ReactPlayer from "react-player";
import ellipsis from "/images/ellipsis.svg";
import heart from "/images/heart.png";
import likeThumb from "/images/like.png";

const SinglePost = ({ post }) => {
  const { user, description, video, photo, comments } = post;
  const dateObject = new Date(user.time.seconds * 1000);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const pmOrAm =
    dateObject.getHours() >= 0 && dateObject.getHours() < 12 ? "AM" : "PM";

  const getHrs =
    dateObject.getHours() > 12
      ? dateObject.getHours() - 12
      : dateObject.getHours() == 0
      ? dateObject.getHours() + 12
      : dateObject.getHours() > 0 && dateObject.getHours() < 10
      ? `0${dateObject.getHours()}`
      : dateObject.getHours();

  const getMins =
    dateObject.getMinutes() < 10
      ? `0${dateObject.getMinutes()}`
      : dateObject.getMinutes();

  const timeHrs = `${getHrs} : ${getMins} ${pmOrAm}`;

  const dateOfPost = `${day}/${month}/${year}`;

  let [randomNumber] = useState(Math.floor(Math.random() * 100));
  let [likes, setLikes] = useState(Math.floor(Math.random() * 1000));

  const addLike = () => {
    setLikes(likes + 1);
  };
  return (
    <Styles.PostContent>
      {post.user && (
        <Styles.User>
          <Styles.UserInfo>
            <Styles.Image>
              <img src={user.image && user.image} alt="user-photo" />
            </Styles.Image>
            <Styles.Details>
              <h2>{user.name && user.name}</h2>
              <p>{user.email && user.email}</p>
              <p>{user.time.seconds && timeHrs}</p>
              <p>{user.time.seconds && dateOfPost}</p>
            </Styles.Details>
          </Styles.UserInfo>
          <Styles.ElipseIcon>
            <img src={ellipsis} alt="icon" />
          </Styles.ElipseIcon>
        </Styles.User>
      )}
      <Styles.Article>{description}</Styles.Article>
      <Styles.Video>
        {video !== "" ? <ReactPlayer width={"100%"} url={video} /> : null}
      </Styles.Video>
      <Styles.SharedImage>
        {photo !== "" ? <img src={photo} alt="photo" /> : null}
      </Styles.SharedImage>
      <Styles.LikeAndShare>
        <div className="likes">
          <button>
            <img src={likeThumb} alt="like" />
          </button>
          <button>
            <img src={heart} alt="heart" />
          </button>
          <p>{likes}</p>
        </div>
        <div className="comments-share">
          <p>{comments ? comments : randomNumber + 10} Comments</p>
          <p>{randomNumber + 1} Share</p>
        </div>
      </Styles.LikeAndShare>
      <Styles.ReactionToPost>
        <button onClick={addLike}>
          <img src={like} alt="image" /> <span>Like</span>
        </button>
        <button>
          <img src={comment} alt="image" /> <span>Comment</span>
        </button>
        <button>
          <img src={share} alt="image" /> <span>Share</span>
        </button>
        <button>
          <img src={send} alt="image" /> <span>send</span>
        </button>
      </Styles.ReactionToPost>
    </Styles.PostContent>
  );
};

export default SinglePost;
