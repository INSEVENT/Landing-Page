import styles from "../../style";
import dance from "../../../public/events/dancecover.png";

const CardDeal = () => (
  <section
    className="flex items-center justify-center text-center text-white h-[75vh]"
    style={{ backgroundImage: `url(${dance})` }}
  >
    <div className="">
      <h2 className={styles.heading2}>Closing Ceremony</h2>
      <p className="font-poppins mt-5">
        Closing ceremony adalah acara penutupan yang biasanya digelar dalam
        sebuah rangkaian event, seperti festival, pertandingan, perlombaan atau
        kompetisi. Pada Closing Ceremony kali ini akan di isi dengan Guest Star,
        Juara I Cover Dance, dan Perwakilan Mahasiswa Sistem Informasi.
      </p>

      {/* <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        See More
      </button> */}
    </div>
  </section>
);

export default CardDeal;
