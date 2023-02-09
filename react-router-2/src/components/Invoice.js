import React from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
  let invoiceid = useParams().invoiceid
  console.log(invoiceid);
  let invoice = invoiceid === "1" ? "Google" : "Apple" 
  return (
    <div>
        <h3 className="p-3">Invoice #{invoiceid} for {invoice}</h3>
    </div>
  )
}
