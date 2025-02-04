import Head from "next/head";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

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
  const exhibitions = jsonData.exhibitions.filter(
    (exhibition) => exhibition.slug === artist.exhibition
  );

  if (!artist) {
    return {
      notFound: true,
    };
  }

  return { props: { artist, artworks, exhibitions } };
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

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export default function ArtistPage({ artist, artworks, exhibitions }) {
  return (
    <>
      <Head>
        <title>{`${artist.name} - STUDIO UNBEKANNT`}</title>
      </Head>
      <h2>{artist.name}</h2>
      {artist.profilePicture && (
        <ProfileImage
          src={artist.profilePicture}
          alt={`${artist.name} profile`}
        />
      )}
      <p>{artist.bio}</p>
      <p>{artist.statement}</p>

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

      {/* Render Exhibitions */}
      {exhibitions.length > 0 && (
        <>
          <h3>Exhibitions</h3>
          <ul>
            {exhibitions.map((exhibition) => (
              <li key={exhibition.id}>
                <Link href={`/exhibitions/${exhibition.slug}`}>
                  {exhibition.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
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
