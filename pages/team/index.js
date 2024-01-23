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
          <section>
          <div className="mb-6 py-10 sm:py-20 lg:py-40 w-full px-5 sm:px-10 md:px-20">
                <div className="mb-4 text-3xl font-semibold">Our Team</div>
                <div className="ml-2">
                  <p className="">YEP is overflowing with great personalities and talent actively engaged in supporting the leadership of tomorrow's communities. We shine by polishing our workforce and ourselves through fun and hard work in the outdoors. We are compelled to forge lasting relationships and memories through work driven experiences and Technical Career Training</p>
                </div>
            </div>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"> {/* xl:grid-flow-col / grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
              { teamList.map((team) => (
                  <div key={team.node.id} className="flex flex-col max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
                      {/* on click img is replaced by p tag */}
                      { isOpen && <img onClick={toggleIsOpen} src={team.node.image} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square cursor-pointer" />}
                      { !isOpen && <p onClick={toggleIsOpen} className="flex-shrink-0 h-64 rounded-lg sm:h-96 cursor-pointer aspect-square">{team.node.blurb}</p>}
                      <div>
                          <h2 className="text-xl font-semibold">{team.node.name}</h2>
                          <span className="block pb-2 text-sm text-salmon-green">{ team.node.position }{ team.node.qualifier }{ team.node.partnerType }</span>
                      </div>
                  </div>
              ))}
            </div>
          </section>
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