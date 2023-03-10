import React, { useEffect, useState } from "react"
import Image from "next/image"

interface FormElements extends HTMLFormControlsCollection {
    textInput: HTMLInputElement
  }
  
  interface InputFormElement extends HTMLFormElement {
    readonly elements: FormElements
  }

export default function ListItem(props: any){
    const liStyle: string = `p-2 drop-shadow-lg tracking-wider text-center mr-3.5 min-w-[24]`
    const liDotStyle: string = `mr-4 w-2 h-2 border-white border-2 rounded-full`
    const liElementStyle: string = `mb-6 mr-2 flex justify-center items-center`
    const liElementEditStyle: string = `ml-5.25 mr-2 mb-6 flex justify-center items-center`
    const inputStyling: string = `w-42 text-white p-2 bg-transparent border-2 rounded-md`

    const [edit, setEdit] = useState<boolean>(false)
    const [deleteVisible, setDeleteVisible] = useState<boolean>(true)

    const submitText = (e: React.FormEvent<InputFormElement>) => {
        e.preventDefault()
        const input = (document.getElementById("text-input") as HTMLInputElement).value
        props.editItem(props.item.id, input)
        setEdit(false)
    }

    useEffect(() => {
        setEdit(false)
    }, [props.editMode])

    return(
        <div className={props.editMode ? liElementEditStyle : liElementStyle}>
            <div className={liDotStyle}></div>
            {
                edit && props.editMode ?
                <form action="" onSubmit={(e) => submitText(e)}>
                    <input type="text" name="text-input" id="text-input" className={inputStyling} />
                </form>
                :
                <div
                      className=" flex justify-center items-center">
                    <div
                        onClick={() => setEdit(true)} 
                        className={liStyle}>
                        {props.item.text ? props.item.text : "New goal"}
                    </div>
                    {
                        props.editMode ?
                        <div    
                            onClick={() => props.deleteItem(props.item.id)}
                            className="cursor-pointer mt-1 p-1.5 bg-transparent border border-white rounded-full"
                        >
                            <Image 
                                src="/x-icon.png"
                                width={8}
                                height={8}
                                alt="delete text icon"
                                className=""
                                onClick={() => props.deleteItem(props.item.id)}
                            />
                        </div>  
                        :
                        <div></div>
                    }
                    {/* <button className="font-sans hover:opacity-70 my-4 text-lg border-2 py-1 px-3.5 rounded-full">x</button> */}
                    {/* <Image 
                        src="/edit-icon.png"
                        width={35}
                        height={35}
                        alt="edit icon"
                        className="opacity-90"
                    /> */}
                </div>
            }
        </div>
    )
}