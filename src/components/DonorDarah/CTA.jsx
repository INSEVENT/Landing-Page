import { logo } from "../../assets";
import styles, { layout } from "../../style";

const CTA = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[26px] text-[20px] text-white w-full">
        Ayo Berpartisipasi dalam Donor Darah
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mari bersama-sama kita ciptakan perubahan positif. Partisipasi Anda
        dalam kegiatan ini akan membuat perbedaan besar bagi mereka yang
        membutuhkan. Jangan ragu, daftarkan diri Anda sekarang dan jadilah
        pahlawan bagi mereka yang membutuhkan darah.
      </p>
      <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Daftar Sekarang
      </button>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={logo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
  </section>
);

export default CTA;
