import Image from "next/image";
import Link from "next/link";
const PostCard = ({post}:{post:{userId:number;slug:string;title:string;desc:string}}) => {

    return(
        <>
        <div>
            <div>
                <div>
                    <Image src="" alt="here is the image"/>
                </div>
                <span />
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.desc}</p>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                </div>
            </div>
        </div>
        </>
    )

}

export default PostCard;