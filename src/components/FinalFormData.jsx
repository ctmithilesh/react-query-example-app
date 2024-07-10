import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinalFormData = () => {
  const name = useSelector((state) => state.customer.name);
  const email = useSelector((state) => state.customer.email);
  const phone = useSelector((state) => state.customer.phone);

  const navigate = useNavigate();
  const _handleNavigation = () => {
    navigate("/");
  };
  return (
    <div>
      <h3>Confirm Details </h3>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <button onClick={_handleNavigation}>Confirm </button>
    </div>
  );
};

export default FinalFormData;
