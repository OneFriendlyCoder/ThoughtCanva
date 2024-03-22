import { registerUser } from "@/app/lib/action";

const RegisterPage = () => {
    return(
        <div>
            <form action={registerUser}>
                <input type="text" placeholder="UserName" name="username"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="password" placeholder="Retype Password" name="passwordRepeat"/>
                <button>Register</button>
            </form>
        </div>
    )
}


export default RegisterPage;