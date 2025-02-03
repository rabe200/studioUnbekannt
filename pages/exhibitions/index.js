// pages/exhibitions/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return { props: { exhibitions: jsonData.exhibitions } };
}

export default function ExhibitionsPage({ exhibitions }) {
  return (
    <div>
      <Head>
        <title>Exhibitions - Underground Gallery</title>
      </Head>
      <Navbar />
      <main>
        <h2>Exhibitions</h2>
        <ul>
          {exhibitions.map((exhibition) => (
            <li key={exhibition.id}>
              <a href={`/exhibitions/${exhibition.slug}`}>{exhibition.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
