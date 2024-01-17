import { PageSectionTextBox } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function TextBox(props: PageSectionTextBox) {
    let mainstyle = `${props.bg_color} py-10 sm:py-20 lg:py-40 ${props.text_color} w-full px-5 sm:px-10 md:px-20`
    return(
        <>
        <section className="mb-6">
            <div className={mainstyle}>
                <div className="mb-4 text-3xl font-semibold" data-tina-field={tinaField(props, "sectionTitle")}>{props.sectionTitle}</div>
                <div className="ml-2" data-tina-field={tinaField(props, "sectionText")}>
                    <TinaMarkdown content={props.sectionText} components={{
                            h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                            h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                            p: props => <p className="" {...props} />,
                        }}
                    />
                </div>
            </div>
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}

