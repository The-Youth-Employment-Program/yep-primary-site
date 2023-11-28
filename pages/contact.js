import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
   const { data } = useTina({
       query: props.query,
       variables: props.variables,
       data: props.data,
    });

   const content = data.contact.body;
   return (
       <Layout>
        <Head><title>Contact Us</title></Head>
        {(data?.branch_contact?.branch || [].map((contact, i) =>
            <div key="i">
            <TinaMarkdown content={contact.address} />
            </div>
        ))}
       <pre>{ JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
}

// Server side render page. To revert to static page, change to getStaticProps
export const getServerSideProps = async() => {
    const { data, query, variables } = await client.queries.page({
        relativePath: "contact.json"
    })
}
