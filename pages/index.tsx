import ListItem from "@/components/list-item"
import Head from "next/head"
import { useEffect, useState, MouseEvent } from "react"

interface FormElements extends HTMLFormControlsCollection {
  textInput: HTMLInputElement
}

interface InputFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default function Home() {
  const settingDotsStyle: string = `opacity-70 mr-1 w-1.5 h-1.5 rounded-full bg-white`
  const inputStyling: string = `w-72 text-white p-2 bg-transparent border-2 rounded-md`
  const [items, setItems] = useState<any>([])
  const [addItemMode, setAddItemMode] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [mainTitle, setMainTitle] = useState<string>("Goals")
  const [titleEdit, setTitleEdit] = useState<boolean>(false)

  function handleSubmit(e: React.FormEvent<InputFormElement>){
    e.preventDefault()
    const text = (document.getElementById("textInput") as HTMLInputElement).value
    setItems([...items, {id: items.length, text: text}]);
    setAddItemMode(false);
    (document.getElementById("form") as HTMLFormElement).reset()
  }

  const deleteItem = (id: number) => {
    setItems(items.filter((item: any) => item.id !== id))
    console.log(items)
  }

  const editItem = (id: number, text: string) => {
    setItems(items.map((item: any) => item.id == id ? {id: item.id, text: text}: item));
  }

  const submitTitle = (e: React.FormEvent<InputFormElement>) => {
    e.preventDefault()
    const input = (document.getElementById("title-input") as HTMLInputElement).value
    setMainTitle(input)
    setTitleEdit(false)
}

  console.log(items)

  useEffect(() => {
    if(!editMode){
      setTitleEdit(false)
    }
  }, [items, mainTitle, editMode])



  return (
    <>
      <main className="font-Gelica bg-orange-100 bg-gradient-to-t from-orange-500 w-screen h-screen">
        <div className="h-1/3">
        </div>
          { titleEdit ?
              <div className="w-screen flex justify-center mb-1">
                <form action="" onSubmit={(e) => submitTitle(e)}>
                  <input type="text" name="title-input" id="title-input" className="w-72 text-white p-2 bg-transparent border-2 rounded-md" />
                </form>
              </div>
              :
              <div className="text-white flex-col flex justify-center items-center w-screen">
                <div className="drop-shadow-lg mb-1 flex flex-col justify-center items-center"
                  onClick={() => setTitleEdit(true)} 
                  >
                    <h1 className="tracking-wider text-3xl">
                    {mainTitle ? mainTitle : "Goals"}
                    </h1>
                </div>
              </div> 
          }
        
        {/* <div className="mb-12 text-white w-screen flex flex-col justify-center items-center text-center">
          <h1 className="mb-4 text-xl">Today</h1>
          <div className="w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vtibus magnam eos natus deleniti similique repellendus.</p>
          </div>
        </div> */}

        <div className="text-white flex-col flex justify-center items-center w-screen">
          <div className="drop-shadow-lg mb-8 flex flex-col justify-center items-center">
            <h1 className="mb-1 tracking-wider text-3xl">
              
            </h1>
            <div className="w-20 rounded-full h-1 bg-white opacity-90"></div>
          </div>
          <div className="">
              {
                items.length ?
                items.map((item: any) => <ListItem key={item.id} item={item} deleteItem={deleteItem} editMode={editMode} editItem={editItem} />)
                :
                <div className="mb-6">
                  <h2>No goals set yet!</h2>
                </div>
              }
          </div>
          {
            editMode ?
              addItemMode ?
                <form action="" id="form" onSubmit={handleSubmit} className="w-screen flex justify-center items-center">
                  <input type="text" name="textInput" id="textInput" className={inputStyling}/>
                  <button type="submit"
                    className="hover:opacity-70 bg-transparent border-2 p-2 rounded-md ml-2"
                  >Submit</button>
                </form>
              :
                <button className="hover:opacity-70 mt-1 mb-4 text-2xl border-2 py-1 px-3.5 rounded-full"
                  onClick={() => setAddItemMode(true)}
                >
                  +
                </button>
            :
            <div></div>
            
          }
        </div>

        <div className="flex absolute bottom-6 left-4">
          <div className="hover:cursor-pointer hover:opacity-70 mr-4 flex justify-center items-center">
            <div className={settingDotsStyle}></div>
            <div className={settingDotsStyle}></div>
            <div className={settingDotsStyle}></div>
          </div>
          <div>
            {
              editMode ?
                <button className="hover:opacity-70 text-white opacity-90"
                onClick={() => setEditMode(false)}
                >
                  Done
                </button>
              :
                <button className="hover:opacity-70 text-white opacity-90"
                onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
            }
          </div>
        </div> 
      </main>
    </>
  )
}
