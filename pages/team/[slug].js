
import { useCallback, useState } from 'react'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";


export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Layout>
      <Head>
        <title>{data.team.name}</title>
      </Head>
      <div className="flex flex-col max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
          {/* on click img is replaced by p tag */}
          { isOpen && <img onClick={toggleIsOpen} src={data.team.image} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square cursor-pointer" />}
          { !isOpen && <p onClick={toggleIsOpen} className="h-64 rounded-lg sm:h-96 cursor-pointer">{data.team.blurb}</p>}
          <div>
              <h2 className="text-xl font-semibold">{data.team.name}</h2>
              <span className="block pb-2 text-sm text-salmon-green">{ data.team.position }{ data.team.qualifier }{ data.team.partnerType }</span>
          </div>
      </div>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
    </Layout>
  );
}

export function useToggle(initialValue = true) {
  const [value,setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value,toggle];
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.team({
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