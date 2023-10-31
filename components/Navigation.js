
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
        setAuthenticated(true);
    } else {
        setAuthenticated(false);
    }
    }, []);

    const handleLogout = () => {
        // Handle logout logic (e.g., remove token from localStorage)
        localStorage.removeItem('token');
        setAuthenticated(false);
        window.location.href = '/'; // Replace with your desired redirect URL
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">MyApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Users</a>
                    </li>
                    {authenticated ? (
                    <>
                        {/* Display the logout button when the user is authenticated */}
                        <li>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/protected">Protected page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleLogout}>Log out</a>
                        </li>
                    </>
                    ) : (
                    <>
                        {/* Display the login and signup links when the user is not authenticated */}
                        <li>
                        <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li>
                        <Link className="nav-link" href="/signup">Signup</Link>
                        </li>
                    </>
                    )}
                </ul>
            </div>
        </nav>
      
    );
  };
  
  export default Navigation;