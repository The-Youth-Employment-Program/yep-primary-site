import Link from "next/link";
import { PageSectionContactForm } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ContactForm(props: PageSectionContactForm) {
    return(
        <div className="w-full content-center">
            <div className="">
                <div data-tina-field={tinaField(props, "contactActionCall")}>{props.contactActionCall || ""}</div>
            </div>
            <div className="">
                <div data-tina-field={tinaField(props,"contactStatement")}>{props.contactStatement || ""}</div>
            </div>
            <div className="">
                <div data-tina-field={tinaField(props, "contactButtonText")}><a href="/">{props.contactButtonText || ""}</a> {/* send email data to Reach out list? */}
                </div>
            </div>
        </div>
    )
}
