import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Loader from './Loader'
import axios from "axios"
import { Link } from 'react-router-dom'

function Home() {
    const [isLoading, setisLoading] = useState(true)
    const [Data, setData] = useState([])
    const [error, setError] = useState("")
    const [SearchID, setSearchId] = useState("")
    const [result, setResult] = useState("")
    const [handle, setHandle] = useState("")
    const key1 = "https://api.allorigins.win/raw?url=" // use this to prevent too many requests from api
    const api_key = "https://dummy.restapiexample.com/api/v1/employees"

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
        const Timmer = setTimeout(() => {
            setisLoading(false)
            api()
        }, 1000)
        return () => clearTimeout(Timmer)

    }, [isLoading])
    const handleSubmit = (e) => {
        e.preventDefault()
        const result = Data.find((el) => el.id === parseInt(SearchID))
        if (!result) {
            setHandle("Enter Correct Employee ID")
        }
        setResult(result)
    }
    const HandleDelete = (id) => {
        const deleted = Data.filter((el) => el.id !== id)
        setData(deleted)
    }

    return (
        <>
            <NavBar />

            {/* //input field */}
            <header className='flex justify-center gap-2 my-4  '>
                <input
                    value={SearchID}
                    onChange={e => setSearchId(e.target.value)}
                    className='px-6 py-2 outline-blue-600 border border-blue-300 rounded-md'
                    type='text'
                    placeholder='Search Employee ID here...' />
                <button onClick={handleSubmit} className='border px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-600'>Search</button>


            </header>

            {/* //Error  */}
            {error && <p className='text-lg text-red-500 text-center'>{error}</p>}

            {/* //search result */}
            {handle ? <p className='text-center font-semibold text-xl'>{handle}</p> :
                result && <div className="border w-[400px] text-center shadow-lg rounded-lg hover:shadow-2xl  h-min p-3 border-b-4 border-b-blue-500 block mx-auto">
                    <div>
                        <h1 className='text-2xl font-bold text-blue-500'>Employee Details</h1>
                        <h1 className='text-2xl font-semibold'>Name:</h1>
                        <h1 className='text-xl my-2'> {result.employee_name}</h1>
                        <h1 className='text-2xl font-semibold'>Salary:</h1>
                        <h1 className='text-xl my-2'>{result.employee_salary}</h1>
                        <h1 className='text-2xl font-semibold'>Age:</h1>
                        <h1 className='text-xl my-2'>{result.employee_age}</h1>
                    </div>

                    <Link to={`/${result.id}`} className='px-4 py-2 m-3 rounded-md text-white bg-lime-400 hover:bg-lime-700'>Edit</Link>

                </div>}

            {/* /*all cards of employess */}
            <div className='flex justify-center flex-wrap md:justify-between lg:justify-between w-full my-4'>
                {isLoading ? <Loader /> : Data && Data.map((el, i) => {
                    return (

                        <div key={i} className='w-[300px] h-min text-center border shadow-lg hover:shadow-2xl p-4 m-3 rounded-lg  border-b-4 border-b-violet-500'>
                            <h1 className='text-xl font-semibold'>Employee Name :</h1>
                            <p className='text-lg '>{el.employee_name}</p>
                            <div>
                                <h1 className='text-xl font-semibold'>Employee Salary :</h1>
                                <p className='text-lg '>{el.employee_salary}</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Employee Age :</h1>
                                <p className='text-lg '>{el.employee_age}</p>
                            </div>
                            <div className='flex gap-2 justify-end my-2'>
                                <Link to={`/${el.id}`} className='px-4 py-2 rounded-md text-white bg-lime-400 hover:bg-lime-700'>Edit</Link>
                                <button className='px-4 py-2 bg-violet-400 rounded-md text-white hover:bg-violet-700' onClick={() => HandleDelete(el.id)}>Delete</button>
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