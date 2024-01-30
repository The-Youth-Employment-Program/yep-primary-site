import { PageSectionTextBox } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function TextBox(props: PageSectionTextBox) {

    let mainstyle = `${props.bg_color} py-10 sm:py-20 lg:py-40 ${props.text_color} w-full px-5 sm:px-10 md:px-20 rounded-lg`
    let textalign = `${props.text_alignment} ml-2 mt-4`

    return(
        <>
        { props.bg_img && 
            <section className="relative bg-origin-content bg-cover bg-center saturate-50 bg-no-repeat rounded-lg" style={{backgroundImage:`url('${props.bg_img}')`}}> {/* p-0 sm:p-10 */}
                <div className="backdrop-blur-3xl px-10 py-5 sm:px-16 sm:py-8 md:px-24 md:py-12 lg:px-32 lg:py-16 text-salmon-light-g2 font-bold text-lg rounded-lg"> {/* sm:px-24 sm:py-12 md:px-32 md:py-16 sm:my-2 sm:mx-5 md:my-5 md:mx-10   w-full sm:w-fit*/}
                    <div className="mb-4 text-3xl font-semibold" data-tina-field={tinaField(props, "sectionTitle")}>{props.sectionTitle}</div>
                    <div className={textalign} data-tina-field={tinaField(props, "sectionText")}>
                        <TinaMarkdown content={props.sectionText} components={{
                                h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                                h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                                p: props => <p className="pt-6" {...props} />,
                            }}
                        />
                    </div>
                </div>
            </section>
        }
        { !props.bg_img &&
            <section className="mb-6">
                <div className={mainstyle}>
                    <div className="mb-4 text-3xl font-semibold" data-tina-field={tinaField(props, "sectionTitle")}>{props.sectionTitle}</div>
                    <div className={textalign} data-tina-field={tinaField(props, "sectionText")}>
                        <TinaMarkdown content={props.sectionText} components={{
                                h1: props => <h1 className="mt-4 text-2xl font-semibold" {...props} />,
                                h2: props => <h2 className="mt-3 text-xl font-medium" {...props} />,
                                p: props => <p className="pt-6" {...props} />,
                            }}
                        />
                    </div>
                </div>
            </section>
        }
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}

