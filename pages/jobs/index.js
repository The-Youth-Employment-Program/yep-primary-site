import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

export default function JobsList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const jobsList = data.jobsConnection.edges;
  let jobstyle = `{jobs.node.image}`;
  
  return (
    <>
    <Layout>
      <YepHead />
      <main className='text-salmon-dark-g1 my-6 mx-0 sm:mx-10 sm:mb-10 md:mx-16 md:mb-16 lg:mx-24 lg:mb-24'>
        <h1 className="text-2xl font-semibold tracking-wide">Available Positions</h1>
        <p className="mb-4">The Youth Employment Program is an innovative non-profit looking for candidates interested in dedicating themselves to the growth of this meaningful organization for at least two years! We make such a big impact on the landscape by doing conservation projects and by mentoring our employees. All candidates must be physically capable of working and teaching the very physical conservation techniques that are required by their position. We work in sweet wild landscapes! We get to camp out in the field most of the summer. Get in your public land fix. Seasonal positions have the possibility to expand into fulltime position or careers as we grow together.</p>

{/* <div className="grid mx-2 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-8 lg:gap-16"> */}
<div className="grid mx-2 mb-4 sm:grid-cols-1 sm:gap-4 sm:mb-4 md:gap-8 md:mb-8 lg:gap-16">
        
{jobsList?.map((job,i) =>{
  if (job?.node?.active) {
          switch (job?.node?.__typename) {
            case "JobsFulltime" : {
              {/* Todo: if active */}
              return (
                <>
                <div key={i} className="mt-4 pb-6 h-full rounded-lg shadow-md"> {/* grid md:grid-cols-2 pb-3 */}
                    <div className="relative p-0 m-0"> {/* data */}
                      <div className="flex justify-between align-middle py-4">   
                        <a href={`/jobs/${job?.node._sys.filename}` || "#"}>
                          <h2 className="ml-4 mt-2 align-middle text-xl font-medium text-salmon-dark-g1" data-tina-field={tinaField(jobsList[i].node,"title")}>
                            { job.node.title }
                          </h2>
                          <h6 className="ml-4 mt-0 align-middle mb-2 text-sm font-medium text-salmon-dark-g1">
                            Fulltime
                          </h6>
                        </a>
                        <div className="inline-block mr-4 pt-2 align-middle uppercase tracking-wide font-semibold border-0 text-salmon-tan border-salmon-tan">
                            {job.node.branch?.branch}
                          </div>
                      </div>
                      <TinaMarkdown content={job.node.body} className="line-clamp-1" components={{
                                  h1: props => <h1 className="hidden" {...props} />,
                                  h2: props => <h2 className="hidden" {...props} />,
                                  p: props => <p className="line-clamp-1 px-8" {...props} />,
                                  li: props => <li className="hidden" {...props} />,
                                  lic: props => <li className="hidden" {...props} />,
                                  ul: props => <li className="hidden" {...props} />,
                                  ol: props => <li className="hidden" {...props} />,
                              }} />
                      <a className="absolute right-0 flex items-center mt-4 mb-4 px-5 hover:text-salmon-tan text-salmon-red tracking-wider uppercase font-semibold text-lg" href={`/jobs/${job.node._sys.filename}` ||`#`}>Details
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                      </a> {/* this call doesn't work */}
                      <div className="mb-4"></div>
                    </div>
                </div>
                </>
              )
            }
            case "JobsSeasonal" : {
              {/* Todo: if active */}
              return (
                <>
                <div key={i} className="mt-4 pb-6 h-full rounded-lg shadow-md"> {/* grid md:grid-cols-2 pb-3 */}
                    <div className="relative p-0 m-0"> {/* data */}
                      <div className="flex justify-between align-middle py-4">   
                        <a href={`/jobs/${job?.node._sys.filename}` || "#"}>
                          <h2 className="ml-4 mt-2 align-middle text-xl font-medium text-salmon-dark-g1" data-tina-field={tinaField(jobsList[i].node,"title")}>
                            { job.node.title }
                          </h2>
                          <h6 className="ml-4 mt-0 align-middle mb-2 text-sm font-medium text-salmon-dark-g1">
                            Seasonal
                          </h6>
                        </a>
                        <div className="inline-block mr-4 pt-2 align-middle uppercase tracking-wide font-semibold border-0 text-salmon-tan border-salmon-tan">
                            {job.node.branch?.branch}
                          </div>
                      </div>
                      <TinaMarkdown content={job.node.body} className="line-clamp-1" components={{
                                  h1: props => <h1 className="hidden" {...props} />,
                                  h2: props => <h2 className="hidden" {...props} />,
                                  p: props => <p className="line-clamp-1 px-8" {...props} />,
                                  li: props => <li className="hidden" {...props} />,
                                  lic: props => <li className="hidden" {...props} />,
                                  ul: props => <li className="hidden" {...props} />,
                                  ol: props => <li className="hidden" {...props} />,
                              }} />
                      <a className="absolute right-0 flex items-center mt-4 mb-4 px-5 hover:text-salmon-tan text-salmon-red tracking-wider uppercase font-semibold text-lg" href={`/jobs/${job.node._sys.filename}` ||`#`}>Details
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                      </a> {/* this call doesn't work */}
                      <div className="mb-4"></div>
                    </div>
                </div>
                </>
              )
            }
          }}
        })}

      </div>
      </main>
      <YepFoot />
       <pre>{ JSON.stringify(jobsList, null, 2) }</pre> 
    </Layout>
  </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.jobsConnection(); // work on {filter:{published:{eq:true}}}

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
