import { Avatar } from "./BlogCard"



export const BlogHeader=()=>{
    return (
        <div className="fixed left-1/2 -translate-x-1/2 top-0 p-4 z-50">
            <div className=" bg-linear-to-r from-purple-50 to-fuchsia-50 w-200 h-18 flex justify-between content-center
                rounded-4xl  items-center opacity-[.90]">
                <div className="font-outfit font-medium text-5xl pl-7 ">
                    Scroll
                </div>
                <div>
                    <button>
                        hello
                    </button>
                </div>
                <div className="pr-7">
                    <Avatar name="Shivanshu Pandey"/>
                </div>
            </div>
        </div>
        )
} 