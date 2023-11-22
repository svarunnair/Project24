import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'
import QRCode from "react-qr-code";
function Payment() {

  const payment=useSelector((store)=>store.data.getPayment)
  const dispatch=useDispatch()

  console.log("payment",payment)

useEffect(()=>{
  dispatch(getPayment())
},[])

  return (
    <div>Payment

      {payment?.map((item)=>(
        <>
        {item.iten}

   



        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
  <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={item.qrImage}
    viewBox={`0 0 256 256`}
  />
</div>
        </>
      ))}






    </div>
  )
}

export default Payment