import { useState } from 'react';
import Layout from '../components/Layout';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // User was successfully created
        const data = await response.json();
        console.log('User created:', data.user);
        // You can add logic here to redirect to a success page or show a success message.
      } else {
        // Handle the error case
        console.error('Error creating user');
        // You can add logic here to show an error message to the user.
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle other potential errors
    }
  };

  return (

    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>

    </Layout>
  );
};

export default SignupForm;
