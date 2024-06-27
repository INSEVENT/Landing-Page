import styles from "../style";

const CardDeal = () => (
  <section className="flex items-center justify-center text-center text-white h-[75vh]">
    <div className="">
      <h2 className={styles.heading2}>Get Yours Fisrt Ticket</h2>
      <p className="font-poppins">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        doloremque tenetur similique. Tenetur illum praesentium perspiciatis
        veniam, ipsa enim cumque in sunt suscipit voluptate fugit quis cum rem
        qui! Ipsa?
      </p>

      <button
        type="button"
        className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        See More
      </button>
    </div>
  </section>
);

export default CardDeal;
