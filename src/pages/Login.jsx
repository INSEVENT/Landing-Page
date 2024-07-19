import styles from "../style";
import logo from '../assets/logo.png';
import Login from "../components/Login";
import { Link } from "react-router-dom";

const LoginPages = () => (
  <div className="bg-primary w-full overflow-hidden h-screen">
    <div
      className={`bg-primary ${styles.paddingX} h-full flex justify-between my-5`}
    >
      <div className="h-full">
        <Link to='/'>
          <img className="w-24 ml-5" src={logo} alt="" />
        </Link>
        <div className="flex justify-center items-center">
          <Login />
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center bg-black-gradient-2">
          <img className="w-96" src={logo} alt="" />
      </div>
    </div>
  </div>
);

export default LoginPages;
