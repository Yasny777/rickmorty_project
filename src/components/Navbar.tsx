import styled from "styled-components";
import { COLORS } from "../constants/variables";

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
  background-color: ${COLORS.MyLime};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Lato-Regular";
  font-size: 20px;
`;

const Title = styled.h1`
  letter-spacing: -1px;
`;

export default Navbar;
