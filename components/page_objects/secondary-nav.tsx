import Link from "next/link";
import { PageSectionSecondaryNav } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function SecondNav(props: PageSectionSecondaryNav) {
  //for each navigationEntry in ?props? add div to {secondaryNav} which is html object for section and container divs...
  //should each contain data-tina-field={tinaField(props, "navigationEntry")}
  
  return(
      <>

        <section className="flex">  
          {props.navigationEntry?.map((entry,i) =>{
            return(
              <div key={i} className="p-3">
                <a href={entry?.childPages?._sys.breadcrumbs.join("/")}>{entry?.childPages?.pageTitle}</a>
              </div>
            )
          })}
        </section>
        {/*<pre>{ JSON.stringify(props, null, 2) }</pre> */}
      </>
    )
}

