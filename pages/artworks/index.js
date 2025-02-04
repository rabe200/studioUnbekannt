import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  const jsonData = require("../../data.json"); // Adjust path as needed
  return { props: { artworks: jsonData.artworks } };
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ArtworkCard = styled.div`
  background: #222;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
`;

export default function ArtworksPage({ artworks }) {
  return (
    <>
      <Head>
        <title>Artworks - STUDIO UNBEKANNT</title>
      </Head>

      <h2>Artworks</h2>
      <GridContainer>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id}>
            <a href={`/artworks/${artwork.slug}`}>
              <h3>{artwork.name}</h3>
              <p>
                <strong>Artist:</strong> {artwork.artist}
              </p>
              <p>
                <strong>Year:</strong> {artwork.year}
              </p>
              <p>
                <strong>Price:</strong> {artwork.price}
              </p>
            </a>
          </ArtworkCard>
        ))}
      </GridContainer>
    </>
  );
}
