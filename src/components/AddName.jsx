import { useDispatch } from "react-redux";
import Navigation from "./Navigation";
import { updateName } from "../store/customer-data-form/customer-data-form.reducer";
import { useNavigate } from "react-router-dom";

const AddName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _saveName = (e) => {
    const { target } = e;
    const { value } = target;
    dispatch(updateName(value));
  };

  const handleNavigation = () => {
    console.log("Hi");
    navigate("/add-email");
  };
  return (
    <>
      <Navigation />

      <input placeholder="Add Name" onChange={_saveName} />
      <button onClick={handleNavigation}>Next</button>
    </>
  );
};

export default AddName;
