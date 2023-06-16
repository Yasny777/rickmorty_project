import styled from "styled-components";
import mainLogo from "../img/image.png";
import { Colors } from "../constants/variables";

const Header = (): JSX.Element => {
  return (
    <Container>
      <Title>
        <p>
          Episodes of the <strong>4th</strong>
        </p>
        <p>season of the series</p>
        <Strong $textColor={Colors.MY_BLUE}>Rick and Morty</Strong>
      </Title>

      <Image src={mainLogo} alt="Rick and Morty"></Image>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 85%;
  max-width: fit-content;
  margin-top: 43px;
  margin-right: 3px;
`;

const Title = styled.h2`
  font-family: "Lato-Regular";
  font-size: 33px;
  line-height: 42px;
  padding-top: 43px;
  padding-right: 53px;

  strong {
    font-family: "Lato-Bold";
  }

  @media screen and (min-width: 1024px) {
    font-size: 60px;
    line-height: normal;
    margin-top: 80px;
    letter-spacing: -2px;
  }
`;

const Strong = styled.strong<{ $textColor?: string }>`
  font-family: "Lato-Bold";
  font-size: 38px;
  color: ${(props) => props.$textColor};

  @media screen and (min-width: 1024px) {
    font-size: 70px;
  }
`;

export default Header;
