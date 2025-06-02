import { Avatar } from "./BlogCard"

interface ButtonProps {
    onClick:()=> void   
}


function Button({onClick} : ButtonProps){
    return (
    <span className="flex items-center ml-3 bg-orange-200 rounded-3xl">
        <button onClick={onClick} className=" flex items-center pl-5 pr-4 ">
            <span className="pr-2 text-xl  font-outfit">Publish</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
        </button>
    </span>
    )
}

function temp (){
    console.log("the button is clicked")
}

export const BlogHeader=()=>{
    return (
        <div className="fixed left-1/2 -translate-x-1/2 top-0 p-4 z-50">
            <div className=" bg-linear-to-r from-purple-50 to-fuchsia-50 lg:w-200 md:w-150 sm:w-120 w-96 h-18 flex justify-between content-center
                rounded-4xl  items-center opacity-[.90]">
                <div className="font-outfit font-medium text-5xl pl-7 ">
                    Scroll
                </div>
                <div className="flex">
                    <Button onClick={temp}/>
                        <span className="sm:ml-10 ml-2 pr-4">
                            <Avatar fontSize={"2xl"} size={50} name="Shivanshu Pandey"/>
                        </span>
                    </div>
            </div>
        </div>
        )
} 