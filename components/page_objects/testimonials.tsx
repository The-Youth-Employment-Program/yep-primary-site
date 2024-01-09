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
        <section className="h-96 p-5 bg-salmon-green text-salmon-light-g2">  
          {props.testimonial?.map((testimony,i) => {
            return(
              <div key={i} data-tina-field={tinaField(props[i],"testimonial")} className="text-lg"> {/*TinaField doesn't work */}
                {testimony?.testimonialQuote}
                <div className="text-sm text-salmon-light-g1">
                  {testimony?.testimonialAttribution} - 
                  {testimony?.testimonialRole}
                </div>
              </div>
            )
          })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}