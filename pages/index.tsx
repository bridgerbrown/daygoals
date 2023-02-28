import ListItem from "@/components/list-item"
import Head from "next/head"
import { useEffect, useState, MouseEvent } from "react"

export default function Home() {
  const settingDotsStyle: string = `opacity-70 mr-1 w-1.5 h-1.5 rounded-full bg-white`
  const inputStyling: string = `w-72 text-white p-2 bg-transparent border-2 rounded-md`
  const [items, setItems] = useState<any>([{id: 0, text: "ya"}])

  useEffect(() => {}, [items])

  const addItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const text = (document.getElementById("input1") as HTMLInputElement).value
    console.log(text)
    setItems([...items, {id: items.length, text: text}])
    console.log(items)
  }

  const deleteItem = (id: number) => {
    setItems(items.map((item: any) => item.id !== id))
  }

  return (
    <>
      <main className="font-Gelica bg-orange-100 bg-gradient-to-t from-orange-500 w-screen h-screen">
        <div className="h-1/3">

        </div>
        
        {/* <div className="mb-12 text-white w-screen flex flex-col justify-center items-center text-center">
          <h1 className="mb-4 text-xl">Today</h1>
          <div className="w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vtibus magnam eos natus deleniti similique repellendus.</p>
          </div>
        </div> */}

        <div className="text-white flex-col flex justify-center items-center w-screen">
          <div className="drop-shadow-lg mb-8 flex flex-col justify-center items-center">
            <h1 className="mb-1 tracking-wider text-3xl">
              Goals
            </h1>
            <div className="w-20 rounded-full h-1 bg-white opacity-90"></div>
          </div>
          <div className="">
              {items.map((item: any) => <ListItem deleteItem={deleteItem} key={item.id} item={item} />)}
          </div>
          <button className="hover:opacity-70 my-4 text-2xl border-2 py-1 px-3.5 rounded-full">+</button>
          <form action="" onSubmit={() => addItem()} className="w-screen flex justify-center items-center">
            <input type="text" name="input1" id="input1" className={inputStyling}/>
            <button type="submit"
              className="hover:opacity-70 bg-transparent border-2 p-2 rounded-md mx-2"
            >Submit</button>
          </form>
        </div>

        <div className="flex absolute bottom-6 left-4">
          <div className="hover:cursor-pointer hover:opacity-70 mr-4 flex justify-center items-center">
            <div className={settingDotsStyle}></div>
            <div className={settingDotsStyle}></div>
            <div className={settingDotsStyle}></div>
          </div>

          <div>
            <button className="hover:opacity-70 text-white opacity-90">Edit</button>
          </div>
        </div> 
      </main>
    </>
  )
}
