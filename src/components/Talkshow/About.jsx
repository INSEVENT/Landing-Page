import { logo } from "../../assets";
import styles, { layout } from "../../style";

const About = ({ getkonten }) => {
  return (
    <section className={layout.sectionReverse}>
      {getkonten.map((item, idx) => (
        <>
          <div key={idx} className={layout.sectionInfo}>
            <h4 className="text-white font-poppins">Ketahui Lebih Lanjut</h4>
            <h2 className={styles.heading2}>
              Mengapa Harus Mengikuti{" "}
              <span className="font-bold text-gradient">Acara Ini?</span>
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Talkshow ini akan membahas pentingnya menemukan platform yang
              tepat untuk personal branding, strategi efektif untuk
              membangunnya, serta cara mengatasi kurangnya kepercayaan diri.
              Peserta akan memahami konsep personal branding, tujuan dan manfaat
              jangka panjangnya, dampak positifnya pada karir dan kehidupan
              pribadi, serta peran penting public speaking dalam memperkuat
              personal branding.
            </p>
          </div>
          <div className={layout.sectionImgReverse}>
            <img
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </>
      ))}
    </section>
  );
};

export default About;
