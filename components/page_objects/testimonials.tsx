import Link from "next/link";
import { PageSectionTestimonials } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Testimonials(props: PageSectionTestimonials) {
  //for each testimonial in ?props? add div to {testimonial}(like secondaryNav) which is html object for section and container divs...
  //should each contain data-tina-field={tinaField(props, "testimonial")}
    return(
      <>
        <section className="grid py-14 px-8 sm:p-10 md:p-20 lg:px-40 items-center content-center bg-salmon-green text-salmon-light-g2">  
          {props.testimonial?.map((testimony,i) => {
            return(
              <div key={i} data-tina-field={tinaField(props[i],"testimonial")} className="lg:text-2xl sm:text-center"> {/*TinaField doesn't work */}
                <svg className="w-10 h-10 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                {testimony?.testimonialQuote}
                <div className="sm:pt-6 lg:text-md">
                  {testimony?.testimonialAttribution}  
                  <span className="text-salmon-light-g1 pl-4">{ "|" }</span><span className="text-salmon-light-g1 pl-4">{testimony?.testimonialRole}</span>
                </div>
              </div>
            )
          })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}