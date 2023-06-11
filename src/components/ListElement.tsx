import { FC } from "react";
import { IEpisode } from "../interfaces/interfaces";

const ListElement: FC<IEpisode> = (props) => {
  console.log(props.index);
  if () {
    // tu warunek dla stylow parzystych
  }
  return (
    <li>
      <h2>{props.episode}</h2>
      <div>{props.name}</div>
      <div>{props.air_date}</div>
    </li>
  );
};

export default ListElement;
