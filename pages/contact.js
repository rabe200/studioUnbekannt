// pages/contact.js
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Studio Unbekannt</title>
      </Head>
      <Navbar />
      <main>
        <h2>Contact Us</h2>
        <p>Get in touch with us for inquiries, collaborations, and more.</p>
      </main>
    </div>
  );
}
