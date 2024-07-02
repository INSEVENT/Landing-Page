import styles from "../style";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Register";

const RegisterPages = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} min-h-screen mt-10`}
    >
      <div className={`${styles.boxWidth}`}>
        <Register />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default RegisterPages;
