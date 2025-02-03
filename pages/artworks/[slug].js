import Head from "next/head";
import Navbar from "@/components/Navbar";
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
  const jsonData = require("../../data.json"); // Adjust path as needed

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

export default function ArtworkPage({ artwork }) {
  return (
    <div>
      <Head>
        <Head>
          <title>{`${artwork.name} - Underground Gallery`}</title>
        </Head>
      </Head>
      <Navbar />
      <main>
        <h2>{artwork.name}</h2>
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
      </main>
    </div>
  );
}
