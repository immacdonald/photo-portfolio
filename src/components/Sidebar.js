import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/biography">Biography</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
        </ul>
      </nav>
    <Outlet/>
    </div>
  )
};

export default Sidebar;