import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { YepFoot } from "../components/YepFoot";
import { YepHead } from "../components/YepHead";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

import { HeroBanner } from "../components/page_objects/hero-banner";
import { Feature } from "../components/page_objects/feature";
import { ActionCards } from "../components/page_objects/action-cards"
import { TextBox } from "../components/page_objects/titled-text";
import { ContactForm } from "../components/page_objects/contact-form";
import { SecondNav } from "../components/page_objects/secondary-nav";
import { Testimonials } from "../components/page_objects/testimonials";
import { LeftImage } from "../components/page_objects/left-image";
import { RightImage } from "../components/page_objects/right-image";
import { Adornment } from "../components/page_objects/adornment";
import { Timeline } from "../components/page_objects/timeline";
import { StripeCards } from "../components/page_objects/stripe-cards";


export default function Home(props) {
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
      <Head>
        <title>{ data.page.pageTitle }</title>
      </Head>
      {data.page.section?.map((part, i) =>{
          switch (part?.__typename) {
            case "PageSectionHeroBanner" : {
              return <HeroBanner key={i} {...part} />
            }
            case "PageSectionFeatures" : {
              return <Feature key={i} {...part} />
            }
            case "PageSectionActionCards" : {
              return <ActionCards key={i} {...part} />
            }
            case "PageSectionContactForm" : {
              return <ContactForm key={i} {...part} />
            }
            case "PageSectionTextBox" : {
              return <TextBox key={i} {...part} />
            }
            case "PageSectionSecondaryNav" : {
              return <SecondNav key={i} {...part} />
            }
            case "PageSectionTestimonials" : {
              return <Testimonials key={i} {...part} />
            }
            case "PageSectionLeftImage" : {
              return <LeftImage key={i} {...part} />
            }
            case "PageSectionRightImage" : {
              return <RightImage key={i} {...part} />
            }
            case "PageSectionAdornment" : {
              return <Adornment key={i} {...part} />
            }
            case "PageSectionTimeline" : {
              return <Timeline key={i} {...part} />
            }
            case "PageSectionStripeCards" : {
              return <StripeCards key={i} {...part} />
            }
          }
        })}
        </main>
        <YepFoot />
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params.slug}.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
