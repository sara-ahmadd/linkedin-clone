import React from "react";
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";
import * as styles from "./homeStyles.js";
import Header from "../../components/Header";
const Home = () => {
  return (
    <styles.Container className="main-content">
      <Header />
      <styles.Section>
        <h3>
          <a href="#">hiring in a hurry? -</a>
        </h3>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </styles.Section>
      <styles.Layout>
        <LeftSection />
        <MainSection />
        <RightSection />
      </styles.Layout>
    </styles.Container>
  );
};

export default Home;
