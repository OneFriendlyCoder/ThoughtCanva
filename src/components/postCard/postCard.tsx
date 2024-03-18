import Image from "next/image";
import Link from "next/link";
const PostCard = () => {

    return(
        <>
        <div>
            <div>
                <div>
                    <Image src="" alt="here is the image"/>
                </div>
                <span />
                <div>
                    <h1>Title</h1>
                    <p>Description</p>
                    <Link href="/blog/post">Read More</Link>
                </div>
            </div>
        </div>
        </>
    )

}

export default PostCard;