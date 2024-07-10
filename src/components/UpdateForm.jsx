import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateToken } from "../store/user/user.reducer";

const UpdateForm = () => {
  const token = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <div>
          <input
            placeholder="Email"
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>
        <div>
          <input
            placeholder="Token"
            onChange={(e) => dispatch(updateToken(e.target.value))}
          />
        </div>
        <div>
          <button>Submit </button>
        </div>
      </form>
      <div>
        <h3>{token}</h3>
        <h3>{email}</h3>
      </div>
    </>
  );
};

export default UpdateForm;
