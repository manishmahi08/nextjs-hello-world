// pages/_app.js

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
