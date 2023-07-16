import React from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom'
function Login() {
    const [data, setData] = useState({
        username: "",
        password: " ",
      });
      const {user,pass}= data;
    
      const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
        
      }
      const submitHandler = e=>{
        e.preventDefault();
        console.log(data)
      
      }
  return (
    <>
    <center>
        <div className="login">
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
          <input className='user' type="text" name="username" value={user}  onChange={changeHandler}   placeholder='username'/>
          <br />
          <input className='pass'  type="password"  name="password" value={pass} onChange={changeHandler} placeholder='password'/>
          <br />
          <input className='submit'  type="submit" name="submit"  />
        <br />
        <p>Don't have an account ?<Link to="/" > <i>SignUp</i></Link></p>

        </form>
        </div>
      </center>
      </>
  )
}

export default Login;