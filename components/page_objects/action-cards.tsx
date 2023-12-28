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
        <section className="grid grid-cols-1 lg:grid-cols-3 lg:m-6">
        {props.actionCard?.map((cards,i) => {
            return (
                <div key={i} className="px-5 py-3 mt-4 mx-4 bg-salmon-green text-center">
                    <h2 className="text-2xl font-medium" data-tina-field={tinaField(props[i],"cardTitle")}>{ cards?.cardTitle }</h2>
                    <div className="pb-2" data-tina-field={tinaField(this, "actionText")}> {/* this call doesn't work */}
                        <TinaMarkdown content={cards?.actionText} />
                    </div>
                    <a className="mt-4 px-5 py-3 rounded-lg shadow-md bg-salmon-red hover:bg-salmon-tan text-salmon-tan hover:text-salmon-red tracking-wider uppercase font-semibold text-lg" data-tina-field={tinaField(this, "actionCall")} href={cards?.actionCall?.link || "#"}>{cards?.actionCall?.label}</a> {/* this call doesn't work */}
                </div> 
            )
        })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}