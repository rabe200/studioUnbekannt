// pages/_app.js
import "../globals.css"; // Ensure this path is correct

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
