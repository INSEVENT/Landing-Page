import styles from "../style";
import { logo } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`mt-32 flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Welcome</span> to{" "}
            <span className="text-white">INSEVENT</span> 2024
          </p>
          <img src={logo} alt="discount" className="w-[32px] h-[32px]" />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Find Amazing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Events</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Happening in INSEVENT 2024.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsam dicta suscipit inventore cumque officia
          veritatis, ullam rem rerum quas debitis explicabo excepturi dolor
          voluptate saepe repellendus ea neque accusamus?
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
