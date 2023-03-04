import styled from "styled-components";
import {
  blue,
  blueBorder,
  greyColor,
  paleBlueBackground,
  paleGreyColor,
} from "../../colors";

export const Container = styled.div`
  margin: 10px auto;
  height: fit-content;
  width: 90%;
  @media (min-width: 2100px) {
    width: 70%;
  }
`;

export const Navbar = styled.nav`
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  height: 100%;
  width: 100px;
  cursor: pointer;
`;
export const Links = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  height: 100%;
`;
export const Join = styled.a`
  color: ${greyColor};
  cursor: pointer;
  transition: 0.3s linear;
  padding: 10px;
  &:hover {
    background-color: ${paleGreyColor};
  }
`;
export const SignUp = styled.a`
  padding: 10px 15px;
  border: 1px solid ${blueBorder};
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background-color: ${paleBlueBackground};
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
width : 45%
height : 100%;
& > h1 {
  font-size: 50px;
  line-height: 60px;
  color: ${blue};
}
 @media (max-width: 768px) {
  width : 100%;
    & > a {
    width : 80%;
    
    }
  }
`;

export const GoogleSignIn = styled.a`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 40px;
  padding: 5px 10px;
  border: 1px solid ${blue};
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background-color: ${paleBlueBackground};
  }
  & > i {
    font-size: 30px;
  }
  & > p {
    font-size: 20px;
    color: ${blue};
  }
`;

export const RightSection = styled.div`
  height: 100%;
  width: 600px;
  & > img {
    filter: drop-shadow(0 0 0.5rem ${greyColor});
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
