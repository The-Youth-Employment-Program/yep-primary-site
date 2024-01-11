import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function BranchList(props) {
   const { data } = useTina({
       query: props.query,
       variables: props.variables,
       data: props.data,
    });
    const branchList = data.branchContactConnection.edges;
   return (
       <Layout>
        <Head><title>Contact Us</title></Head>
        {branchList.map((branch) => (
          <div key={branch.node.id}>
            <Link href={`/contacts/${branch.node._sys.filename}`}>
              <a>{branch.node._sys.filename}</a>
            </Link>
          </div>
        ))}
        {/* {(data?.branch_contact?.branch || [].map((contact, i) =>
            <div key="i">
            <TinaMarkdown content={contact.address} />
            </div>
        ))} */}
       <pre>{ JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
}

// Server side render page. To revert to static page, change to getStaticProps
export const getStaticProps = async() => {
    const { data, query, variables } = await client.queries.branchContactConnection();

  return {
    props: {
      data,
      query,
      variables
    },
  };
};
