interface BlogProps {
    authorName : String
    title : String
    content : String
    publishDate : String
}

export const BlogCard =({authorName , title ,content , publishDate} : BlogProps) => {
    return (
        <div>
            <div>{authorName}</div>
            <div>{title}</div>
            <div>{content.slice(0,70) +"..."}</div>
            <div>{publishDate}</div>
            <div>${Math.ceil(content.length /100)} minutes</div>
        </div>
    )
}


