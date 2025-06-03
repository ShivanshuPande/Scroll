import axios from "axios";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../config";

interface Blogtypes {
    "title" : string ,
    "content" : string,
    "createdAt" : string,
    "author" : {
        "userName" : string
    }
}

export const useBlogs = () => {
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blogtypes[]>([]);

    const token = localStorage.getItem("jwtToken")


    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blog/all` , {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
            .then(response=>{
                setBlogs(response.data.blogs);
                setLoading(false)
            })
    })


    return {
        loading  , 
        blogs
    }
}