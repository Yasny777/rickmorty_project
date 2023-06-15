import { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/variables";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <p>Lorem ipsum &copy;2021</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Lato-Bold";
  color: ${COLORS.MyFooterFont};
  background-color: ${COLORS.MyFooter};
  margin-top: 19px;

  p {
    font-size: 14px;
    text-transform: uppercase;
    padding: 18px 20px 20px 0px;
  }
`;

export default Footer;
