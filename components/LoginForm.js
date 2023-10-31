import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Login successful
        const token = response.data.token;
        // Save the token securely (e.g., in localStorage)
        localStorage.setItem('token', token);

        // Redirect to a new page or perform other actions
        window.location.href = '/'; // Replace with your desired redirect URL
      } else {
        // Handle unsuccessful login, e.g., display an error message
        console.error('Login error:', response.data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
