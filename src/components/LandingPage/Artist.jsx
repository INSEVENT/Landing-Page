import { logo } from "../../assets";
import styles, { layout } from "../../style";

const Artist = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={logo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Temui <span className="font-bold text-gradient">Guest Star</span>
      </h2>
      {/* <h4 className="text-white font-poppins">Artist Name</h4> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Jangan lewatkan kesempatan untuk bertemu dengan bintang tamu spesial
        kami! Nikmati penampilan memukau dan interaksi langsung dengan guest
        star yang akan membuat acara penutupan ini semakin berkesan. Bersiaplah
        untuk terinspirasi dan terhibur oleh bakat luar biasa yang akan mengisi
        malam kita.
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

export default Artist;
