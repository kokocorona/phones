import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
export default function PhoneInfo() {
  const [infoItem,setInfoItem] = useState({})
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try {
      const url = `https://monkeys.co.il/api2/phones/single.php?id=${params["id"]}`
      const {data} = await axios.get(url);
      console.log(data[0])
      setInfoItem(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container text-center'>
      <h2>{infoItem.name}</h2>
      <img src={infoItem.img_url} height={180} alt="phone" />
      <div>Gpu:{infoItem.gpu} | Cpu: {infoItem.cpu}</div>
      <div>Battery score: {infoItem.battery_score}</div>
      <button onClick={() => {
        nav(-1); // -1 כמו ללחוץ בק בדפדפן
      }} className='btn btn-dark mt-3'>Back to list</button>
    </div>
  )
}
