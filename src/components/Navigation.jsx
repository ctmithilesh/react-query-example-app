import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Data </Link>
      </li>
      <li>
        <Link to="/about">About </Link>
      </li>
      <li>
        <Link to="/add-customer">Add Customer </Link>
      </li>
    </ul>
  );
};

export default Navigation;
