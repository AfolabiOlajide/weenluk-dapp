import React from 'react'
import { RotateLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[50vh]'><RotateLoader color="#E0F64B" /></div>
    )
}

export default Loader