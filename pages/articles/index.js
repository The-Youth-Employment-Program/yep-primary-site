import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
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
  return (
    <Layout>
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
      <h1>Youth Employment Program Newsletter and Articles</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4">
        <div className=" sm:col-span-2 md:col-span-4">
          <Link href="articles/newsletters">Past Newsletters</Link>
        </div>
        
{articlesList?.map((article) =>{
          switch (article?.node?.__typename) {
            case "ArticlePost" : {
              return (
                <div className="py-6 shadow-lg rounded-lg" key={article.node.id}>
                  <div className="inline uppercase tracking-wide font-semibold border-2 text-salmon-tan border-salmon-tan p-2">{article.node.branch.branch}</div>
                  <Link href={`/articles/${article.node._sys.filename}`}>
                    <a>{article.node._sys.filename}</a>
                  </Link>
                </div>
              )
            }
          }
        })}

<pre>{ JSON.stringify(articlesList, null, 2) }</pre>

      </div>
      </main>
      <YepFoot />
    </Layout>
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
