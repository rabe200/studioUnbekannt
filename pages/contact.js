import Head from "next/head";
import Navbar from "@/components/Navbar";
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
        <title>Contact - Studio Unbekannt</title>
      </Head>
      <Navbar />
      <Container>
        <h2>Contact Us</h2>
        <p>Get in touch with us for inquiries, collaborations, and more.</p>
      </Container>
    </PageWrapper>
  );
}
