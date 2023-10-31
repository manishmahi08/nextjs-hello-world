import { useRouter } from 'next/router';
import { useEffect } from 'react';

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      // Replace this with your authentication logic
      const token = localStorage.getItem('token'); // Get the authentication token from a secure storage (e.g., localStorage or cookies)
      if (!token) {
        // If the user is not authenticated, redirect to the login page
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
}

export default withAuth;
