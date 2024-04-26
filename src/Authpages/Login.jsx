import { Link } from 'react-router-dom';
import React,{useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!password || password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
    };
  return (
    <div>  
      <h1 className="text-2xl text-red-600 font-bold">SIGN IN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Email"
            autoComplete="off"
            className="bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700 mt-3"
             onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%] my-3"
             onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="bg-blue-300 px-5 py-2 rounded-md text-white w-[80%] border border-blue-700">Sign In</button>
        </div>
      </form>
      <p className="mt-3">
        Don't have an account yet? <span className="text-red-500"><Link to='/SignUp'>Sign Up</Link></span>
        <br/>
        Forgot your password? <span className="text-red-500"><Link to='/Reset'>Reset password</Link></span>
      </p>
    </div>
  );
}

export default Login