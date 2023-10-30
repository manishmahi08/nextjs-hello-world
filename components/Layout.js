import LogoutButton from './LogoutButton';
const Layout = ({ children }) => {
    return (
      <div>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/protected">Protected</a>
            <a href="/logout">Logout</a>
          </nav>
        </header>
        <main>{children}</main>
        <LogoutButton />
      </div>
    );
  };
  export default Layout;
  