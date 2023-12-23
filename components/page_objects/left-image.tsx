import Link from "next/link";
import { PageSectionLeftImage } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function LeftImage(props: PageSectionLeftImage) {
    return(
      <>
        <section className="">  
            <div className="">
                <div className="" data-tina-field={tinaField(props, "title")}>
                    {props.title}
                </div>
                <div className="" data-tina-field={tinaField(props, "image")}>
                    <img src={props.image || ""} />
                </div>
                <div className="" data-tina-field={tinaField(props, "mainText")}>
                    {props.mainText}
                </div>
            </div>
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}