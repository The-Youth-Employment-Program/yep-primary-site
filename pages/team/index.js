import Head from "next/head";
import { Layout } from "../../components/Layout";
import { useCallback, useState } from 'react'
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function Team(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    const [isOpen, toggleIsOpen] = useToggle();
    const teamList = data.teamConnection.edges;

    return (
        <Layout>
            { teamList.map((team) => (
                <div key={team.node.id} className="flex flex-col max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
                    {/* on click img is replaced by p tag */}
                    { isOpen && <img onClick={toggleIsOpen} src={team.node.image} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square cursor-pointer" />}
                    { !isOpen && <p onClick={toggleIsOpen} className="h-64 rounded-lg sm:h-96 cursor-pointer">{team.node.blurb}</p>}
                    <div>
                        <h2 className="text-xl font-semibold">{team.node.name}</h2>
                        <span className="block pb-2 text-sm text-salmon-green">{ team.node.position }{ team.node.qualifier }{ team.node.partnerType }</span>
                    </div>
                </div>
            ))}
            <pre>{ JSON.stringify(props, null, 2) }</pre>
        </Layout>
    )
}

export function useToggle(initialValue = true) {
    const [value,setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value,toggle];
}

export const getStaticProps = async() => {
  const { data, query, variables } = await client.queries.teamConnection();

  return {
    props: {
      data,
      query,
      variables
    },
  };
};