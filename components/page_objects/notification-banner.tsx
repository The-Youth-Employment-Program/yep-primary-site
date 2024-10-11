import { PageSectionNotificationBanner } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import React from "react";
import Link from 'next/link'

export function NotificationBanner(props: PageSectionNotificationBanner) {
  const sectionStyle = "relative bg-origin-content bg-cover bg-center md:bg-[center_-4rem] bg-no-repeat" //top-left works well... trying to find better option
  return(
      <>
      { props.bannerActive &&
        <header className=" bg-salmon-red sm:flex sm:justify-between sm:items-center"> {/* bg-salmon-tan */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="">
                    {props.bannerText}
                    <Link href={props.bannerButton?.link || "#"}>
                        {props.bannerButton?.label}
                    </Link>
                </div>
            </div>
        </header>
        }
        {/* <pre>{ JSON.stringify(props, null, 2) }</pre> */}
      </>
    )
}