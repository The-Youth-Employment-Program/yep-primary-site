import { Layout } from "../../components/Layout";
import { useCallback, useState } from 'react'
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { Board } from "../../components/team_objects/board";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

export default function Team(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    // const [isOpen, toggleIsOpen] = useToggle();
    const teamList = data.teamConnection.edges; // need to add selector where "_typename":"TeamPartner"

    return (
        <Layout>
          <YepHead />
          <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
          <section>
          <div className="mb-6 py-10 sm:py-20 lg:py-40 w-full px-5 sm:px-10 md:px-20">
                <div className="mb-4 text-3xl font-semibold">Board Members</div>
                <div className="ml-2">
                  <p className="">The Youth Employment Program has built up meaningful relationships with a number of organizations we are happy to call our partners. These organizations share our mission or have dedicated themselves to aid us in our mission to develop outstanding leaders for our shared communities and ecosystems.</p>
                </div>
            </div>

            <div className="grid-item grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"> {/* xl:grid-flow-col / grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
              {data.teamConnection.edges.map((part, i) =>{
                  switch (part?.node.__typename) {
                      case "TeamBoard" : {
                        return <Board key={i} {...part.node} />
                          // return (
                          //     <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"> {/* xl:grid-flow-col / grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
                                  
                          //             <div key={part?.node.id} className="flex flex-col max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
                          //                 {/* on click img is replaced by p tag */}
                          //                 { isOpen && <img onClick={toggleIsOpen} src={part?.node.image} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square cursor-pointer" />}
                          //                 { !isOpen && <p onClick={toggleIsOpen} className="flex-shrink-0 h-64 rounded-lg sm:h-96 cursor-pointer aspect-square">{part?.node.blurb}</p>}
                          //                 <div>
                          //                     <h2 className="text-xl font-semibold">{part?.node.name}</h2>
                          //                     <span className="block pb-2 text-sm text-salmon-green">Board Member</span>
                          //                 </div>
                          //             </div>
                                  
                          //     </div>
                          // )
                      }
                  }
              })}
            </div>
            
          </section>
          </main>
          <YepFoot />
            {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </Layout>
    )
}

// export function useToggle(initialValue = true) {
//   const [value,setValue] = useState(initialValue);
//   const toggle = useCallback(() => {
//     setValue(v => !v);
//   }, []);
//   return [value,toggle];
// }

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