import { handleLogin } from "@/app/lib/action"

const Login = () =>{
    return (
        <div>
            <form action={handleLogin}>
                <input type="text" placeholder="username" name="username"/>
                <input type="password" placeholder="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;