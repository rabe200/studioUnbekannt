// pages/artists/index.js
import Head from "next/head";
import Navbar from "../../components/Navbar";

export async function getStaticProps() {
  const jsonData = require("../../data.json"); // Adjust path as needed

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
