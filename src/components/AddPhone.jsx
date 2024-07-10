import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePhone } from "../store/customer-data-form/customer-data-form.reducer";

const AddPhone = () => {
  const name = useSelector((state) => state.customer.name);
  const email = useSelector((state) => state.customer.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _handleNavigation = () => {
    navigate("/confirm-details");
  };
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
      <div>
        <input
          placeholder="Enter Phone"
          onChange={(e) => dispatch(updatePhone(e.target.value))}
        />
        <button onClick={_handleNavigation}>Next</button>
      </div>
    </>
  );
};

export default AddPhone;
