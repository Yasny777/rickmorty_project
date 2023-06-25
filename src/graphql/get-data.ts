import { gql } from "../__generated__";

export const GET_DATA = gql(`
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
`);
