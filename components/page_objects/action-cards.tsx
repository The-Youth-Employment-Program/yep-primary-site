import { PageSectionActionCards, PageSectionActionCardsActionCard } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ActionCards(props: PageSectionActionCards) {
    {/* for card in actionCards { ActionCard(card) } */}
    {/* {props?.actionCard?.map((part, i) =>{
          
        })}
    */}
    return(
        <>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-6 md:my-6">
        {props.actionCard?.map((cards,i) => {
            return (
                <div key={i} className=" py-3 mt-4 rounded-lg shadow-md">
                    <a data-tina-field={tinaField(this, "actionCall")} href={cards?.actionCall?.link || "#"}><img className="pb-6 w-full rounded-xl" src={cards?.actionIcon || ""} data-tina-field={tinaField(props[i],"actionIcon")}/></a>
                    <a data-tina-field={tinaField(this, "actionCall")} href={cards?.actionCall?.link || "#"}><h2 className="px-5 mb-4 text-2xl font-medium text-salmon-dark-g1" data-tina-field={tinaField(props[i],"cardTitle")}>{ cards?.cardTitle }</h2></a>
                    <div className="px-5" data-tina-field={tinaField(this, "actionText")}> {/* this call doesn't work */}
                        <TinaMarkdown content={cards?.actionText} components={{p: props => <p className=" line-clamp-5 text-salmon-dark-g2-" {...props} />}} />
                    </div>
                    <a className="flex items-center mt-4 px-5 hover:text-salmon-tan text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(this, "actionCall")} href={cards?.actionCall?.link || "#"}>{cards?.actionCall?.label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a> {/* this call doesn't work */}
                </div> 
            )
        })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}