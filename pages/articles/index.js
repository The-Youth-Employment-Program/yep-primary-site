import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

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
      <h1>Articles</h1>
      <div>
        {articlesList.map((article) => (
          <div key={article.node.id}>
            <Link href={`/articles/${article.node._sys.filename}`}>
              <a>{article.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
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
