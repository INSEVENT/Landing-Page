import styles from "../style";
import Navbar from "../components/Navbar";
import Hero from "../components/Talkshow/Hero";
import About from "../components/Talkshow/About";
import Speaker from "../components/Talkshow/Speaker";
import CTA from "../components/Talkshow/CTA";
import Sponsorship from "../components/Sponsorship";
import { useEffect, useState } from "react";
import Axios from "axios";

function Talkshow() {
  const [getKonten, setKonten] = useState([]);
  const getProducts = async () => {
    const response = await Axios.get(`${import.meta.env.VITE_API_GET_EVENT}/1`);
    setKonten(response.data);
  };
  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero getkonten={getKonten} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About getkonten={getKonten} />
          <Speaker />
          <CTA />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Sponsorship />
        </div>
      </div>
    </div>
  );
}

export default Talkshow;
