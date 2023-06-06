import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import axios from "axios";
import { episode } from "./types/episode";

const App = (): JSX.Element => {
  const [episodes, setEpisodes] = useState<episode[]>([]);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    const response = await axios
      .get("https://rickandmortyapi.com/api/episode", {
        params: {
          episode: "S04",
        },
      })
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    const filteredObjects: Array<episode> = response.map((element: episode) => {
      return {
        air_date: element.air_date,
        episode: element.episode,
        id: element.id,
        name: element.name,
      };
    });

    setEpisodes(filteredObjects);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col ">
        <Header />
        <List />
      </div>
    </>
  );
};
export default App;
