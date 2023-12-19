import Link from "next/link";
import { PageSectionHeroBanner } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function HeroBanner(props: PageSectionHeroBanner) {
  const sectionStyle = "h-96 pt-10 relative  bg-origin-content bg-cover bg-center bg-no-repeat"
  return(
      <>
        <section className={sectionStyle} style={{backgroundImage: `url('${props.heroImage}')`}} data-tina-field={tinaField(props, "heroImage")}>  
          <div className="inline-block p-8 pb-24 ml-6 bg-salmon-dark-g2 bg-opacity-40 text-white font-semibold text-3xl" data-tina-field={tinaField(props, "heroText")}>
            {props.heroText}
          </div>

          <div className=" -mt-16 ml-14" data-tina-field={tinaField(props, "heroButton")}>
            <a className="px-5 py-3 rounded-lg shadow-md bg-salmon-red hover:bg-salmon-tan text-salmon-tan hover:text-salmon-red tracking-wider uppercase font-semibold text-lg" href={props.heroButton?.link || "#"}>
              {props.heroButton?.label} 
            </a>
          </div>
        </section>
        <pre>{ JSON.stringify(props, null, 2) }</pre>
        </>
    )
}