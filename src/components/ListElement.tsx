import { FC } from "react";
import { IEpisode } from "../interfaces/interfaces";

const ListElement: FC<IEpisode> = (props) => {
  let styleForP: string =
    "text-[18px] font-[Lato-Bold] mt-[8px] lg:mt-0 lg:text-2xl ";
  if (props.index % 2 === 0) {
    styleForP += "text-myBlue";
  } else {
    styleForP += "text-myLime";
  }

  return (
    <li className="w-full px-[25px] flex flex-col after:border-solid after:border-b after:border-myListFont after:last:border-b-0 lg:flex-row ">
      <p className="text-[18px] font-[Lato-Bold] lg:text-[26px] lg:border-solid lg:border-r lg:border-myListFont lg:pr-8 ">
        {props.episode}
      </p>
      <div className="lg:pl-8 lg:text-4xl lg:pb-5">
        <p className={styleForP}>{props.name}</p>
        <p className="text-[15px] text-myListFont font-[Lato-Bold] mb-[19px] mt-[9px] lg:text-xl">
          {props.air_date}
        </p>
      </div>
    </li>
  );
};

export default ListElement;
