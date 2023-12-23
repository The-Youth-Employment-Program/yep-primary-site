import Link from "next/link";
import { PageSectionContactForm } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ContactForm(props: PageSectionContactForm) {
    return(
        <>
        <div className="py-20 lg:py-40 bg-salmon-dark-g2 text-salmon-light-g2 w-full text-center">
            <div className="">
                <p data-tina-field={tinaField(props, "contactActionCall")} className="mb-8 text-2xl font-semibold">{props.contactActionCall || ""}</p>
            </div>
            <div className="inline-block">
                <img src="uploads/invstk.png" className="hidden w-64 md:inline-block mr-8 md:mr-16 lg:mr-32"/>
                <input type="email" name="contact-email" className="p-2 rounded-md bg-salmon-light-g2 text-salmon-dark-g2" placeholder="Your email here!"/>
                <div data-tina-field={tinaField(props, "contactButtonText")} className="inline-block ml-4 px-4 py-2 rounded-lg shadow-lg bg-salmon-red">
                    <a href="/">{props.contactButtonText || ""}</a> {/* send email data to Reach out list? */}
                </div>
                <img src="uploads/bda.png" className="hidden w-64 md:inline-block ml-10 md:ml-20 lg:ml-40"/>
            </div>
            <div className="pt-4">
                <p data-tina-field={tinaField(props,"contactStatement")}>{props.contactStatement || ""}</p>
            </div>
        </div>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}

// Images for the contact-section-{right,left}-iconography.svg should be something fon like a set of bda posts, or a felled tree and a trail... or why not both(one left and the otherright)?