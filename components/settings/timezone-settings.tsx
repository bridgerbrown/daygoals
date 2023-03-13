import React, { useState } from "react";
import Image from "next/image";
import TimezoneSelect from "react-timezone-select";

export default function TimezoneSettings(props: any){
    const liStyle: string = `hover:bg-orange-500 w-full py-4 cursor-pointer text-white text-lg`

    const [menuSelection, setMenuSelection] = useState<number>(0)
    const [selectedTimezone, setSelectedTimezone] = useState<any>({})
    const [dynamicBgSetting, setDynamicBgSetting] = useState<boolean>(true)

    return(
        <section className="w-full">
            {props.backButton}
            <h1 className="text-2xl text-white mb-10">
                Timezone
            </h1>
            <section className="mb-8">
                <h2 className="text-white">
                    Dynamic Background
                </h2>
                <form action="" className="mt-2">
                    <input type="radio" name="dynamicBg" id="on" value="on" defaultChecked onClick={() => setDynamicBgSetting(true)}/>
                    <label htmlFor="on"
                        className="ml-2 mr-4 text-white"
                    >
                        Timezone
                    </label>
                    <input type="radio" name="dynamicBg" id="off" value="off" onClick={() => setDynamicBgSetting(false)}/>
                    <label htmlFor="off"
                        className="ml-2 text-white"
                    >
                        Off
                    </label>
                </form>
            </section>
            { dynamicBgSetting ?
                <section className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-white mb-4">
                        Select a new timezone:
                    </h2>
                    <TimezoneSelect 
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                        className="w-3/4 cursor-pointer"
                    />
                    <button className="hover:opacity-70 bg-transparent border-2 py-2 px-4 rounded-md mt-6 text-white">
                        Submit
                    </button>
                </section>
            :
                <div></div>
            }
    </section>
    )
}