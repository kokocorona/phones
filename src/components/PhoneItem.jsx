import React from 'react'
import { Link } from 'react-router-dom'

export default function PhoneItem({item}) {
  return (
    <div className='col-md-6 border p-2'>
      <h3>{item.name}</h3>
      <div>Price:{item.price}</div>
      <div>* Score:{item.total_score}</div>
      <Link to={"/phones/"+item.id} className='btn btn-dark'>More info</Link>
    </div>
  )
}
