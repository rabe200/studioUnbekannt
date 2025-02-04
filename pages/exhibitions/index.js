import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  const jsonData = require("../../data.json"); // Adjust path as needed
  return { props: { exhibitions: jsonData.exhibitions } };
}

const ExhibitionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExhibitionItem = styled.li`
  padding: 10px;
  font-size: 1.2rem;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ffcc00;
    }
  }
`;

export default function ExhibitionsPage({ exhibitions }) {
  return (
    <>
      <Head>
        <title>Exhibitions - STUDIO UNBEKANNT</title>
      </Head>
      <h2>Exhibitions</h2>
      <ExhibitionList>
        {exhibitions.map((exhibition) => (
          <ExhibitionItem key={exhibition.id}>
            <a href={`/exhibitions/${exhibition.slug}`}>{exhibition.title}</a>
          </ExhibitionItem>
        ))}
      </ExhibitionList>
    </>
  );
}
