import Head from "next/head";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

export async function getStaticProps() {
  const jsonData = require("../../data.json"); // Adjust path as needed
  return { props: { artists: jsonData.artists } };
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.main`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

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
    <PageWrapper>
      <Head>
        <title>Artists - Underground Gallery</title>
      </Head>
      <Navbar />
      <Container>
        <h2>Artists</h2>
        <ArtistList>
          {artists.map((artist) => (
            <ArtistItem key={artist.id}>
              <a href={`/artists/${artist.slug}`}>{artist.name}</a>
            </ArtistItem>
          ))}
        </ArtistList>
      </Container>
    </PageWrapper>
  );
}
