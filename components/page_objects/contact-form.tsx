import Link from "next/link";
import { PageSectionContactForm } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ContactForm(props: PageSectionContactForm) {
    return(
        <>
        <div className="py-20 lg:py-40 text-salmon-dark-g2 w-full text-center">{/* bg-salmon-dark-g2 text-salmon-light-g2 */}
            <div className="">
                <p data-tina-field={tinaField(props, "contactActionCall")} className="inline-block mb-8 text-2xl font-semibold">{props.contactActionCall || ""}</p>
            </div>
            <div className="inline-block">
                <img src="./uploads/static-assets/Zuni.png" className="hidden lg:w-28 xl:w-32 2xl:w-36 mr-6 xl:mr-14 2xl:mr-20 3xl:ml-28 lg:inline-block"/> {/* mr-4 md:mr-8 lg:mr-16 */}
                <input type="email" name="contact-email" className="p-3 rounded-md bg-salmon-dark-g2 text-salmon-tan" placeholder="Your email here!"/>
                <div data-tina-field={tinaField(props, "contactButtonText")} className="inline-block ml-4 ">
                    <a className="px-5 py-3 font-semibold rounded-lg shadow-lg text-salmon-tan bg-salmon-red hover:bg-salmon-tan hover:text-salmon-red tracking-wider" href="./">{props.contactButtonText || ""}</a> {/* send email data to Reach out list? */}
                </div>
                <img src="uploads/static-assets/Saw.png" className="hidden lg:w-28 xl:w-32 2xl:w-36 ml-6 xl:ml-14 2xl:ml-20 3xl:ml-28 lg:inline-block"/> {/* ml-0 sm:ml-2 md:ml-8 lg:ml-16*/}
            </div>
            <div className="pt-4">
                <p data-tina-field={tinaField(props,"contactStatement")} className="inline-block">{props.contactStatement || ""}</p>
            </div>
        </div>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}

// Images for the contact-section-{right,left}-iconography.svg should be something fon like a set of bda posts, or a felled tree and a trail... or why not both(one left and the otherright)?