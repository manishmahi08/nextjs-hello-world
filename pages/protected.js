import Layout from '../components/Layout';
import withAuth from '../withAuth.js';

const ProtectedPage = () => {
  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>This is a protected page.</p>
    </Layout>
  );
};

export default withAuth(ProtectedPage);
