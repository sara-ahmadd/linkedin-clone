import React, { useState } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { createPortal } from "react-dom";
import * as Styles from "./modalStyles";
import { GrClose } from "react-icons/gr";
import userProfile from "/images/user-profile.png";
import photoIcon from "/images/share-image.svg";
import videoIcon from "/images/share-video.svg";
import comment from "/images/share-comment.svg";
import { Timestamp } from "firebase/firestore";
import { postAPI } from "../../redux/actions";

const Modal = ({ modal, handleModalDisplay, user, displayPost }) => {
  const [postDetails, setPostDetails] = useState({
    postText: "",
    photo: false,
    video: false,
    photoLink: "",
    videoLink: "",
  });

  const handleChange = (e) => {
    const image = e.target.files[0];
    setPostDetails({
      ...postDetails,
      photoLink: image,
    });
  };
  const reset = (e) => {
    setPostDetails({
      postText: "",
      photoLink: "",
      videoLink: "",
      photo: false,
      video: false,
    });
    handleModalDisplay(e);
  };

  const handlePostDisplay = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      user: user,
      photo: postDetails.photoLink,
      video: postDetails.videoLink,
      description: postDetails.postText,
      timeStamp: Timestamp.now(), //get the current date & time
    };
    displayPost(payload);
    reset(e);
  };
  const modalBox = (
    <>
      {modal && (
        <Styles.Container>
          <Styles.ModalBody>
            <Styles.Content>
              <Styles.Title>
                <p>Create a post</p>
                <button onClick={reset}>
                  <GrClose />
                </button>
              </Styles.Title>
              <Styles.Text>
                <div>
                  {user ? (
                    <img src={user.photoURL} alt="photo" />
                  ) : (
                    <img src={userProfile} alt="photo" />
                  )}
                  <h2>{user ? user.displayName : "Guest"}</h2>
                </div>
                <div className="postBody">
                  <textarea
                    placeholder="Write your thoughts..."
                    value={postDetails.postText}
                    onChange={(e) =>
                      setPostDetails({
                        ...postDetails,
                        postText: e.target.value,
                      })
                    }
                    autoFocus={true}
                  ></textarea>
                </div>
              </Styles.Text>
              <Styles.ShareMedia>
                {postDetails.photo ? (
                  <>
                    <form>
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                      <label htmlFor="file">Select a photo to share</label>
                    </form>
                    <Styles.UploadedMedia>
                      {postDetails.photoLink && (
                        <img
                          src={URL.createObjectURL(postDetails.photoLink)}
                          alt="shared photo"
                        />
                      )}
                    </Styles.UploadedMedia>
                  </>
                ) : postDetails.video ? (
                  <>
                    <input
                      placeholder="Enter the URL of the video..."
                      value={postDetails.videoLink}
                      onChange={(e) =>
                        setPostDetails({
                          ...postDetails,
                          videoLink: e.target.value,
                        })
                      }
                    />
                    <Styles.UploadedMedia>
                      {postDetails.videoLink && (
                        <ReactPlayer
                          width={"100%"}
                          url={postDetails.videoLink}
                        />
                      )}
                    </Styles.UploadedMedia>
                  </>
                ) : null}
              </Styles.ShareMedia>
            </Styles.Content>
            <Styles.Buttons>
              <Styles.Media>
                <button
                  onClick={() => {
                    setPostDetails({
                      ...postDetails,
                      photo: !postDetails.photo,
                      video: false,
                    });
                  }}
                >
                  <img src={photoIcon} alt="" />
                </button>
                <button
                  onClick={() => {
                    setPostDetails({
                      ...postDetails,
                      photo: false,
                      video: !postDetails.video,
                    });
                  }}
                >
                  <img src={videoIcon} alt="" />
                </button>
                <button>
                  <img src={comment} alt="tag" />
                  <span>Anyone..</span>
                </button>
              </Styles.Media>
              <Styles.PostButton
                disabled={!postDetails.postText ? true : false}
                onClick={(e) => handlePostDisplay(e)}
              >
                Post
              </Styles.PostButton>
            </Styles.Buttons>
          </Styles.ModalBody>
        </Styles.Container>
      )}
    </>
  );
  return createPortal(modalBox, document.getElementById("modal"));
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    displayPost: (payload) => dispatch(postAPI(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
