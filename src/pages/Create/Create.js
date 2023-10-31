import "./Create.css"
import React, { useState } from "react"
import user_icon from '../ImageIcon/person.png'
import email_icon from '../ImageIcon/email.jpg'
import password_icon from '../ImageIcon/password.png'
const LoginSignup = ()=>{
  const[action,setAction] = useState("Sign up")
  return(
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login" ?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password ? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login </div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      </div>
    </div>
  )
}
export default LoginSignup