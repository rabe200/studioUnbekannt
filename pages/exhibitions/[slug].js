import Head from "next/head";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = jsonData.exhibitions.map((exhibition) => ({
    params: { slug: exhibition.slug },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const jsonData = require("../../data.json"); // Adjust path as needed
  const exhibition = jsonData.exhibitions.find(
    (exhibition) => exhibition.slug === params.slug
  );

  if (!exhibition) {
    return {
      notFound: true,
    };
  }

  // Find participating artists
  const artists = jsonData.artists.filter(
    (artist) => artist.exhibition === exhibition.slug
  );

  return { props: { exhibition, artists } };
}

const ArtistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArtistItem = styled.li`
  margin: 5px 0;
`;

export default function ExhibitionPage({ exhibition, artists }) {
  return (
    <>
      <Head>
        <title>{`${exhibition.title} - STUDIO UNBEKANNT`}</title>
      </Head>
      <h2>{exhibition.title}</h2>
      <p>{exhibition.description}</p>
      <p>
        <strong>Vernissage:</strong> {exhibition.vernissage}
      </p>
      <p>
        <strong>Exhibition Duration:</strong> {exhibition.duration}
      </p>
      <p>
        <strong>Location:</strong> {exhibition.location}
      </p>

      {/* List Participating Artists */}
      <h3>Participating Artists</h3>
      <ArtistList>
        {artists.map((artist) => (
          <ArtistItem key={artist.id}>
            <Link href={`/artists/${artist.slug}`}>{artist.name}</Link>
          </ArtistItem>
        ))}
      </ArtistList>
    </>
  );
}
