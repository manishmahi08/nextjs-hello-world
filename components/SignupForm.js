import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignup = async (e) => {
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
        window.location.href = '/login'; // Replace with your desired redirect URL
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Sign Up</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Username/Email</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
