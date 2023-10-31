import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const UserProfile = ({ user }) => {
  const router = useRouter();
  const { userid } = router.query;

  return (
    <Layout>
      <div>
        <h1>User Profile</h1>
        {user ? (
          <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details here */}
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { userid } = params;
    // Fetch user data based on userid
    const response = await fetch(`http://localhost:3000/api/user/${userid}`); // Update with your server URL
    const user = await response.json();
    return {
      props: { user },
    };
  } catch (error) {
    return {
      props: { user: null },
    };
  }
}

export default UserProfile;
