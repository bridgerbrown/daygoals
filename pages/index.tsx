import Head from "next/head"

export default function Home() {
  const liStyle: string = `drop-shadow-lg tracking-wider text-center mr-4`
  const liDotStyle: string = `mr-4 w-2 h-2 border-white border-2 rounded-full`
  const liElementStyle: string = `mb-12 flex justify-center items-center `
  const settingDotsStyle: string = `opacity-70 mr-1 w-1.5 h-1.5 rounded-full bg-white`
  const inputStyling: string = `w-72 text-white p-2 bg-transparent border-2 rounded-md`

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
            <ul className="text-2xl flex-col">
              <div className={liElementStyle}>
                <div className={liDotStyle}></div>
                <li className={liStyle}>Make more babies</li>
              </div>
              <div className={liElementStyle}>
                <div className={liDotStyle}></div>
                <li className={liStyle}>Slay a foul beast</li>
              </div>
              <div className={liElementStyle}>
                <div className={liDotStyle}></div>
                <li className={liStyle}>Explode</li>
              </div>
            </ul>
          </div>
          <button className="hover:opacity-70 my-4 text-2xl border-2 py-1 px-3.5 rounded-full">+</button>
          <form action="" className="w-screen flex justify-center items-center">
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
