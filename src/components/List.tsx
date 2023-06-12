import ListElement from "./ListElement";
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

  return (
    <ul className="list-none flex flex-col gap-[14.5px] mt-[57px] mb-12 lg:mt-32 lg:ml-32 lg:gap-0">
      {listOfEpisodes}
    </ul>
  );
};

export default List;
