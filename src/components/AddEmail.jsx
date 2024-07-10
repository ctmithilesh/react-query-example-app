import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateEmail } from "../store/customer-data-form/customer-data-form.reducer";

const AddEmail = () => {
  const name = useSelector((state) => state.customer.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _handleNavigation = () => {
    navigate("/add-phone");
  };
  return (
    <>
      <ul>
        <li>{name}</li>
      </ul>
      <div>
        <input
          placeholder="Enter Email"
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
        <button onClick={_handleNavigation}>Next</button>
      </div>
    </>
  );
};

export default AddEmail;
