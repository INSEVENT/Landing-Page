import styles, { layout } from "../../style";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaMoneyBill1Wave, FaPerson } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

function Describe({getkonten}) {
  return(
    <>
    {getkonten.map((item,idx)=>(
      <section key={idx} className="mt-12">
        <div className={layout.sectionImgReverse}>
          <img
            src={`/events/${item.Gambar}`}
            alt="logo"
            className="mt-10 w-full object-cover h-96 relative z-[5]"
          />
        </div>
        <div className={`${layout.sectionInfo} my-3`}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h1 className="text-white font-poppins mb-5 font-semibold xs:text-[28px] text-[20px]">
                {item.Nama_Event}
              </h1>
              <h4 className="text-white font-poppins flex items-center mb-5">
                <FaMapMarkerAlt className="mr-2" /> Mulawarman University
              </h4>
              <h4 className="text-white font-poppins flex items-center mb-5">
                <SlCalender className="mr-2" /> {new Date(item.Start_Date).toLocaleString().slice(0,9)}
              </h4>
            </div>
  
            <div>
              <h1 className="text-white mb-3 font-poppins font-semibold xs:text-[28px] text-[20px]">
                Ketentuan {item.Jenis_Event}
              </h1>
              <p className={`${styles.paragraph}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
                reprehenderit explicabo exercitationem, repudiandae ab harum, odio
                dolore amet quae est eligendi rem quos inventore! Similique, at
                impedit? Dolorum, quas minus?
              </p>
              <button
                type="button"
                className={`mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:shadow-lg hover:shadow-white ${styles}`}
              >
                Register Now
              </button>
              <button
                type="button"
                className={`mt-5 py-4 mx-3 px-6 font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none hover:shadow-lg hover:shadow-cyan-300 ${styles}`}
              >
                Guidebook
              </button>
            </div>
          </div>
  
          <div className="mt-10">
            <h1 className="text-white mb-5 font-poppins font-semibold xs:text-[28px] text-[20px]">
              Information Important
            </h1>
            <div className="grid grid-cols-4 gap-4 w-2/4 text-center">
              <h4 className="text-white font-poppins flex items-center">
                <FaPerson className="mr-2" /> TSO
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <FaMoneyBill1Wave className="mr-2" /> Fee Lomba
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <FaPhone className="mr-2" /> CP
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <SiInstagram className="mr-2" /> Insevent_2024
              </h4>
            </div>
            <p className={`${styles.paragraph} mt-5`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              reprehenderit explicabo exercitationem, repudiandae ab harum, odio
              dolore amet quae est eligendi rem quos inventore! Similique, at
              impedit? Dolorum, quas minus?
            </p>
          </div>
        </div>
      </section>
    ))}
    </>
  )
};

export default Describe;
