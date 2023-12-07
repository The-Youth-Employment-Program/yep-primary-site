import Link from "next/link";
import { PageSectionTextBox } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function TextBox(props: PageSectionTextBox) {
    return(
        <section>
            <div className="card">
                <div data-tina-field={tinaField(props, "sectionTitle")}>{props.sectionTitle}</div>
                <div data-tina-field={tinaField(props, "sectionText")}>{props.sectionText}</div>
                {/* <TinaMarkdown content={props.sectionText} components={{
                        h1: props => <h1 className="tst" {...props} />,
                        h2: props => <span style="color:red;" {...props} />,
                        p: props => <p className="tst" {...props} />,
                    }}
                /> */}
            </div>
        </section>
    )
}
