import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <h1 className="header">Code Journal</h1>
      <Link to="/about" className="title">
        ViewEntries
      </Link>
      <Outlet />
    </div>
  );
}
