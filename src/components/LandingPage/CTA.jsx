import styles from "../../style";
import Button from "../Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's join the competition now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste at
        eaque, consectetur dicta autem harum? Quam voluptatem saepe incidunt,
        error, nisi adipisci delectus, sed necessitatibus id inventore odit
        voluptate!
      </p>
      <div className="mt-5">
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
