import styles from "../style";
import Describe from "../components/Event/Describe";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

function Event(){
  const { id } = useParams();
  const [getKonten,setKonten]= useState([]);
  const getProducts = async () => {
    const response = await Axios.get(`${import.meta.env.VITE_API_GET_EVENT}/${id}`);
    setKonten(response.data);
    };
  useEffect(() => {
      getProducts();
      window.scrollTo(0, 0);
    }, []); 
  return(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Describe getkonten={getKonten}/>
        </div>
      </div>
    </div>
  )
};

export default Event;
