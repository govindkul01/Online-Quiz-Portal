import { NavLink , useNavigate } from "react-router-dom";
import style from "./StudentSignup.module.css";


function StudentSignup() {


    const navigate = useNavigate();

    const signup = () => {
    navigate("/StudentLogin");
    }

    return (
        <div id={style.container}>

            <div id={style.formHeading}>
                <h1>Student Signup from</h1>
            </div>

            <div id={style.nameBox}>
                <label htmlFor="name">Name 
                    <input
                    type="text" name="user_name"  required />
                </label>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input 
                    type="text" name="user_email" required />
                </label>
            </div>

            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input 
                    type="password" name="user_password" required />
                </label>
            </div>


            <div id={style.confirmPasswordBox}>
                <label htmlFor="confirmPassword">Confirm Password
                    <input
                     type="password" name="confirmPassword" required />
                </label>
            </div>


            {/* <button id={style.signup} onclick="signup()">Sign Up</button> */}
            <button id={style.signup} onClick={signup} >Sign Up</button>


            <div id={style.login}>
                Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
            </div>


        </div>
    );
}

export default StudentSignup;