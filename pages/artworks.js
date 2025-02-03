// pages/artworks.js
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Artworks() {
  return (
    <div>
      <Head>
        <title>Artworks - Studio Unbekannt</title>
      </Head>
      <Navbar />
      <main>
        <h2>Artworks</h2>
        <p>Browse our collection of exhibited artworks.</p>
      </main>
    </div>
  );
}
