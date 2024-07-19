import styles from "../../style";
import { Link } from "react-router-dom";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Ayo Ikuti Event Lomba Sekarang!</h2>
      <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
        Bergabunglah dalam kompetisi seru ini dan tunjukkan kemampuan terbaik
        Anda! Tantang diri Anda, hadapi pesaing tangguh, dan raih kemenangan.
        Dalam kompetisi ini, Anda tidak hanya akan mendapatkan pengalaman
        berharga, tetapi juga kesempatan untuk memperlihatkan bakat dan
        kreativitas Anda. Jangan lewatkan peluang ini untuk bersinar dan menjadi
        yang terbaik di bidang Anda.
      </p>
      <div className="mt-5">
        <Link to={"/lomba"}>
          <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Selengkapnya
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
