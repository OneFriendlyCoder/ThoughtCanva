import Image from "next/image";

const SinglePost = () => {
    return (
        <div>
            <div>
                    {/* post images is added here */}
            </div>
            <div>
                <h1>Title</h1>
                    <div>
                        {/* Author profile images is added here */}
                    <div>
                        <span>Author</span>
                        <span>Ram kumar</span>
                    </div>
                    <div>
                        <span>Published</span>
                        <span>10.10.1100</span>
                    </div>
                </div>
                <div>
                    <p> Here goes the description of the blog</p>
                </div>
            </div>
        </div>
    )
}
export default SinglePost;