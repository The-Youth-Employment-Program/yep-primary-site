// import Link from "next/link";
import { PageSectionHeroBanner } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function HeroBanner(props: PageSectionHeroBanner) {
  const sectionStyle = "relative bg-origin-content bg-cover bg-center md:bg-[center_-4rem] bg-no-repeat" //top-left works well... trying to find better option
  return(
      <>
        <section className={sectionStyle} style={{backgroundImage: `url('${props.heroImage}')`}} data-tina-field={tinaField(props, "heroImage")}>  
          <div className="pt-20 pb-20 sm:pt-30 sm:pb-30 md:pt-40 md:pb-40 lg:pt-96 lg:pb-40">
            <div className="sm:max-w-3xl inline-block md:rounded-2xl p-8 md:ml-6 bg-salmon-dark-g2 bg-opacity-80 text-white font-semibold text-3xl shadow-lg" data-tina-field={tinaField(props, "heroText")}>
              {props.heroText}
              <div className="max-w-2xl mt-8 mb-4">
                <a className="px-5 py-3 rounded-lg shadow-md bg-salmon-red hover:bg-salmon-tan text-salmon-tan hover:text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(props, "heroButton")} href={props.heroButton?.link || "#"}>
                  {props.heroButton?.label} 
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}

{/* TODO fix whitespace on resize between sm and md */}
