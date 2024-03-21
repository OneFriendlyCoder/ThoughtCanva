import { getPost } from "@/app/lib/data";
import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import { Suspense } from "react";

const SinglePost = async ({params}:{params: any}) => {
    const {slug} = params;
    const post = await getPost(slug);
    return (
        <div>
            <div>
                    {/* post images is added here */}
            </div>
            <div>
                {<h1>{post.title}</h1>}
                    <div>
                        {/* Author profile images is added here */}
                    <Suspense fallback={<div>Loading...</div>}>
                        {}
                    </Suspense>
                    <div>
                        <div>{post.desc}</div>
                        <div>{}</div>
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default SinglePost;