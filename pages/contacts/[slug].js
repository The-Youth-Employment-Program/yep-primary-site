import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

export default function Contact(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let branch = data.branchContact;
  let contact = branch.contact;
  let phonelink = `tel:${branch?.contact?.branchPhone}`;
  return (
    <Layout>
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
        <section className="container my-24 mx-auto md:px-6">
          <h1 className="text-2xl font-semibold tracking-wider">Contact our {branch.branch} Branch</h1>
            <div className="grid sm:grid-cols-2 lg:gap-10">
              {branch.blurb && <TinaMarkdown content={branch.blurb} components={{
                                    h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                                    h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                                    p: props => <p className="pt-6" {...props} />,
                                }}
              />}
              <div className="pt-6">
                <p className="">{contact?.address?.streetAddress}</p>
                <p className="pt-2">{contact?.address?.city}, {contact?.address?.state}</p>
                <p className="pt-2">{contact?.address?.zipCode}</p>
                <p className="pt-2">Office: <a href={phonelink}>{contact?.branchPhone}</a></p>
                <div className="pt-2">
                  <a rel="noopener noreferrer" href="mailto:youthemployment14@gmail.com" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-salmon-green dark:text-salmon-light-g2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </section>
      </main>
      <YepFoot />
      {/* {JSON.stringify(data.branchContact, null, 2)} */}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.branchContactConnection();
  const paths = data.branchContactConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.branchContact({
    relativePath: ctx.params.slug + ".json",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
