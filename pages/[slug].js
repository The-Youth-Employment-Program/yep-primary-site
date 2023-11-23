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
              <title>{ data.page.title }</title>
          </Head>

          {(data?.page?.rows || []).map((row, i) => (
              <div key="i">
              <TinaMarkdown content={row.block} />
              </div>
          ))}

          <pre>{ JSON.stringify(data, null, 2) }</pre>

//      <div data-tina-field={tinaField(data.page, "body")}>
//        <TinaMarkdown content={content} />
//      </div>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params.slug}.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
