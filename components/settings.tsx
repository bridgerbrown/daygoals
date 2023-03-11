import React, { useState } from "react";
import Image from "next/image";
import TimezoneSelect from "react-timezone-select";

export default function Settings(props: any){
    const liStyle: string = `hover:bg-orange-500 w-full py-4 cursor-pointer text-white text-lg`

    const [menuSelection, setMenuSelection] = useState<number>(0)
    const [selectedTimezone, setSelectedTimezone] = useState<any>({})
    
    const backButton: any = 
        <div className="absolute top-4 left-4">
            <h3 className="hover:opacity-70 cursor-pointer text-white text-sm"
                onClick={() => setMenuSelection(0)}
            >
                Back
            </h3>
        </div>

    return(
        <menu className="top-0 absolute w-screen h-full flex flex-col justify-center items-center">
            <div className="py-16 rounded-lg absolute top-96 w-96 text-center bg-orange-400 shadow-lg">
                <Image
                    src="/x-icon.png"
                    width={574}
                    height={573}
                    alt="exit menu"
                    className="cursor-pointer hover:opacity-70 absolute opacity-90 right-5 top-5 w-5 h-5"
                />
                <div className="w-full flex flex-col justify-center items-center">
                    { menuSelection === 0 ?
                    <div className="w-full">
                        <h1 className="text-2xl text-white mb-10">
                            Settings
                        </h1>
                        <ul className="w-full">
                            <li className={liStyle}
                                onClick={() => setMenuSelection(1)}
                            >
                                Set Timezone
                            </li>
                            <li className={liStyle}
                                onClick={() => setMenuSelection(2)}
                            >
                                Customize
                            </li>
                            <li className={liStyle}
                                onClick={() => setMenuSelection(3)}
                            >
                                Reset
                            </li>
                        </ul>
                    </div>
                    : menuSelection === 1 ?
                        <div className="w-full">
                            {backButton}
                            <h1 className="text-2xl text-white mb-10">
                                Timezone
                            </h1>
                            <section className="mb-8">
                                <h2 className="text-white">
                                    Dynamic Background
                                </h2>
                                <form action="" className="mt-2">
                                    <input type="radio" name="dynamicBg" id="timezone" />
                                    <label htmlFor="timezone"
                                        className="ml-2 mr-4 text-white"
                                    >
                                        Timezone
                                    </label>
                                    <input type="radio" name="dynamicBg" id="off" />
                                    <label htmlFor="off"
                                        className="ml-2 text-white"
                                    >
                                        Off
                                    </label>
                                </form>
                            </section>
                            <section className="w-full flex flex-col justify-center items-center">
                                <h2 className="text-white mb-4">
                                    Select a new timezone:
                                </h2>
                                <TimezoneSelect 
                                    value={selectedTimezone}
                                    onChange={setSelectedTimezone}
                                    className="w-3/4"
                                />
                                {/* <button className="hover:opacity-70 bg-transparent border-2 py-2 px-4 rounded-md mt-6 text-white">
                                    Submit
                                </button> */}
                            </section>
                        </div>
                    : menuSelection === 2 ?
                        <div>
                            {backButton}
                            <h1 className="text-2xl text-white mb-10">
                                Customize
                            </h1>
                        </div>
                    : 
                        <div>
                            {backButton}
                            <h1 className="text-2xl text-white mb-10">
                                Reset
                            </h1>
                        </div>
                    }
                </div>
            </div>
        </menu>
    )
}