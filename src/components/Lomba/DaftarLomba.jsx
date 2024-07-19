import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

function CardEvents() {
  const [getKonten, setKonten] = useState([]);

  const getProducts = async () => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_API_GET_EVENT}`);
      setKonten(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full m-auto font-poppins font-normal mt-32 text-center">
      <h4 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-gradient w-full">
        Lihat Daftar
      </h4>
      <h4 className="font-poppins font-semibold xs:text-[34px] text-[24px] text-white w-full">
        Lomba INSEVENT 2024
      </h4>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {getKonten.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="bg-white h-[450px] text-black rounded-xl overflow-hidden">
              <div className="h-56 bg-slate-500 flex justify-center items-center">
                <img
                  src={`events/${item.Gambar}`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-[200px] flex flex-col items-center justify-between gap-4 p-4">
                <div>
                  <h1 className="text-xl font-semibold text-center">
                    {item.Nama_Event}
                  </h1>
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
      </div>
    </div>
  );
}

export default CardEvents;
