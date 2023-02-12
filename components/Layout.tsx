import Head from "next/head";
export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>THECODER</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
}
