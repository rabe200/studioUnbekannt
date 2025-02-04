import Head from "next/head";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const paths = jsonData.artworks.map((artwork) => ({
    params: { slug: artwork.slug },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const jsonData = require("../../data.json");
  const artwork = jsonData.artworks.find(
    (artwork) => artwork.slug === params.slug
  );

  if (!artwork) {
    return {
      notFound: true,
    };
  }

  return { props: { artwork } };
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

const ArtworkDetails = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
`;

export default function ArtworkPage({ artwork }) {
  return (
    <PageWrapper>
      <Head>
        <title>{`${artwork.name} - Underground Gallery`}</title>
      </Head>
      <Navbar />
      <Container>
        <h2>{artwork.name}</h2>
        <ArtworkDetails>
          <p>
            <strong>Artist:</strong> {artwork.artist}
          </p>
          <p>
            <strong>Year:</strong> {artwork.year}
          </p>
          <p>
            <strong>Technique:</strong> {artwork.technique}
          </p>
          <p>
            <strong>Price:</strong> {artwork.price}
          </p>
        </ArtworkDetails>
      </Container>
    </PageWrapper>
  );
}
