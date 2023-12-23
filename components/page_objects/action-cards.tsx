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
        {props.actionCard?.map((cards,i) => {
            return (
                <section key={i} className="p-2">
                        <div className="px-5 py-3 bg-salmon-tan">
                            <div data-tina-field={tinaField(this,"cardTitle")}> {/* this call doesn't work */}
                                { cards?.cardTitle }
                            </div>
                            <article data-tina-field={tinaField(this, "actionText")}> {/* this call doesn't work */}
                                <TinaMarkdown content={cards?.actionText} />
                            </article>
                            <div>
                                <a data-tina-field={tinaField(this, "actionCall")} href={cards?.actionCall?.link || "#"}>{cards?.actionCall?.label}</a> {/* this call doesn't work */}
                            </div>
                        </div> 
                </section>
            )
        })}
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}