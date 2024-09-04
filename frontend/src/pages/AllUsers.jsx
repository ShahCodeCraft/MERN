import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUseRole';

const AllUsers = () => {
    const [allUser,setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState({
        email : "",
        name : "",
        role : "",
        _id  : ""
    })

    const fetchAllUsers = async() =>{
        const fetchData = await fetch(SummaryApi.allUser.url,{
            method : SummaryApi.allUser.method,
            credentials : 'include'
        })

        const dataResponse = await fetchData.json()

        if(dataResponse.success){
            setAllUsers(dataResponse.data)
        }

        if(dataResponse.error){
            toast.error(dataResponse.message)
        }

    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

  return (
    <div className='bg-white dark:bg-black pb-4'>
        <table className='w-full userTable bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100 '>
            <thead>
                <tr className=''>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    allUser.map((el,index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-gray-300 text-gray-800 dark:bg-gray-500 dark:text-gray-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-white' 
                                    onClick={()=>{
                                        setUpdateUserDetails(el)
                                        setOpenUpdateRole(true)

                                    }}
                                    >
                                        <MdModeEdit/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        {
            openUpdateRole && (
                <ChangeUserRole 
                    onClose={()=>setOpenUpdateRole(false)} 
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )      
        }
    </div>
  )
}

export default AllUsers;