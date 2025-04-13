import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import login-specific styles

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for spinner
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner while loading

    setTimeout(() => {
      if (email === 'suryan2398@gmail.com' && password === '123456') {
        setLoading(false);
        navigate('/form');
      } else {
        setLoading(false);
        alert('Invalid credentials');
      }
    }, 1500); // Simulate server delay
  };

  return (
    <div className="gradient-bg">
      <div className="glass-container">
        <h2 className="neon-text">// Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="glitch-btn">
            {loading ? <div className="spinner"></div> : 'Enter Console'}
          </button>
        </form>
      </div>
    </div>
  );
}
