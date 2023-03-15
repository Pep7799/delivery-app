import Layout from "../../components/Layout";
import React from "react";
import { client } from "../../../lib/client";

export default function Icecream({ icecream }) {
  console.log(icecream);

  return <Layout>Icecream page </Layout>;
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="icecream" && defined (slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

// //from URL parameter
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const icecream = await client.fetch(
    `*[_type=="icecream" && slug.current == '${slug}'][0]` //extract all icecream with slug equal to the url
  );
  return {
    props: {
      icecream,
    },
  };
}
