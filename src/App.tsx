import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { episodeToFetch } from "./interfaces/interfaces";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "./graphql/get-data";

const App = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error, check console</p>;
  }

  const dataFetched = data?.episodes?.results as episodeToFetch[];

  return (
    <>
      <Navbar />
      <Main>
        <Header />
        <List allEpisodes={dataFetched} />
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
