import styled from "styled-components";
import { Colors } from "../constants/variables";

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbar>
      <Title>Lorem Ipsum</Title>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${Colors.MY_LIME};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Lato-Regular";
  font-size: 20px;

  @media screen and (min-width: 1024px) {
    height: 95px;
    font-family: "Lato-Bold";
    justify-content: flex-start;
    font-size: 24px;
    padding-left: 64px;
    position: relative;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      width: 51.5%;
      height: 100%;
      right: 0;
      top: 0;
      transform: skewX(-30deg);
      transform-origin: left bottom;
      background-color: ${Colors.MY_BLUE};
    }
  }
`;

const Title = styled.h1`
  letter-spacing: -1px;
`;

export default Navbar;
