import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import { Hero } from "@/components/Hero";
import css from "../styles/Home.module.css";
import Services from "../components/Services";
import icecream from "../../sanity/schemas/icecream";
import { client } from "../../lib/client";
import { Menu } from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ icecreams }) {
  return (
    <Layout>
      <div className={css.container}>
        <Hero />
        <Services />
        <Menu icecreams={icecreams} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "icecream"]';
  const icecreams = await client.fetch(query);
  return {
    props: {
      icecreams,
    },
  };
};
