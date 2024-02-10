import { PageSectionFeatures } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Feature(props: PageSectionFeatures) {
    {/* {props?.actionCard?.map((part, i) =>{
          
        })}
    */}
    return(
        <>
        <section className="p-4 md:p-8">
            <div className="container mx-auto space-y-12 [&>*:nth-child(odd)]:lg:flex-row-reverse">
                
                {props.feature?.map((featureItem,i) => {
                    return( // Animate each one to scroll after delay?
                        <div key={i} className="flex flex-col lg:h-80 overflow-hidden rounded-lg shadow-lg lg:flex-row ">
                            <img src={featureItem?.featureImage || ""} alt="" className="object-center" /> {/* h-80 aspect-video  */}
                            <div className="flex flex-col justify-center flex-1 p-6">
                                <span className="text-xs text-salmon-light-g1 uppercase">{featureItem?.featureSubtext}</span>
                                <a href={featureItem?.featureLink || "#"}><h3 className="text-3xl text-salmon-dark-g1 font-bold">{featureItem?.featureName}</h3></a>
                                <p className="my-6 text-salmon-dark-g2">{featureItem?.featureText}</p>
                                <a href={featureItem?.featureLink || "#"} className="flex self-start hover:text-salmon-tan text-salmon-red">More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}