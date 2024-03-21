
const getData = async (userId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"})   // when the data in the db is changing 

    if(!res.ok){
        throw new Error("something went wrong")
    }
    return res.json()
}

const PostUser = async ({userId}:{userId:string}) => {
    const user = await getData(userId);
    return(
        <div>
            <span>Author </span>
            <span>{user.username}</span>
        </div>
    )
}

export default PostUser;