import { PageSectionAdornment } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Adornment(props: PageSectionAdornment) {
    const height = props.height;
    const width = props.width;
    const xOffset = props.offsetX;
    const yOffset = props.offsetY;
    let styleI = `absolute w-${width} h-${height} right-${xOffset} bottom-${yOffset}`
    let styleD = `static`
    return(
        <article className="static z-40">  
          <div className={styleD}> {styleI}
            <img className={styleI} src={props.adornmentImage || ""} data-tina-field={tinaField(props, "adornmentImage")} />
          </div>
        </article>
    )
}
{/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}