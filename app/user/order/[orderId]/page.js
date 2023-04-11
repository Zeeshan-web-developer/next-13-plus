import React from 'react'


// path /user/order/[orderId]
function page({ params }) {
    console.log(params)
  return (
      <div>#orderId { params?.orderId}  details</div>
  )
}

export default page