import ListElement from "./ListElement";
import { FC } from "react";
import { IEpisodes, episode } from "../interfaces/interfaces";

const List: FC<IEpisodes> = ({ allEpisodes }) => {
  const listOfEpisodes = allEpisodes.map((part: episode, index) => {
    return (
      <ListElement
        key={part.id}
        name={part.name}
        air_date={part.air_date}
        episode={part.episode}
        index={index}
      />
    );
  });

  return <ul>{listOfEpisodes}</ul>;
};

export default List;
