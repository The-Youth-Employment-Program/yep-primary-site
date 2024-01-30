import Head from "next/head";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
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

//  const branchList = data.branchConnection.edges;

  return (
    <Layout>
        <Head>
           <title>{ data?.page?.pageTitle }</title>
        </Head>
        {data.page.section?.map((part, i) =>{
          switch (part?.__typename) {
            case "PageSectionHeroBanner" : {
              return (<><HeroBanner key={i} {...part} /> 
                <section className="p-6 bg-salmon-green text-gray-100 rounded-b-lg">
                  <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Partners with industry leaders</h2>
                  </div>
                  <div className="container flex flex-wrap justify-center mx-auto text-salmon-light-g2">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="/uploads/team/partners/Bureau-of-Land-Management/Logo_of_the_United_States_Bureau_of_Land_Management.svg" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="/uploads/team/partners/US-Forest-Service/usfs.png" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="/uploads/team/partners/The-Nature-Conservancy/the-nature-conservancy-logos-idAgi8uT3_.jpeg" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                      <img src="/uploads/team/partners/National-Wildlife-Federation/national-wildlife-federation.png" className="w-16 h-16 rounded-full" />
                    </div>
                  </div>
                </section>
                </>
              )
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

        {/* {branchList.map((branch) => (
          <div key={branch.node.id}>
            <Link href={`/contacts/${branch.node._sys.filename}`}>
              <a>{branch.node._sys.filename}</a>
            </Link>
          </div>
        ))} */}

        {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.json",
  });

  // const { data, query, variables } = await client.queries.branchConnection();

  return {
    props: {
      data,
      query,
      variables
    },
  };
};
