import { connectToDb } from "./utils"
import { Post, User } from "./models";


//FETCHING THE USER AND POSTS WITHOUT AN API IN NEXTJS
export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}


export const getPost = async (slug: String) => {
    try {
        connectToDb();
        const posts = await Post.findOne({slug});
        return posts;
    } catch (error) {
        console.log(error);
    }
}


export const getUser = async (id: String) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
    }
}