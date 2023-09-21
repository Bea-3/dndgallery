import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

    }

    return ( 
        <div className="login-form">
            <h2>Login Form</h2>
            <form onSubmit={{handleSubmit}}>
            <label> Username:</label>
            <input 
            type="email" 
            required
            className="username"
            />
            <label> Password:</label>
            <input 
            type="password" 
            required
            className="password"
            />
            <button>
                Login
            </button>
            </form> 
        </div>
     );
}
 
export default Login;