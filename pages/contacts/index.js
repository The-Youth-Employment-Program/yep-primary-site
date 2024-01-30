import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

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
        <YepHead />
        <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
        <div className="mt-24 text-2xl font-semibold tracking-wider">Contact a Youth Employment Program Branch</div>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {branchList.map((branch) => (
            <div className="container my-24 mx-auto md:px-6" key={branch.node.id}>
              <Link href={`/contacts/${branch.node._sys.filename}`}>
                <a className="text-xl font-medium tracking-wider">{branch.node._sys.filename} {branch.node.contact.address.state} Office</a>
              </Link>
              <div>
                {branch.node.contact.address.streetAddress && <p className="my-2">{branch.node.contact?.address.streetAddress}</p> }
                {branch.node.contact.address.secondaryAddress && <p className="my-2">{branch.node.contact?.address.secondaryAddress}</p> }
                {branch.node.contact.branchPhone && <p className="my-2"><a href={`tel:${branch.node.contact.branchPhone}`}>{branch.node.contact?.branchPhone}</a></p> }
              </div>
              <Link href={`/contacts/${branch.node._sys.filename}`}>
                <a className="flex self-start uppercase tracking tracking-wide font-medium text-lg text-salmon-red hover:text-salmon-tan">More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Link>
            </div>
          ))}
        </section>

        </main>
        <YepFoot />
       {/* <pre>{ JSON.stringify(data, null, 2)}</pre> */}
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
