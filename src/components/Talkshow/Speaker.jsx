import { speaker } from "../../constants";
import styles from "../../style";

const Speaker = () => (
  <section
    className={`${styles.flexCenter} text-center flex-row flex-wrap sm:mb-20 mb-6`}
  >
    <h4 className="font-poppins font-semibold xs:text-[18px] text-[16px] text-gradient w-full">
      Mari Kita Lihat Sang Pembicara
    </h4>
    <h4 className="font-poppins font-semibold xs:text-[28px] text-[24px] text-white w-full">
      Temui Pembicara Kami
    </h4>
    {speaker.map((spns) => (
      <div
        key={spns.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <img src={spns.value} className="" />
      </div>
    ))}
  </section>
);

export default Speaker;
