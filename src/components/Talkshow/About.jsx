import { logo } from "../../assets";
import styles, { layout } from "../../style";

const About = ({getkonten}) => {
  return(
    <section className={layout.sectionReverse}>
      {getkonten.map((item,idx)=>(
        <>
          <div key={idx} className={layout.sectionInfo}>
            <h4 className="text-white font-poppins">
              Knowing More INSEVENT 2024
            </h4>
            <h2 className={styles.heading2}>
              Why You Must Join{" "}
              <span className="font-bold text-gradient">This Event</span>
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              reprehenderit explicabo exercitationem, repudiandae ab harum, odio
              dolore amet quae est eligendi rem quos inventore! Similique, at impedit?
              Dolorum, quas minus?
            </p>
          </div>
          <div className={layout.sectionImgReverse}>
            <img src={logo} alt="logo" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
        </>
      ))}
    </section>
  )
};

export default About;
