import Link from "next/link";
import { PageSectionHeroBanner } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function HeroBanner(props: PageSectionHeroBanner) {
    return(
        <section className="">
            <div className="">
                <div data-tina-field={tinaField(props, "heroText")}>{props.heroText}
                {/* <TinaMarkdown content={props.heroText?} components={{
                        h1: (props) => (
                            <h1 className="tst" { ... props } />
                        ),
                        p: (props) => (
                            <p className="tst" { ... props } />
                        ),
                    }}
                /> */}
                </div>
            </div>
            <div className="">
                <div data-tina-field={tinaField(props,"heroImage")}><img className="" src={props.heroImage || ""} />
                {/* <TinaMarkdown content={props.heroImage?} components={{
                        img: (props) => (
                            <img className="" { ... props } />
                        ),
                    }}
                /> */}
                </div>
            </div>
            <div className="">
                <div data-tina-field={tinaField(props, "heroButton")}><a href={props.heroButton?.link || ""}>{props.heroButton?.label}</a>
                    {/* <TinaMarkdown content={props.heroButton?} components={{
                        a: (props) => (
                            <a href={props.link}>{props.label}</a>
                        )
                        }}
                    /> */}
                </div>
            </div>
        </section>
    )
}
