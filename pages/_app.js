import Navbar from "@/components/Navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #111;
    color: white;
    text-align: center; /* Ensures text is centered globally */

  }

  a {
    color: inherit;
    text-decoration: none;
  }
  nav {
    display: flex;
    justify-content: center; /* Centers navbar links */
    align-items: center;

  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    text-align: center; /* Ensures all headers and paragraphs are centered */
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Container = styled.main`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </PageWrapper>
  );
}

export default MyApp;
