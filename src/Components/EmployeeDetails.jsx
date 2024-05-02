import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function EmployeeDetails() {
  const { id } = useParams()
  const [Result, setResult] = useState(null)
  const [error, setError] = useState("")
  const api_key = `https://api.allorigins.win/raw?url=https://dummy.restapiexample.com/api/v1/employees`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_key = `https://api.allorigins.win/raw?url=https://dummy.restapiexample.com/api/v1/employees`;
        const response = await axios.get(api_key);
       
        const foundEmployee = response.data.data.find((el) => el.id === parseInt(id));
        setResult(foundEmployee);
      } catch (error) {
        setError("Request failed with status code 429");
      }
    };

    fetchData();
  }, [id]);


  return (
    <>
      {error && <p className='text-xl font-semibold text-center text-red-600'>{error}</p>}

      <div className='flex justify-center h-screen items-center'>
        {
          Result && (<>
            <div className="border w-[300px] text-center shadow-lg rounded-lg hover:shadow-2xl  h-min p-3 border-b-4 border-b-green-600">
            <h1 className='text-2xl font-bold text-blue-500'>Employee Details</h1>
              <h1 className='text-2xl font-semibold'>Name:</h1>
              <h1 className='text-xl '> {Result.employee_name}</h1>
              <h1 className='text-2xl font-semibold'>Salary:</h1>
              <h1>{Result.employee_salary}</h1>
              <h1 className='text-2xl font-semibold'>Age:</h1>

              <h1>{Result.employee_age}</h1>
            </div>



          </>
          )
        }
      </div>
    </>

  )
}

export default EmployeeDetails