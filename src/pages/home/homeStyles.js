import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: strech;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  @media (min-width: 2000px) {
    justify-content: strech;
    width: 60%;
    margin: 0 auto;
  }
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
export { Container, Section, Layout };
