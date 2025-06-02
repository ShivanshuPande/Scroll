interface BlogProps {
    authorName : String
    title : String
    content : String
    publishDate : String
}

export const BlogCard =({authorName , title ,content , publishDate} : BlogProps) => {
    return (
        <div className="flex justify-center">
            
                <div className=" md:h-40 hover:border-black h-50 w-200 pl-10 pr-10 pt-4 border-2 border-gray-500 m-2 bg-fuchsia-50 rounded-xl">
                <div className="">
                        <div className="flex">  
                                <div className="relative inline-flex items-center justify-center w-5.5 h-5.5 overflow-hidden bg-orange-300 rounded-full ">
                                <span className="font-medium font-outfit text-white">{authorName[0]}</span>
                                </div>
                                <div className="flex justify-center font-outfit pl-4 font-light">{authorName.slice(0,8)}</div>
                                <div className="pl-4 font-outfit font-extralight text-sm pt-1 ">{publishDate}</div>
                        </div>
                    
                        <div className="font-playfair font-bold text-3xl pt-4 pb-3">{title}</div>
                        <div className="font-outfit font-light  pb-">{content.slice(0,70) +"..."}</div>
                        
                        <div className="font-outfit flex justify-end font-extralight text-sm ">Read : {Math.ceil(content.length /100)} minutes </div>
                </div>
                </div>
            
        </div>   
    )
}


