import PostCard from "@/components/postCard/postCard"
import { getPosts } from "../lib/data";

/*
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"})   // when the data in the db is changing 

    if(!res.ok){
        throw new Error("something went wrong")
    }
    return res.json()
}
*/

const Blog = async () => {
//    const posts = await getData();
    const posts = await getPosts();
    return (
        <>
            {posts?.map((post: {userId:number;id:number;title:string;body:string}) => (
                <div key={post.id}>
                 <PostCard post={post}/>
                </div>
            ))}
        </>
    )
}

export default Blog