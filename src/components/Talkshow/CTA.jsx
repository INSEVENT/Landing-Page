import { logo } from "../../assets";
import styles, { layout } from "../../style";

const CTA = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={logo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[26px] text-[20px] text-white w-full">
        Pameran Karya Mahasiswa Sistem Informasi
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kegiatan ini adalah sebuah kegiatan yang menampilkan hasil karya
        mahasiswa program studi Sistem Informasi. Hasil karya yang akan
        ditampilkan, seperti Design UI/UX, Website, dan lainnya.
      </p>
      {/* <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Daftar Sekarang
      </button> */}
    </div>
  </section>
);

export default CTA;
