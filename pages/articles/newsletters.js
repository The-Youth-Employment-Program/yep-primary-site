import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useCallback, useState } from 'react'
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { Board } from "../../components/team_objects/board";
import { YepHead } from "../../components/YepHead";
import { YepFoot } from "../../components/YepFoot";

export default function Newsletters(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    const newsletterList = data.articleConnection.edges;

    return (
        <Layout>
      <YepHead />
      <main className='mx-0 sm:mx-10 md:mx-20 lg:mx-24 2xl:mx-52'>
      <h1>Youth Employment Program Newsletter and Articles</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4">
        <div className=" sm:col-span-2 md:col-span-4">
          <div></div>
        </div>
        
{newsletterList?.map((newsletter) =>{
          switch (newsletter?.node?.__typename) {
            case "ArticleNewsletter" : {
              return (
                <div className="py-6 shadow-lg rounded-lg" key={newsletter.node.id}>
                  <div className="inline uppercase tracking-wide font-semibold border-2 text-salmon-tan border-salmon-tan p-2">{newsletter.node.date}</div>
                  <Link href={`/articles/${newsletter.node._sys.filename}`}>
                    <a>{newsletter.node._sys.filename}</a>
                  </Link>
                </div>
              )
            }
          }
        })}

<pre>{ JSON.stringify(newsletterList, null, 2) }</pre>

      </div>
      </main>
      <YepFoot />
    </Layout>
    )
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