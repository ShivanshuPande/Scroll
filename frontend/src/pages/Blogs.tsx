import { BlogCard } from "../components/BlogCard"
import { BlogHeader } from "../components/BlogHeader"
import flowerImage from "../assets/flowerbackground.jpg"
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const {blogs , loading} = useBlogs();

    if(loading){
        return (
            <div>
                Loading
            </div>
        )
    }
    return (
        <div style={{
            backgroundImage: `url(${flowerImage})`
        }}> 
            <div>
                <BlogHeader/>
            </div>
            <div className="pt-25">
                {blogs.map(blogs=><BlogCard
                title={blogs.title} content={blogs.content} publishDate={blogs.createdAt.slice(0,10)} authorName={blogs.author.userName || "Anonymous"}/>)}
            </div>
        </div>
    )}