// pages/artworks/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";
import styled from "styled-components";

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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return { props: { artworks: jsonData.artworks } };
}

export default function ArtworksPage({ artworks }) {
  return (
    <div>
      <Head>
        <title>Artworks - Underground Gallery</title>
      </Head>
      <Navbar />
      <main>
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
      </main>
    </div>
  );
}
