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
            if (entry?.altPage?.label){
              return(
                <div key={i} className="p-4 mt-2 block px-3 py-2 text-salmon-red rounded hover:bg-salmon-tan hover:text-salmon-red active:bg-salmon-green focus:bg-salmon-green focus:text-salmon-red font-medium tracking-wider sm:mt-0 sm:mr-2">
                  <a href={entry?.altPage?.link || "#"}>{entry?.altPage.label}</a>
                </div>
              )
            }
            if( !entry?.altPage?.label ) {
              return(
                <div key={i} className="p-4 mt-2 block px-3 py-2 text-salmon-red rounded hover:bg-salmon-tan hover:text-salmon-red active:bg-salmon-green focus:bg-salmon-green focus:text-salmon-red font-medium tracking-wider sm:mt-0 sm:mr-2">
                  <a href={entry?.childPages?._sys.breadcrumbs.join("/")}>{entry?.childPages?.pageTitle}</a>
                </div>
              )
            }
            
          })}
        </section>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
      </>
    )
}

