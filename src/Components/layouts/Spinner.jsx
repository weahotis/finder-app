import React from 'react'
import loader from '../layouts/assets/loader.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
     <img src={loader} alt="" width={100} className="text-center mx-auto" />
    </div>
  )
}

export default Spinner
