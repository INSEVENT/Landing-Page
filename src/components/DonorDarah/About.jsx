import { logo } from "../../assets";
import styles, { layout } from "../../style";

const About = ({ getkonten }) => {
  return (
    <section className={layout.sectionReverse}>
      {getkonten.map((item, idx) => (
        <>
          <div className={layout.sectionImgReverse}>
            <img
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
          <div key={idx} className={layout.sectionInfo}>
            <h4 className="text-white font-poppins">
              Donor Darah INSEVENT 2024
            </h4>
            <h2 className={styles.heading2}>
              Kenapa harus berpartisipasi{" "}
              <span className="font-bold text-gradient">
                dalam donor darah?
              </span>
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Donor darah adalah tindakan mulia yang bisa menyelamatkan nyawa.
              Setiap tetes darah yang Anda sumbangkan dapat memberikan harapan
              baru bagi pasien yang membutuhkan transfusi darah. Kegiatan Donor
              Darah merupakan kegiatan sosial dalam bidang kesehatan mendukung
              Palang Merah Indonesia (PMI) dalam mengumpul pasokan darah.
            </p>
          </div>
        </>
      ))}
    </section>
  );
};

export default About;
