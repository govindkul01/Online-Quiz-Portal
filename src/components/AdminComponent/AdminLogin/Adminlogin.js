import style from "./AdminLogin.module.css";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate();

    const login = () => {
    navigate("/Dashboard");
    }

    return (
        <div id={style.container}>

        
        <div id={style.containerHeadingBox}>
            <h1>Admin Login</h1>
        </div>


        <div id={style.emailBox}>
            <label htmlFor="email"> Email
                <input name="admin_name" type="text" id={style.email} />
            </label>
        </div>


        <div id={style.passwordBox}>
            <label htmlFor="password"> Password
                <input name="admin_password" type="password" id={style.password} />
            </label>
        </div>

        <button onClick={login}  id={style.login}>Login</button>
         

        <NavLink to="/" id={style.goBackLink}> Go Back</NavLink> 


        </div>
     );
 }

 export default AdminLogin;