import styles from "../style";
import Lomba from "../components/Lomba/DaftarLomba";

const LombaPages = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Lomba />
      </div>
    </div>
  </div>
);

export default LombaPages;
