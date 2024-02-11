import { Layout } from "../../components/Layout";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { Employee } from "../../components/team_objects/employee";
import { Board } from "../../components/team_objects/board";
import { YepFoot } from "../../components/YepFoot";
import { YepHead } from "../../components/YepHead";

export default function Team(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

//    const teamList = data.teamConnection.edges;

    return (
        <Layout>
          <YepHead />
          <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
          <section>
          <div className="mb-6 py-10 sm:py-20 lg:py-40 w-full px-5 sm:px-10 md:px-20">
                <div className="mb-4 text-3xl font-semibold">Our Team</div>
                <div className="ml-2">
                  <p className="">YEP is overflowing with great personalities and talent actively engaged in supporting the leadership of tomorrow's communities. We shine by polishing our workforce and ourselves through fun and hard work in the outdoors. We are compelled to forge lasting relationships and memories through work driven experiences and Technical Career Training</p>
                </div>
            </div>

            <div className=" ml-4 sm:ml-0 mb-4 tracking-wide text-xl font-semibold">YEP Staff:</div>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mb-4"> {/* xl:grid-flow-col / grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
              {data.teamConnection.edges.map((part, i) =>{
                  switch (part?.node.__typename) {
                      case "TeamEmployee" : {
                        return <Employee key={i} {...part.node} />
                      }
                  }
              })}
            </div>
            <Link href="team/employees">
              <a className="flex uppercase font-medium text-md text-salmon-red hover:text-salmon-tan ml-4 sm:ml-0 mb-14">Full Staff
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Link>

            <div className="mb-4 ml-4 sm:ml-0 tracking-wide text-xl font-semibold">YEP Board:</div>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mb-4"> {/* xl:grid-flow-col / grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
              {data.teamConnection.edges.map((part, i) =>{
                  switch (part?.node.__typename) {
                      case "TeamBoard" : {
                        return <Board key={i} {...part.node} />
                      }
                  }
              })}
            </div>
            <Link href="team/board">
              <a className="flex uppercase font-medium text-md text-salmon-red hover:text-salmon-tan ml-4 sm:ml-0 mb-14">Full Board 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Link>

          </section>
          </main>
          <YepFoot />
            {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </Layout>
    )
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