import { Outlet } from 'react-router-dom';

export function ViewEntries() {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>dummy</li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
