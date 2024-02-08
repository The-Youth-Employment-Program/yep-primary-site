import { PageSectionTimeline } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Timeline(props: PageSectionTimeline) {
  //for each testimonial in ?props? add div to {testimonial}(like secondaryNav) which is html object for section and container divs...
  //should each contain data-tina-field={tinaField(props, "testimonial")}
  let eventstyle = `flex flex-col sm:relative sm:before:absolute sm:before:top-0 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ${props.accent_color}`
  let sidebarstyle = `text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ${props?.accent_color}`
    return(
      <>
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className={sidebarstyle}>
                <h3 className="text-3xl font-semibold">{props.timelineTitle}</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">{props.timelineDescription}</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-salmon-tan">
                
                {props.timelineEvent?.map((event,i) =>{
                  let date = ""
                  if(event?.eventDate) { date = new Date(event?.eventDate).toDateString()}
                  return(
                    <div className={eventstyle}>
                      <h3 className="text-xl font-semibold tracki">{event?.eventTitle}</h3>
                      <time className="text-xs tracki uppercase dark:text-gray-400">{date}</time>
                      <p className="mt-3">{event?.eventText}</p>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}