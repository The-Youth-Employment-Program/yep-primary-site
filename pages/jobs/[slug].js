import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

export default function JobPosition(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  var positionTerm
  if(data.jobs.__typename === "JobsFulltime"){
    positionTerm = "Fulltime"
  } else if (data.jobs.__typename === "JobsSeasonal") {
    positionTerm = "Seasonal"
  } else {
    positionTerm = "unknown position term"
  }

  const sectionStyle = "relative bg-origin-content bg-cover bg-center md:bg-[center_-4rem] bg-no-repeat" //top-left works well... trying to find better option

  return (
    <Layout>
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
        { !data.jobs.active && 
          <div className="grid m-20 h-96 items-center"><article className="text-semibold text-lg tracking-wide text-center align-middle">No active job with name {data.jobs._sys.filename}</article></div>
        }
        {data.jobs.active && 
          <article>
            { data.jobs?.image &&
              <>
                <section className={sectionStyle} style={{backgroundImage: `url('${data.jobs.image}')`}} data-tina-field={tinaField(props, "image")}>  
                  <div className="pt-20 pb-20 sm:pt-30 sm:pb-30 md:pt-40 md:pb-40 lg:pt-96 lg:pb-40">
                    { data.jobs?.link &&
                      <div className="sm:max-w-3xl inline-block md:rounded-2xl p-8 md:ml-6 bg-salmon-dark-g2 bg-opacity-80 text-white font-semibold text-3xl shadow-lg" data-tina-field={tinaField(props, "link")}>
                        We're hiring a { data.jobs.title }!
                          <div className="max-w-2xl mt-8 mb-4">
                              <a className="px-5 py-3 rounded-lg shadow-md bg-salmon-red hover:bg-salmon-tan text-salmon-tan hover:text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(props, "link")} href={data.jobs?.link || "#"} target="_blank">
                                Apply Now
                              </a>
                          </div>
                      </div>
                    }
                  </div>
                </section>
              </>
              
            }
            <section className="mb-6">
              <div className="py-10 sm:py-20 lg:py-40 text-salmon-dark-g2 w-full px-5 sm:px-10 md:px-20 rounded-lg`">
                <div className="relative">
                  <h1 className="text-3xl mb-2 tracking-wider font-bold" data-tina-field={tinaField(props, "title")}>{data.jobs.title}</h1>
                  <span className="absolute uppercase bottom-0 right-0 text-salmon-tan tracking-wide text-sm">{positionTerm}</span>
                </div>
                { data.jobs.branch?.branch &&
                  <span className="uppercase tracking-wide text-xs">Position location: {data.jobs.branch?.branch} branch</span>
                }
                { !data.jobs.branch?.branch &&
                  <span className="uppercase tracking-wide text-xs">Position location: All/Remote</span>
                }
                <h2 className="text-xl font-semibold mt-6">Position Description:</h2>
                <div className="mt-2">
                  <TinaMarkdown content={data.jobs.body}  components={{
                                    h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                                    h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                                    p: props => <p className="pt-2 xl:text-lg" {...props} />,
                                    ul: props => <ul className="mt-2 px-4 xl:text-lg" {...props} />,
                                    li: props => <li className="pt-2 px-2 list-disc" {...props} />,
                                }}/>
                </div>
                { data.jobs?.responsibilities &&
                  <>
                    <h2 className="text-xl font-semibold mt-6">Position Responsibilities:</h2>
                    <div className="mt-2">
                      <TinaMarkdown content={data.jobs.responsibilities}  components={{
                                    h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                                    h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                                    p: props => <p className="pt-2 xl:text-lg" {...props} />,
                                    ul: props => <ul className="mt-2 px-4 xl:text-lg" {...props} />,
                                    li: props => <li className="pt-2 px-2 list-disc" {...props} />,
                                }}/>
                    </div>
                  </>
                }
                <div className="max-w-2xl mt-8 mb-4">
                  <a className="px-5 py-3 rounded-lg shadow-md bg-salmon-red hover:bg-salmon-tan text-salmon-tan hover:text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(props, "link")} href={data.jobs?.link || "#"} target="_blank">
                    Apply Now
                  </a>
                </div>
              </div>
            </section>
          </article>
        }
      </main>
      <YepFoot />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.jobsConnection();
  const paths = data.jobsConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.jobs({
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
