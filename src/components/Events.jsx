import { logo } from "../assets";
import Button from "./Button";
import styles from "../style";

const Events = () => (
  <section id="events" className="">
    <div className="text-start text-white">
      <h2 className={styles.heading2}>
        Decide to <span className="font-bold">Join</span> The Event
      </h2>
      <p className="mt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        molestiae voluptas dignissimos error facilis? Rem deserunt impedit, quia
        quas laborum voluptate ea hic, incidunt vero accusamus ipsa, doloribus
        cupiditate nobis!
      </p>
      <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Attend The Event
      </button>
    </div>

    <div className="mt-10 w-full flex justify-center">
      <img src={logo} alt="logo" className="w-auto h-auto max-w-56" />
    </div>
  </section>
);

export default Events;
