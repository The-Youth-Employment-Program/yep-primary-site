import { TeamBoard } from "../../tina/__generated__/types";
import { useCallback, useState } from 'react'
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Board(props: TeamBoard) {
    const [isOpen, toggleIsOpen] = useToggle();
    return(
    <>
        
            <div key={props?.id} className="flex flex-col max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
                {/* on click img is replaced by p tag */}
                { isOpen && <img onClick={toggleIsOpen} src={props?.image} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square cursor-pointer" />}
                { !isOpen && <p onClick={toggleIsOpen} className="flex-shrink-0 h-64 rounded-lg sm:h-96 cursor-pointer aspect-square">{props?.blurb}</p>}
                <div>
                    <h2 className="text-xl font-semibold">{props?.name}</h2>
                    <span className="block pb-2 text-sm text-salmon-green">Board Member</span> {/* { part?.node.qualifier } */}
                </div>
            </div>

    </>
    )
}

export function useToggle(initialValue = true) {
    const [value,setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value,toggle];
  }