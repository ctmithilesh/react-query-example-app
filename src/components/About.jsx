import { useSelector } from "react-redux";
import Navigation from "./Navigation";

const About = () => {
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <Navigation />
      <h3>About </h3>
      <div>
        <h3>User is {email}</h3>
        <p> Token is {token} </p>
      </div>
    </>
  );
};

export default About;
