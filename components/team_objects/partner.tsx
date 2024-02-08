import { TeamPartner } from "../../tina/__generated__/types";
import { useCallback, useState } from 'react'
import { tinaField } from "tinacms/dist/react";
import React from "react";

export function Partner(props: TeamPartner) {
    const [isOpen, toggleIsOpen] = useToggle();
    return(
    <>
          <div key={props?.id} className="flex flex-col mb-6 sm:mb-10 max-w-md p-6 shadow-lg rounded-lg text-salmon-red">
                {/* on click img is replaced by p tag */}
                {props.image &&  isOpen && <img onClick={toggleIsOpen} src={props?.image} alt="" className="flex-shrink-0 object-cover max-w-64 h-64 rounded-lg max-sm:w-96 sm:h-96 bg-gray-500 cursor-pointer" />}  {/*w-full*/}
                {!props.image && props.logo &&  isOpen && <img onClick={toggleIsOpen} src={props?.logo} alt="" className="flex-shrink-0 object-contain max-w-64 h-64 rounded-lg max-sm:w-96 sm:h-96 bg-white cursor-pointer" />}  {/*w-full*/}
                {!props.logo && !props.image &&  isOpen && <p onClick={toggleIsOpen} className="flex-shrink-0 h-64 max-w-64 rounded-lg max-sm:w-96 sm:h-96 bg-white cursor-pointer">No Image or Logo for Partner</p>}  {/*w-full*/}
                {!isOpen && <p onClick={toggleIsOpen} className="flex-shrink-0 max-w-64 h-64 rounded-lg max-sm:w-96 sm:h-96 cursor-pointer select-none bg-white overflow-hidden">{props?.blurb}</p>}
                <div>
                    <h2 className="text-xl max-w-64 font-semibold">{props?.name}</h2>
                    <span className="block pb-2 max-w:64 text-sm text-salmon-green">{ props?.partnerType }</span>
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