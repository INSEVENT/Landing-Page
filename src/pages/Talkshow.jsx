import styles from "../style";
import Navbar from "../components/Navbar";
import Hero from "../components/Talkshow/Hero";
import About from "../components/Talkshow/About";
import Speaker from "../components/Talkshow/Speaker";
import CTA from "../components/Talkshow/CTA";
import Sponsorship from "../components/Sponsorship";
import Footer from "../components/Footer";

const LandingPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Speaker />
        <CTA />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Sponsorship />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default LandingPage;
