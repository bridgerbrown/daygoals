import React, { useState } from "react";
import Image from "next/image";

export default function CustomizeSettings(props: any){
    const liStyle: string = `hover:bg-orange-500 w-full py-4 cursor-pointer text-white text-lg`

    const [menuSelection, setMenuSelection] = useState<number>(0)

    return(
        <section className="w-full">
            {props.backButton}
            <h1 className="text-2xl text-white mb-10">
                Customize
            </h1>
    </section>
    )
}