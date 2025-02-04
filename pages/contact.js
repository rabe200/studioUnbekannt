import Head from "next/head";
import styled from "styled-components";

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

export default function Contact() {
  return (
    <PageWrapper>
      <Head>
        <title>Contact - STUDIO UNBEKANNT</title>
      </Head>
      <Container>
        <h2>Contact Us</h2>
        <p>E-Mail: amedgd@gmail.com</p>
        <p>Get in touch with us for inquiries, collaborations, and more.</p>
        <p>Phone: +4917695850157</p>
        <p>
          Instagram: @studio.unbekannt
          (https://www.instagram.com/studiounbekannt/).
        </p>
      </Container>
    </PageWrapper>
  );
}
