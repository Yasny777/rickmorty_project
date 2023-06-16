import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { episodeToFetch } from "./interfaces/interfaces";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query getData {
    episodes(filter: { episode: "S04" }) {
      results {
        name
        id
        air_date
        episode
      }
    }
  }
`;

const App = (): JSX.Element => {
  const [allEpisodes, setAllEpisodes] = useState<episodeToFetch[]>([]);

  const { data } = useQuery(GET_DATA);

  useEffect(() => {
    if (data) {
      setAllEpisodes(data.episodes.results);
    }
  }, [data]);

  return (
    <>
      <Navbar />
      <Main>
        <Header />
        <List allEpisodes={allEpisodes} />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default App;
