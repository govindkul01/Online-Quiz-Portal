import style from "./StudentLogin.module.css";
import { NavLink } from "react-router-dom";


const StudentLogin= () => {

    
return(
    <div id={style.container}>

        <div id={style.containerHeadingBox}>
            <h1>Student Login</h1>
        </div>

       <div id={style.emailBox}>
           <label htmlFor="email"> Email
               <input name="user_email" 
         type="text" id={style.email} />
           </label>
       </div>


       <div id={style.passwordBox}>
           <label htmlFor="password"> Password
             <input name="user_password" 
         type="password" id={style.password} />
           </label>
       </div>


       <button id={style.login}>Login</button>


      <div id={style.signup}>
         New to Portal?  <NavLink exact to="/StudentSignup"> Register</NavLink> 
         <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink> 
      </div>


       </div>
 ); 
}
export default StudentLogin;