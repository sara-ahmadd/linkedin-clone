import React from "react";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";
const Home = () => {
  return (
    <Container className="main-content">
      <Section>
        <h3>
          <a href="#">hiring in a hurry? -</a>
        </h3>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSection />
        <MainSection />
        <RightSection />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  p,
  a {
    text-decoration: underline;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default Home;
