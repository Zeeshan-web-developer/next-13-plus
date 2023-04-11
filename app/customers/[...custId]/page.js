import React from 'react'

function page({ params }) {
    console.log("catch all",params)
  return (
    <div> catch all page</div>
  )
}

export default page