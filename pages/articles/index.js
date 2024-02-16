import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

export default function ArticleList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const articlesList = data.articleConnection.edges;
  let articlestyle = `{article.node.image}`;
  
  return (
    <>
    <Layout>
      <YepHead />
      <main className='text-salmon-dark-g1 mt-6 mx-0 sm:mx-10 md:mx-16 lg:mx-24'>
      {/* <section className="mb-8">
        <h1 className="text-2xl font-semibold tracking-wide">Youth Employment Program Newsletter and Articles</h1>
        
        <div class="my-6 flex flex-wrap h-full shadow-lg">
          <div class="mb-6 w-full shrink-0 grow-0 basis-auto pr-6 md:mb-0 md:w-3/12">
            <div class="relative overflow-hidden rounded-l-lg bg-cover bg-no-repeat"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={data.articleConnection.edges} class="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
          <div class="relative mb-6 mr-auto w-full shrink-0 grow-0 basis-auto py-2 px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 class="my-3 text-xl font-medium">Welcome to YEP</h5>
            <div
              class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
              Newsletter
            </div>
            {/* <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a></small>
            </p> */}
            {/*
            <p class="mt-6 text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>

            <div className="absolute bottom-0 right-0 mt-4">
              <Link href="articles/newsletters">
                <a className="flex uppercase font-medium text-md text-salmon-red hover:text-salmon-tan">Past Newsletters
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>

        </div>
        
      </section> */}

      <div className="grid mx-2 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-8 lg:gap-16">
        
{articlesList?.map((article,i) =>{
          switch (article?.node?.__typename) {
            case "ArticlePost" : {
              return (
                <>
                <div key={i} className="pb-3 mt-4 rounded-lg shadow-md">
                    <a className="" data-tina-field={tinaField(this, "actionCall")} href={`/articles/${article?.node._sys.filename}` || "#"}>
                        <div className="h-80 saturate-75 w-full bg-origin-border bg-cover bg-center rounded-t-xl" style={{backgroundImage: `url('${article.node.image}')`}} data-tina-field={tinaField(articlesList[i].node,"image")}></div>
                    </a>
                    <div className="flex justify-between align-middle py-4">   
                      <a href={`/articles/${article?.node._sys.filename}` || "#"}>
                        <h2 className="ml-4 my-2 align-middle mb-4 text-xl font-medium text-salmon-dark-g1" data-tina-field={tinaField(articlesList[i].node,"title")}>
                          { article.node.title }
                        </h2>
                      </a>
                      <div className="inline-block mr-4 p-2 align-middle uppercase tracking-wide font-semibold border-0 text-salmon-tan border-salmon-tan">
                          {article.node.branch.branch}
                        </div>
                    </div>

                    <TinaMarkdown content={article.node.body} components={{
                                h1: props => <h1 className="hidden" {...props} />,
                                h2: props => <h2 className="hidden" {...props} />,
                                p: props => <p className="line-clamp-3 px-8" {...props} />,
                            }} />
                    <a className="flex items-center mt-4 px-5 hover:text-salmon-tan text-salmon-red tracking-wider uppercase font-semibold text-lg" href={`/articles/${article.node._sys.filename}` ||`#`}>Read
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a> {/* this call doesn't work */}
                </div>

                </>
              )
            }
          }
        })}

      </div>
      </main>
      <YepFoot />
      {/* <pre>{ JSON.stringify(articlesList, null, 2) }</pre> */}
    </Layout>
  </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.articleConnection(); // work on {filter:{published:{eq:true}}}

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
