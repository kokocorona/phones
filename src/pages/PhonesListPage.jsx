import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import PhoneItem from '../components/PhoneItem';

export default function PhonesListPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  // כדי לאסוף משתני קווארי מהכתובת ?s=
  const [query] = useSearchParams();
  const inputRef = useRef()
  // יאפשר שיגור לכתובת בתוך האפליקציה
  const nav = useNavigate();


  // [query] -> כל פעם שהקווארי ישתנה יפעיל מחדש את הפונקציה
  useEffect(() => {
    doApi();
  }, [query])

  const doApi = async () => {
    try {
      // || -> אם לא קיבל קווארי אס הערך ברירת מחדל שלו יהיה אייפון
      const queryS = query.get("s") || "iphone";
      const url = `https://monkeys.co.il/api2/phones/search.php?s=${queryS}`
      const {data} = await axios.get(url);
      console.log(data);
      // בדיקה שקיבלנו מערך ואכן מצא פרטים
      if(data.length > 1){
        setList(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSub = (e) => {
    // ימנע את הברירת מחדל של טופס לשגר את עצמו
    e.preventDefault();
    const input_val = inputRef.current.value
    console.log(input_val)
    nav("/phones?s="+input_val)
  }

  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <div className='col-md-5 d-flex my-3'>
          <input ref={inputRef} placeholder='search for phones...' type="search" className='form-control' />
          <button className='btn btn-dark'>Search</button>
        </div>
      </form>
      <article>
        <h1>Phone list:</h1>
        <div className='row'>
          {list.map(item => {
            return(
              <PhoneItem key={item.id} item={item} />
            )
          })}
        </div>
      </article>
    </div>
  )
}
