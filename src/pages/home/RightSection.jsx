import React from "react";
import styled from "styled-components";
import banner from "/images/banner-image.jpg";
import * as colors from "./../../colors";
import feedIcon from "/images/feed-icon.svg";
import hash from "/images/hash.svg";
import right from "/images/right-icon.svg";

const RightSection = () => {
  return (
    <Container>
      <HashSection>
        <Title>
          <p>Add to your feed</p>
          <span>
            <img src={feedIcon} alt="img" />
          </span>
        </Title>
        <HashBox>
          <div>
            <img src={hash} alt="img" />
            <div>
              <p>#LinkedIn</p>
              <button>Follow</button>
            </div>
          </div>
          <div>
            <img src={hash} alt="img" />
            <div>
              <p>#Video</p>
              <button>Follow</button>
            </div>
          </div>
        </HashBox>
        <ViewRecommends>
          <a>View all recommendations</a>
          <img src={right} alt="img" />
        </ViewRecommends>
      </HashSection>
      <AdsSection>
        <img src={banner} alt="img" />
      </AdsSection>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 300px;
  background: none !important;
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const HashSection = styled(Container)`
  width: 100%;
  background: ${colors.white}!important;
  border-radius: 10px;
  padding: 5px 10px;
`;
const AdsSection = styled.div`
  width: 100%;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    padding: 5px;
    font-size: 15px;
    margin: 0;
    font-weight: bold;
  }
`;
const HashBox = styled.div`
  width: 100%;
  padding: 10px;
  div {
    display: flex;
    justify-content: flex-start;
    gap: 7px;
    align-items: center;
    padding-bottom: 10px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      p {
        padding: 0 0 0 10px;
        margin: 0;
        width: 100px;
        text-align: left;
      }
      button {
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: ${colors.paleBlueBackground};
        width: 100px;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
`;
const ViewRecommends = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 7px;
  align-items: baseline;
`;

export default RightSection;
