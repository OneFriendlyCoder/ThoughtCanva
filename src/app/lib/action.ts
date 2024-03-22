"use server"                    // after this whatever I will do in the function will run at the server, thus the "use server directive" and the function has to be async

import { connectToDb } from "./utils";
import { Post, User } from './models';
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

interface FormData {
  title: String;
  desc: String;
  slug: String;
  userId: String;
}

export const addPost = async (formData: any) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData);
    try {
      connectToDb();
      const newPost = new Post({title, desc, slug, userId});
      await newPost.save();
      console.log("Saved to db");
      revalidatePath("/");          //everytime it will fetch a new data
    } catch (error) {
      console.log(error);
      return {error:"Something went wrong"}
    }
}


export const deletePost = async (formData: any) => {                 

  const {id} = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/");          
  } catch (error) {
    console.log(error);
    return {error:"Something went wrong"}
  }
}


export const registerUser = async (formData: any) => {
  const {username, email, password, passwordRepeat} = Object.fromEntries(formData);
    if(password !== passwordRepeat) {return "Password do not match"}
  try {
    connectToDb();
    const user = await User.findOne({username});
    if(user) {return "User already exists"};
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedpassword,
    });
    await newUser.save();
    console.log("New user created");
  } catch (error) {
    console.log(error);
    return {error:"Unable to register user"};
  }
}


export const handleLogin = async (formData: any) => {
  const {username, password} = Object.fromEntries(formData);
  try {
    connectToDb();
    const user = await User.findOne({username});
    if(!user) {throw new Error("Wrong credentials")};
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) {throw new Error("Wrong credentials")}
    console.log("Username and password are correct! Login");
  } catch (error) {
    console.log(error);
    return {error:"Unable to login"};
  }
}