import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

function CardEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [getKonten,setKonten]= useState([]);
  const getProducts = async () => {
    const response = await Axios.get(`${import.meta.env.VITE_API_GET_EVENT}`);
    setKonten(response.data);
    };
  useEffect(() => {
      getProducts();
      window.scrollTo(0, 0);
    }, []); 
  return (
    <div className="w-full m-auto font-poppins font-normal">
      <div className="mt-20">
        <Slider {...settings}>
          {getKonten.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 bg-slate-500 flex justify-center items-center ">
                  <img src={`events/${item.Gambar}`} alt="" className="h-full w-full object-cover" />
                </div>

                <div className="h-[200px] flex flex-col items-center justify-between gap-4 p-4">
                  <div>
                    <h1 className="text-xl font-semibold text-center">{item.Nama_Event}</h1>
                    <h2 className="text-center my-3">{item.Jenis_Event}</h2>
                  </div>
                  <Link to={`/event/${item.ID_Event}`}>
                    <button className="bg-primary text-white text-lg px-6 py-1 rounded-full">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardEvents;
