import Link from 'next/link';
import Layout from '../components/Layout';

const UserPage = ({ users }) => {
  return (
    <Layout>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <Link href={`/user/${user._id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/user'); // Update with your server URL
    const users = await response.json();
    return {
      props: { users },
    };
  } catch (error) {
    return {
      props: { users: [] },
    };
  }
}

export default UserPage;
