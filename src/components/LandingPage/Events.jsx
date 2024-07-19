import { logo, poster } from "../../assets";
import styles from "../../style";

const Events = () => (
  <section id="events" className="">
    <div className="text-start text-white">
      <h2
        className={`flex-1 font-poppins font-semibold ss:text-[40px] text-[24px] text-white ss:leading-[100.8px] leading-[75px] text-center`}
      >
        Bergabunglah dengan{" "}
        <span className="font-bold text-gradient">Event</span> Kami
      </h2>
      {/* <p className={`${styles.paragraph} mt-5`}>
        Bergabunglah dengan kami untuk acara yang tak terlupakan! Nikmati
        berbagai aktivitas menarik. Dalam acara ini, Anda akan mendapatkan
        pengalaman yang luar biasa, belajar dari para ahli di bidangnya, dan
        membawa pulang banyak ilmu dan inspirasi.
      </p> */}
      {/* <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Attend The Event
      </button> */}
    </div>

    <div className="mt-10 w-full flex justify-center">
      <img src={poster} alt="poster" className="w-auto h-auto max-w-96" />
    </div>
  </section>
);

export default Events;
