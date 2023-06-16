import { FC } from "react";
import { IEpisode } from "../interfaces/interfaces";
import styled from "styled-components";
import { Colors } from "../constants/variables";

const ListElement: FC<IEpisode> = (props) => {
  return (
    <ListPart $index={props.index} $lengthList={props.allEpisodes.length - 1}>
      <p>{props.episode}</p>
      <div>
        <p>{props.name}</p>
        <p>{props.air_date}</p>
      </div>
    </ListPart>
  );
};

const ListPart = styled.li<{ $index: number; $lengthList: number }>`
  width: 100%;
  height: 111px;
  display: flex;
  flex-direction: column;
  font-family: "Lato-Bold";
  gap: 13px;
  border-bottom: ${(props) =>
    props.$index === props.$lengthList
      ? null
      : `solid 1px ${Colors.MY_LIST_FONT}`};

  p {
    font-size: 18px;
  }

  div > p:nth-child(1) {
    color: ${(props) =>
      props.$index % 2 === 0 ? Colors.MY_BLUE : Colors.MY_LIME};
  }

  div > p:nth-child(2) {
    color: ${Colors.MY_LIST_FONT};
    margin-top: 14px;
    font-size: 15px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    border: none;
    padding-left: 80px;
    > p {
      border-right: solid 1px ${Colors.MY_LIST_FONT};
      padding-right: 30px;
    }

    p {
      font-size: 25px;
    }

    div > p:nth-child(2) {
      font-size: 20px;
    }
  }
`;

export default ListElement;
