import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Loader from './Loader'
import Card from './Card'
import axios from "axios"
import { Link } from 'react-router-dom'

function Home() {
    const [isLoading, setisLoading] = useState(true)
    const [Data, setData] = useState([])
    const [error, setError] = useState("")
    const [SearchID, setSearchId] = useState("")
    const [result, setResult] = useState("")
    const key1 = "https://api.allorigins.win/raw?url="
    const api_key = "https://api.allorigins.win/raw?url=https://dummy.restapiexample.com/api/v1/employees"

    const api = () => {
        axios.get(api_key)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
            .catch((e) => {
                setError(e.message)
            })
    }
    useEffect(() => {
        const Timmer = setTimeout(()=>{
            setisLoading(false)
            api()
        },1000)
        return()=>clearTimeout(Timmer)
        
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const result = Data.find((el) => el.id === parseInt(SearchID))
        setResult(result)
    }

    return (
        <>
            <NavBar />
            <header className='flex justify-center gap-3 my-4'>
                <form >
                    <input
                        value={SearchID}
                        onChange={e => setSearchId(e.target.value)}
                        className='px-4 py-2 outline-blue-600 border border-blue-300'
                        type='text'
                        placeholder='Search Employee ID here...' />
                    <button onClick={handleSubmit} className='border px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-600'>Search</button>
                </form>

            </header>
            {error && <p className='text-lg text-red-500 text-center'>{error}</p>}
            {result}
            <div className='flex justify-center flex-wrap md:justify-between lg:justify-between w-full'>
                {isLoading? <Loader/> : Data && Data.map((el, i) => {
                    return (

                        <div key={i} className='w-[300px] h-min text-center border shadow-lg hover:shadow-2xl p-2 m-3 rounded-lg'>
                            <h1>Employee Name :</h1>
                            <p>{el.employee_name}</p>
                            <div>
                                <h1>Employee Name :</h1>
                                <p>{el.employee_salary}</p>
                            </div>
                            <div>
                                <h1>Employee Name :</h1>
                                <p>{el.employee_age}</p>
                            </div>
                            <div className='flex gap-2 justify-end'>
                                <Link to={`/${el.id}`} className='px-4 py-2 bg-lime-400'>Edit</Link>
                                <button className='px-4 py-2 bg-violet-400'>Delete</button>
                            </div>

                        </div>
                    )
                })
                }
            </div>


        </>
    )
}

export default Home