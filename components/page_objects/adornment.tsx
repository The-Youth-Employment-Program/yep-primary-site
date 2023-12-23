import { PageSectionAdornment } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Adornment(props: PageSectionAdornment) {
    const height = props.height;
    const width = props.width;
    const xOffset = props.offsetX;
    const yOffset = props.offsetY;
    return(
      <>
        <article className="">  
          <div className="">
            <img src={props.adornmentImage || ""} data-tina-field={tinaField(props, "adornmentImage")} />
          </div>
        </article>
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
        </>
    )
}