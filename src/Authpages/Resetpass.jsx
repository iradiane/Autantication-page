import React, { useState } from 'react';

const Resetpass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Reset password logic goes here
  };

  return (
    <div>           
      <h1 className="text-2xl text-red-600 font-bold">RESET ACCOUNT PASSWORD</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
          />
        </div>
        <button className="bg-blue-300 mx-9 py-2 rounded-md text-white w-[80%] border border-blue-700" onClick={handleSubmit}>Reset Password</button>
      </div>
    </div>
  );
};

export default Resetpass;
