import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

export default function ArticlePost(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
        { !data.article.published && 
          <div className="grid m-20 h-96 items-center"><article className="text-semibold text-lg tracking-wide text-center align-middle">No Published Article with name {data.article._sys.filename}</article></div>
        }
        {data.article.published && 
          <article>
            <section className="py-96 h-96 bg-cover bg-center" style={{backgroundImage: `url('${data.article.image}')`}} data-tina-field={tinaField(props.article, "image")}></section>
            <h1 className="text-xl tracking-wider font-medium">{data.article.title}</h1>
            <span className="uppercase tracking-wide text-xs">Published by the {data.article.branch.branch} branch</span>
            <div className="mt-6"><TinaMarkdown content={data.article.body} /></div>
          </article>
        }
      </main>
      <YepFoot />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.articleConnection();
  const paths = data.articleConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.article({
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
