import React from 'react'
import { useState } from 'react'
import "../Styles/Sign.css"
import { Link } from 'react-router-dom'
const Sign = () => {
    const [data,setData] = useState({
        username: '',
        email:'',
        password: '',
        confirmPassword: ''
    })
    const {user,email,password,confirmPassword}=data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        if(password === confirmPassword){
            console.log(data)
        }
       else{
        console.log("\n\t Passwords are not matching");
        alert("\n\t Passwords not matching")
       }
    }


  return (
  <>
  <center>
    <div className="signup">
    <form onSubmit={submitHandler} className='form'>
        <h2>SignUp</h2>
        <input type="text"    placeholder='username'      name="username" value={user}  onChange={changeHandler}/>
        <br />
        <input type="text"      placeholder='email'   name='email' value={email} onChange={changeHandler}/>
        <br />
        <input type="password"   placeholder='password'   name="password" value={password} onChange={changeHandler} />
        <br />
        <input type="password"  placeholder='confirm password'    name="confirmPassword" value={confirmPassword}  onChange={changeHandler}/>
       <br />
        <input type="submit" name='submit' className='btn' />
        <br />
        <p>Already have an account ?<Link  to="/l" > <i>Login</i><Link/></Link></p>
    </form>
    </div>
  </center>
  
  </>
  )
}

export default Sign;