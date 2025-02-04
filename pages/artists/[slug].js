import Head from "next/head";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = jsonData.artists.map((artist) => ({
    params: { slug: artist.slug },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const jsonData = require("../../data.json");
  const artist = jsonData.artists.find((artist) => artist.slug === params.slug);
  const artworks = jsonData.artworks.filter(
    (artwork) => artwork.artist === artist.name
  );

  if (!artist) {
    return {
      notFound: true,
    };
  }

  return { props: { artist, artworks } };
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

export default function ArtistPage({ artist, artworks }) {
  return (
    <>
      <Head>
        <title>{`${artist.name} - STUDIO UNBEKANNT`}</title>
      </Head>
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>

      {/* Render Instagram handle if available */}
      {artist.instagram && (
        <p>
          <Link
            href={`https://instagram.com/${artist.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.instagram}
          </Link>
        </p>
      )}

      <h3>Artworks</h3>
      <GridContainer>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id}>
            <a href={`/artworks/${artwork.slug}`}>
              <h3>{artwork.name}</h3>
              <p>
                <strong>Year:</strong> {artwork.year}
              </p>
              <p>
                <strong>Technique:</strong> {artwork.technique}
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
