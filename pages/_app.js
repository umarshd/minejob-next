import Footer from "../components/layouts/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
