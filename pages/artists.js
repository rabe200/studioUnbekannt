// pages/artists/index.js
import Head from "next/head";
import Navbar from "../../components/Navbar";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return { props: { artists: jsonData.artists } };
}

export default function ArtistsPage({ artists }) {
  return (
    <div>
      <Head>
        <title>Artists - Underground Gallery</title>
      </Head>
      <Navbar />
      <main>
        <h2>Artists</h2>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              <a href={`/artists/${artist.slug}`}>{artist.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
