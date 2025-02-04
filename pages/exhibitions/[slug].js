import Head from "next/head";
import styled from "styled-components";
import fs from "fs";
import path from "path";

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

  return { props: { exhibition } };
}

export default function ExhibitionPage({ exhibition }) {
  return (
    <>
      <Head>
        <title>{`${exhibition.title} - STUDIO UNBEKANNT`}</title>
      </Head>
      <h2>{exhibition.title}</h2>
      <p>{exhibition.description}</p>
      <p>
        <strong>Date:</strong> {exhibition.date}
      </p>
    </>
  );
}
