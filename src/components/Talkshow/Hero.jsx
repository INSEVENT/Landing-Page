import styles from "../../style";
import { logo } from "../../assets";
import Button from "../Button";

const Hero = ({getkonten}) => {
  const sliceText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ');
  };
  return (
    <section
      id="home"
      className={`mt-20 flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {getkonten.map((item,idx)=>(
        <div
          key={idx}
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Welcome</span> to{" "}
              <span className="text-white">INSEVENT</span> 2024
            </p>
            <img src={logo} alt="discount" className="w-[32px] h-[32px]" />
          </div> */}

          <div className="flex flex-col justify-between items-center w-full text-center">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              {sliceText(item.Nama_Event, 7)} <br className="sm:block hidden" />{" "}
              <span className="text-gradient">TALKSHOW 2024</span>{" "}
            </h1>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {new Date(item.Start_Date).toLocaleString().slice(0,9)} | At Mulawarman University
            </p>
            <button
              type="button"
              className={`py-4 mt-10 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Register
            </button>
          </div>

          {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          </h1> */}
        </div>
      ))}

      {/* <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div> */}
    </section>
  );
};

export default Hero;
