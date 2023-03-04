import React from "react";
import styled from "styled-components";
import { white } from "./../../colors";
import defaultProfile from "./../../images/profile-background.svg";
const LeftSection = () => {
  return (
    <Container>
      <TopSection>
        <img src={defaultProfile} alt="background" />
      </TopSection>
      <BottomSection></BottomSection>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: fit-content;
  text-align: center;
  background-color: ${white};
  justify-content: flex-start;
`;
const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  img {
    width: 400px;
    object-fit: cover;
    height: 60px;
    @media (max-width: 767px) {
      width: 200px;
    }
  }
`;
const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export default LeftSection;
