import Link from "next/link";
import { PageSectionLeftImage } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function LeftImage(props: PageSectionLeftImage) {
    let sectionStyle = `md:grid md:grid-flow-dense md:grid-cols-2 lg:grid-cols-8 md:gap-0 md:my-10 md:rounded-lg md:shadow-md ${props.bg_color} ${props.text_color}`
    return(
        <section className={sectionStyle}>
            <div className="md:col-start-2 md:col-span-2 lg:col-start-4 lg:col-span-5 mt-2 py-4 md:py-8 lg:py-16 xl:py-32 md:px-6 lg:text-xl lg:my-20 lg:mx-4 lg:px-6 text-justify">
                {props.title &&
                    <div className="text-2xl mb-4 lg:text-3xl" data-tina-field={tinaField(props, "title")}>
                        {props.title}
                    </div>
                }
                <div className="min-h-60" data-tina-field={tinaField(props, "mainText")}>
                    {props.mainText}
                </div>
                { props.pageLink &&
                    <a className="flex items-center mt-6 hover:text-salmon-tan text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(this, "pageLink")} href={props?.pageLink?.link || "#"}>{props?.pageLink?.label}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                    </a>
                }
            </div>
            <div className="md:col-start-1 md:col-span-1 lg:col-span-3 rounded-s-xl bg-center bg-cover" style={{backgroundImage: `url('${props.image}')`}} data-tina-field={tinaField(props, "image")}>
                <a className="size-full">
                    <img className="md:hidden min-h-full" src={props.image || ""} />
                </a>
            </div>
        </section>
    )
}

{/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}