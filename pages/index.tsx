import Head from "next/head";
import App from "../components/app";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App />
    </>
  );
}
