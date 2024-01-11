import { PageSectionTestimonials } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Testimonials(props: PageSectionTestimonials) {
  //for each testimonial in ?props? add div to {testimonial}(like secondaryNav) which is html object for section and container divs...
  //should each contain data-tina-field={tinaField(props, "testimonial")}
  let mainstyle = `grid py-14 px-8 sm:p-10 md:p-20 lg:px-40 items-center content-center ${props.bg_color} ${props.text_color}`
  let secondarystyle = `pl-4 ${props.accent_color}`
    return(
      <>
        <section className={mainstyle}>
          {props.testimonial?.map((testimony,i) => {
            return( // Animate each one to scroll after delay?
              <div key={i} data-tina-field={tinaField(props[i],"testimonial")} className="lg:text-2xl sm:text-center"> {/*TinaField doesn't work */}
                <svg className="w-10 h-10 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                {testimony?.testimonialQuote}
                <div className="grid grid-flow-col justify-center sm:pt-6 text-md lg:text-lg">
                  {testimony?.testimonialAttribution}
                  <span className={secondarystyle}>{ "|" }</span>
                  <span className={secondarystyle}>{testimony?.testimonialRole}</span>
                </div>
              </div>
            )
          })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}