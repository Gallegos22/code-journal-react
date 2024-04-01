import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <h1 className="header">Code Journal</h1>
      <Link to="/" className="title">
        Entries
      </Link>
      <Outlet />
    </div>
  );
}
