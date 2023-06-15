import ListElement from "./ListElement";
import styled from "styled-components";
import { FC } from "react";
import { IEpisodes, episodeToFetch } from "../interfaces/interfaces";

const List: FC<IEpisodes> = ({ allEpisodes }) => {
  const listOfEpisodes = allEpisodes.map(
    (part: episodeToFetch, index, allEpisodes) => {
      return (
        <ListElement
          key={part.id}
          name={part.name}
          air_date={part.air_date}
          episode={part.episode}
          index={index}
          allEpisodes={allEpisodes}
        />
      );
    }
  );

  return <StyledList>{listOfEpisodes}</StyledList>;
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  margin-top: 60px;
  gap: 20px;
`;

export default List;
