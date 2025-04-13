import { useState, useEffect } from 'react';
import '../GradientBackground.css';

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    mobile: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmittedData([...submittedData, data]);
        setFormData({ name: '', rollNumber: '', email: '', mobile: '' });
      } else {
        alert(data.error || 'Submission failed');
      }
    } catch (error) {
      alert('Server error');
    }
  };

  return (
    <div className="gradient-bg">
      <div className="glass-container">
        <h2>// Student Form</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>

        <h3>// Submitted Students</h3>
        <ul>
          {submittedData.map((student, index) => (
            <li key={index}>
              {student.name} | {student.rollNumber} | {student.email} | {student.mobile}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
