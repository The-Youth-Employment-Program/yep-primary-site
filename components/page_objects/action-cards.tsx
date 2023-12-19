import { PageSectionActionCards, PageSectionActionCardsActionCard } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ActionCards(props: PageSectionActionCards) {
    {/* for card in actionCards { ActionCard(card) } */}
    if(props.actionCard != null) {
        (props.actionCard || []).map((card,i) => {
            return ActionCard(card)
        });
    }
    return(
        <>
        <section>
            <div className="">
                <div data-tina-field={tinaField(props, "actionCard")}>{props.actionCard?}
                {/* <TinaMarkdown content={props.heroText?} components={{
                        h1: (props) => (
                            <h1 className="tst" { ... props } />
                        ),
                        p: (props) => (
                            <p className="tst" { ... props } />
                        ),
                    }}
                /> */}
                </div>
            </div>
        </section>
        <pre>{ JSON.stringify(props, null, 2) }</pre>
        </>
    )
}

export function ActionCard(props: PageSectionActionCardsActionCard) {
    return(
        <div className="px-5 py-3 bg-salmon-tan">
            <div data-tina-field={tinaField(props,"cardTitle")}>
                { props.cardTitle }
            </div>
            <article data-tina-field={tinaField(props,"actionText")}>
                { props.actionText }
            </article>
            <div data-tina-field={tinaField(props,"actionCall")}>
                <a href={props.actionCall?.link || "#"}>{props.actionCall?.label}</a>
            </div>
        </div>
    )
}


// "__typename": "PageSectionActionCards",
// "actionCard": [
//   {
//     "__typename": "PageSectionActionCardsActionCard",
//     "cardTitle": "Want to work outside?",
//     "actionText": {
//       "type": "root",
//       "children": [
//         {
//           "type": "p",
//           "children": [
//             {
//               "type": "text",
//               "text": "Work in the outdoors with industry professionals and gain practical experience in numerous fields!"
//             }
//           ]
//         }
//       ]
//     },
//     "actionCall": {
//       "__typename": "PageSectionActionCardsActionCardActionCall",
//       "label": "Join",
//       "link": "/work"
//     }
//   },