import { PageSectionTextBox } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function TextBox(props: PageSectionTextBox) {
    return(
        <>
        <section>
            <div className="py-20 lg:py-40 bg-salmon-dark-g2 text-salmon-light-g2 w-full text-center">
                <div data-tina-field={tinaField(props, "sectionTitle")}>{props.sectionTitle}</div>
                <div data-tina-field={tinaField(props, "sectionText")}>
                    <TinaMarkdown content={props.sectionText} components={{
                            h1: props => <h1 className="tst" {...props} />,
                            h2: props => <span style={{color:'red'}} {...props} />,
                            p: props => <p className="tst" {...props} />,
                        }}
                    />
                </div>
            </div>
        </section>
        <pre>{ JSON.stringify(props, null, 2) }</pre>
        </>
    )
}

