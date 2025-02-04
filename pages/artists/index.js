import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  const jsonData = require("../../data.json"); // Adjust path as needed
  return { props: { artists: jsonData.artists } };
}

const ArtistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArtistItem = styled.li`
  padding: 10px;
  font-size: 1.2rem;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ffcc00;
    }
  }
`;

export default function ArtistsPage({ artists }) {
  return (
    <>
      <Head>
        <title>Artists - STUDIO UNBEKANNT</title>
      </Head>
      <h2>Artists</h2>
      <ArtistList>
        {artists.map((artist) => (
          <ArtistItem key={artist.id}>
            <a href={`/artists/${artist.slug}`}>{artist.name}</a>
          </ArtistItem>
        ))}
      </ArtistList>
    </>
  );
}
