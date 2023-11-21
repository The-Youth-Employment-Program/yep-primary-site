import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head"
import { Layout } from "../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <Layout>
        <Head>
            <title>{data.page.title}</title>
        </Head>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {/* <TinaMarkdown content={content} /> */}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.json",
  });

  return {
    props: {
      data,
      query,
      variables
    },
  };
};
