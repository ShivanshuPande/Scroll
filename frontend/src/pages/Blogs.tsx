import { BlogCard } from "../components/BlogCard"
import { BlogHeader } from "../components/BlogHeader"
import flowerImage from "../assets/flowerbackground.jpg"

export const Blogs = () => {
    return (
        <div style={{
            backgroundImage: `url(${flowerImage})`
        }}> 
            <div>
                <BlogHeader/>
            </div>
            <div>
                <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
                 <BlogCard title="Hello There" content="This Human vs AI narrative is just nothing but a business thing,
                 so that much people can carry out there agenda" authorName="Shivanshu Pandey" publishDate="19.07.2005"/>
            </div>
        </div>
    )
}