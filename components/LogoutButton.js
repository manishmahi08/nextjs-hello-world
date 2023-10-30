// components/LogoutButton.js

const LogoutButton = () => {
    const handleLogout = () => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      
      // Redirect to the login page or perform any other necessary actions
      window.location.href = '/login'; // Replace with your desired redirect URL
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  };
  
  export default LogoutButton;
  