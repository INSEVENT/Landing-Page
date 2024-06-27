import { sponsor } from "../constants";
import styles from "../style";

const Sponsorship = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {sponsor.map((spns) => (
      <div
        key={spns.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <img src={spns.value} className="" />
      </div>
    ))}
  </section>
);

export default Sponsorship;
