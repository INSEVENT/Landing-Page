import { logo } from "../../assets";
import styles, { layout } from "../../style";

const CTA = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={logo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[26px] text-[20px] text-white w-full">
        Share Idea & Learn New
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        reprehenderit explicabo exercitationem, repudiandae ab harum, odio
        dolore amet quae est eligendi rem quos inventore! Similique, at impedit?
        Dolorum, quas minus?
      </p>
      <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Register Now
      </button>
    </div>
  </section>
);

export default CTA;
