import React, { useState } from 'react';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName) {
            setError('Please enter your full name.');
            return;
        }
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!password || password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Sign up logic goes here
    };

    return (
        <div>           
            <h1 className="text-2xl text-red-600 font-bold">SIGN UP</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="mt-5 flex flex-col gap-5">
                <div>
                    <input
                        type="text"
                        id="names"
                        placeholder="Full names"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
                    />
                </div>  
                <div>
                    <input
                        type="text"
                        id="username"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="confirm password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
                    />
                </div>
                <button className="bg-blue-300 mx-9 py-2 rounded-md text-white w-[80%] border border-blue-700" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;
