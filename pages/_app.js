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
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

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
