import React, { useState } from "react";
import { connect } from "react-redux";
import * as Styles from "./mainSectionStyles.js";
import user from "/images/user-profile.png";
import photo from "/images/photo-icon.svg";
import video from "/images/video-icon.svg";
import event from "/images/event.svg";
import article from "/images/article.svg";
import Modal from "./Modal";
import Posts from "./Posts";

const MainSection = (props) => {
  const [modal, setModal] = useState(false);

  const handleModalDisplay = () => {
    setModal(!modal);
  };
  return (
    <Styles.Container>
      <Styles.PostSection>
        <Styles.Post>
          <Styles.UserImg>
            {props.user ? (
              <img src={props.user.photoURL} alt="user-photo" />
            ) : (
              <img src={user} alt="user-photo" />
            )}
          </Styles.UserImg>
          <button onClick={handleModalDisplay}>Start a post</button>
        </Styles.Post>
        <Styles.Buttons>
          <button>
            <img src={photo} alt="photo" />
            <a href="#">Photo</a>
          </button>
          <button>
            <img src={video} alt="video" />
            <a href="#">Video</a>
          </button>
          <button>
            <img src={event} alt="event" />
            <a href="#">Event</a>
          </button>
          <button>
            <img src={article} alt="article" />
            <a href="#">Article</a>
          </button>
        </Styles.Buttons>
      </Styles.PostSection>
      <Styles.NewsFeed>
        <Posts />
      </Styles.NewsFeed>
      <Modal modal={modal} handleModalDisplay={handleModalDisplay} />
    </Styles.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.postsState.loading,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(MainSection);
