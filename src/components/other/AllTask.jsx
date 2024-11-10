import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded  mt-5 h-60'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '> New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>

        </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem ,idx){
            return <div  key={idx} className=' border-2  mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5 '>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskCount.completed}</h5> 
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-orange-600'>{elem.taskCount.failed}</h5>
        </div> 
        })}
        </div>
    </div>
  )
}

export default AllTask
