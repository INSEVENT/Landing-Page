import styles, { layout } from "../../style";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";

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
              <p className={`${styles.paragraph}  mt-5`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
                reprehenderit explicabo exercitationem, repudiandae ab harum, odio
                dolore amet quae est eligendi rem quos inventore! Similique, at
                impedit? Dolorum, quas minus?
              </p>
            </div>
  
            <div>
              <h1 className="text-white mb-10 font-poppins font-semibold xs:text-[28px] text-[20px]">
                Kategori {item.Jenis_Event}
              </h1>
              <h2 className="p-2 px-4 rounded-full bg-white text-black font-poppins font-semibold xs:text-[16px] text-[14px] mb-5">
                Deskripsi
              </h2>
              <h2 className="p-2 px-4 rounded-full bg-white text-black font-poppins font-semibold xs:text-[16px] text-[14px] mb-5">
                Deskripsi
              </h2>
              <h2 className="p-2 px-4 rounded-full bg-white text-black font-poppins font-semibold xs:text-[16px] text-[14px] mb-5">
                Deskripsi
              </h2>
            </div>
          </div>
  
          <div className="mt-10">
            <h1 className="text-white mb-5 font-poppins font-semibold xs:text-[28px] text-[20px]">
              Information Important
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <h4 className="text-white font-poppins flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Mulawarman University
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <SlCalender className="mr-2" /> 00 September 2024
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Mulawarman University
              </h4>
              <h4 className="text-white font-poppins flex items-center">
                <SlCalender className="mr-2" /> 00 September 2024
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
