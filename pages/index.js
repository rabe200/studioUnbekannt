// pages/about.js
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Studio Unbekannt</title>
      </Head>
      <Navbar />
      <main>
        <h2>About Us</h2>
        <p>
          Welcome to the Underground Gallery, a space for contemporary and
          experimental art.
        </p>
      </main>
    </div>
  );
}
