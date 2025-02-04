import Head from "next/head";
import Navbar from "@/components/Navbar";
import styled from "styled-components";

const Container = styled.main`
  padding: 20px;
  text-align: center;
`;

const Section = styled.div`
  padding: 15px 0;
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Studio Unbekannt</title>
      </Head>
      <Navbar />
      <Container>
        <h2>STUDIO UNBEKANNT</h2>
        <Section>
          was founded in 2024 by Ame Dgd Art. “Studio Unbekannt” was created as
          an approachable way for Berlin artists to collectively work and
          exhibit.
        </Section>
        <Section>
          In the beginning, the project was planned with the intention to create
          a shared studio and exhibition space. As such, artspaces are not
          easily accessible in Berlin as we have it now, the first projects to
          be realised were group shows.
        </Section>
        <Section>
          As a first project in August 2024, the group show “What We See” has
          been hosted at ErsterErster Projektraum. It had great success with
          most showcasing visual artists selling their works. The Vernissage
          hosted the following musicians: guitarist Bernar Gomma,
          Singer/Songwriter Warrobit, and DJ Shakthi.
        </Section>
        <Section>
          The second group show “Come Grinch With Us” in December 2024 included
          several members of the art collective “Berlin WorkStadt”, which is an
          atelier space for most of the 16 participants. Additionally, some of
          the participants from the first group show decided to be part again
          for the second run. For the Vernissage, DJ Romsino made us dance after
          Coleccion Emma showcased a special grinch clothing collection in her
          first fashion show.
        </Section>
        <Section>
          Now, for the start of spring, we can announce and invite you to our
          third exhibition under the theme “Knospen und Beton,” showcasing
          freshly cut works of new and old “Studio Unbekannt” members.
        </Section>
      </Container>
    </div>
  );
}
