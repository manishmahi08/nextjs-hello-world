import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

function HomePage() {
    return (
        <Layout>
            <h1>Home Page</h1>
            <p><Link href="/about">Go to About Page</Link></p>
            <p><Link href="/contact">Go to Contact Page</Link></p>
            <p><Link href="/dashboard/team">Go to Team Page</Link></p>
        </Layout>
      );
}

export default HomePage;
