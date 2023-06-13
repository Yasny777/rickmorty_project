import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import axios from "axios";
import { episodeToFetch } from "./interfaces/interfaces";

const App = (): JSX.Element => {
  const [allEpisodes, setAllEpisodes] = useState<episodeToFetch[]>([]);
  // test
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

    const filteredObjects: Array<episodeToFetch> = response.map(
      (element: episodeToFetch) => {
        return {
          air_date: element.air_date,
          episode: element.episode,
          id: element.id,
          name: element.name,
        };
      }
    );

    setAllEpisodes(filteredObjects);
  };

  // const url = new URL("https://rickandmortyapi.com/api/episode");
  // url.searchParams.append("episode", "S04");

  // const fetchEpisodes = async () => {
  //   const response = await fetch(url, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => data.results)
  //     .catch((err) => console.log(err));

  //   const filteredObjects: Array<episode> = response.map((element: episode) => {
  //     return {
  //       air_date: element.air_date,
  //       episode: element.episode,
  //       id: element.id,
  //       name: element.name,
  //     };
  //   });

  //   setAllEpisodes(filteredObjects);
  // };

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row ">
        <Header />
        <List allEpisodes={allEpisodes} />
      </main>
      <Footer />
    </>
  );
};
export default App;
