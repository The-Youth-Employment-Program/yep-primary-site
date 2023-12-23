import Link from "next/link";
import { PageSectionHeroBanner } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function HeroBanner(props: PageSectionHeroBanner) {
  const sectionStyle = "relative bg-origin-content bg-cover bg-[center_-4rem] bg-no-repeat" //top-left works well... trying to find better option
  return(
      <>
        <section className={sectionStyle} style={{backgroundImage: `url('${props.heroImage}')`}} data-tina-field={tinaField(props, "heroImage")}>  
          <div className="pt-20 pb-20 sm:pt-40 sm:pb-40 md:pt-96 md:pb-40">
            <div className="max-w-3xl inline-block rounded-2xl p-8 ml-6 bg-salmon-dark-g2 bg-opacity-80 text-white font-semibold text-3xl shadow-lg" data-tina-field={tinaField(props, "heroText")}>
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

{/* <section>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section> */}
