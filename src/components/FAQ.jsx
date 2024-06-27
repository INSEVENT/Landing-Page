import React, { useState, useRef } from "react";
import styles from "../style";

const AccordionItem = ({
  idx,
  title,
  children,
  activeIndex,
  setActiveIndex,
}) => {
  const contentRef = useRef(null);

  const handleClick = () => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <li className="bg-slate-300 px-8 py-4 my-2 shadow-lg">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-primary h-6 w-6 transform transition-transform duration-500 ${
            activeIndex === idx ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        ref={contentRef}
        className={`border-l-2 border-primary overflow-hidden transition-all duration-500`}
        style={{
          maxHeight:
            activeIndex === idx
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
        }}
      >
        <p className="p-3 text-gray-900">{children}</p>
      </div>
    </li>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className="h-screen p-5">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-3/4 my-1">
          <h2 className={`${styles.heading2} text-gradient mb-5 text-center`}>
            We Are Aware of <span className="font-bold">Your Opinions</span>
          </h2>
          <p className="font-poppins m-5 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            architecto ut quasi assumenda. Dicta reiciendis iusto aut eos
            dolorum. Id deserunt aspernatur quisquam libero illum voluptate
            dolore qui atque repellat?
          </p>
          <ul className="flex flex-col">
            <AccordionItem
              idx={1}
              title="FAQ 1"
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              magnam at exercitationem culpa sed explicabo, dolor praesentium
              similique cupiditate laboriosam amet earum laborum ratione natus
              deserunt placeat voluptatum ipsum fugiat.
            </AccordionItem>
            <AccordionItem
              idx={2}
              title="FAQ 2"
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              magnam at exercitationem culpa sed explicabo, dolor praesentium
              similique cupiditate laboriosam amet earum laborum ratione natus
              deserunt placeat voluptatum ipsum fugiat.
            </AccordionItem>
            <AccordionItem
              idx={3}
              title="FAQ 3"
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              magnam at exercitationem culpa sed explicabo, dolor praesentium
              similique cupiditate laboriosam amet earum laborum ratione natus
              deserunt placeat voluptatum ipsum fugiat.
            </AccordionItem>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
