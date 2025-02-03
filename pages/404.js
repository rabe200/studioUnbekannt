import Head from "next/head";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Link from "next/link";
const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Navbar />
      <NotFoundContainer>
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Return to Home</Link>
      </NotFoundContainer>
    </div>
  );
}
