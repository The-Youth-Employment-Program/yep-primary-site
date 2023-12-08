import Link from "next/link";
import { PageSectionActionCards, PageSectionActionCardsActionCard } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function ActionCards(props: PageSectionActionCards) {
    return(
        <section>
            <div className="">
                <div data-tina-field={tinaField(props, "actionCard")}>{props.actionCard?.length}
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
    )
}
