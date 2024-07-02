import styles from "../style";
import Navbar from "../components/Navbar";
import Hero from "../components/LandingPage/Hero";
import Events from "../components/LandingPage/Events";
import FAQ from "../components/FAQ";
import Artist from "../components/LandingPage/Artist";
import CTA from "../components/LandingPage/CTA";
import Sponsorship from "../components/Sponsorship";
import CardDeal from "../components/LandingPage/CardDeal";
import Footer from "../components/Footer";
import List from "../components/LandingPage/List";

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
        <Sponsorship />
        <Events />
        <List />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} min-h-screen mt-10`}
    >
      <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Artist />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <FAQ />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
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
