import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const[userData,setUserData]=useContext(AuthContext)

    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const [date,setdate]=useState('')
    const [AssignTo,setAssignTo]=useState('')
    const [Category,setCategory]=useState('')

    const [newtask,setnewtask]=useState({})

    const submitHandler =(e)=>{
        e.preventDefault()
        setnewtask({title,description,date,Category,active:false,newTask:true,failed:false,completed:false})
         
         const data=userData
         

         data.forEach(function(elem){
            if(AssignTo==elem.firstname){
                elem.tasks.push(newtask)
                elem.taskCount.newtask=elem.taskCount.newtask+1
                 
            }
         })
         setUserData(data)
         console.log(data);
         

         settitle('')
         setCategory('')
         setdescription('')
         setAssignTo('')
         setdate('')
         

         

        
      }
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form  onSubmit={(e)=>{
                submitHandler(e)
                }}
                className='flex flex-wrap w-full  items-start justify-between'
                >
                <div className='w-1/2'>
            
                    <div>
                        <h3 className='text-sm text-gray-300 mb=0.5'>Task Title</h3>
                        <input 
                        value={title}
                        onChange={(e)=>{
                            settitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'type='text' placeholder='Make a UI Design ' ></input>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                        value={date}
                        onChange={(e)=>{
                            setdate(e.target.value)
                        }}
                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type='date' placeholder='dd/mm/yyyy'/>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                        value={AssignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                        
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text'placeholder='employee name' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={Category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4' type='text' placeholder='Design,dev etc...'/>
                    </div>
                </div>
            
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={description}
                    onChange={(e)=>{
                        setdescription(e.target.value)
                    }}
                    
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id=''></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            
                


            </form>
      </div>
  )
}

export default CreateTask
