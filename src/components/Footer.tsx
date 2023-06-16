import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../constants/variables";

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
  color: ${Colors.MY_FOOTER_FONT};
  background-color: ${Colors.MY_FOOTER};
  margin-top: 19px;

  p {
    font-size: 14px;
    text-transform: uppercase;
    padding: 18px 20px 20px 0px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 80px;
    p {
      font-size: 15px;
    }
  }
`;

export default Footer;
