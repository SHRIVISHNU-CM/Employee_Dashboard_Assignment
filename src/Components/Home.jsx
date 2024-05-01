import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Loader from './Loader'

function Home() {
    const [isLoading ,setisLoading]  =useState(true)
    

    useEffect(()=>{

        const timmer = setTimeout(()=>{
            setisLoading(false)
        },2000)
        return ()=>clearTimeout(timmer)
    },[isLoading])
    return (
        <>
            <NavBar />
            <header className='flex justify-center gap-3 my-4'>
                <input
                    className='px-4 py-2 outline-blue-600 border border-blue-300'
                    type='text'
                    placeholder='Search Employee ID here...' />
                <button className='border px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-600'>Search</button>
            </header>
           {isLoading? <Loader/> :<p>Hi vishnu</p>}

        </>
    )
}

export default Home