import { FC } from "react";
import { IEpisode } from "../interfaces/interfaces";
import styled from "styled-components";
import { COLORS } from "../constants/variables";

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
      : `solid 1px ${COLORS.MyListFont}`};

  p {
    font-size: 18px;
  }

  div > p:nth-child(1) {
    color: ${(props) =>
      props.$index % 2 === 0 ? COLORS.MyBlue : COLORS.MyLime};
  }

  div > p:nth-child(2) {
    color: ${COLORS.MyListFont};
    margin-top: 14px;
    font-size: 15px;
  }
`;

export default ListElement;
