import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmPassword : "",
      profilePic : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
      })
  }

  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await imageTobase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }


  const handleSubmit = async(e) =>{
      e.preventDefault()

      if(data.password === data.confirmPassword){

        const dataResponse = await fetch(SummaryApi.signUP.url,{
            method : SummaryApi.signUP.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
    
          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }
    
      }else{
        toast.error("Please check password and confirm password")
      }

  }

  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>

            <div className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-x shadow-lg shadow-slate-900 dark:shadow-slate-100  p-5 w-full max-w-sm mx-auto rounded-md'>

                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 dark:bg-slate-600 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                      <div className='grid'>
                              <label>Name : </label>
                              <div className='bg-slate-200 dark:bg-slate-800 p-3 rounded'>
                                  <input 
                                      type='text' 
                                      placeholder='enter your name' 
                                      name='name'
                                      value={data.name}
                                      onChange={handleOnChange}
                                      required
                                      className='w-full h-full outline-none bg-transparent'/>
                              </div>
                          </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-200 dark:bg-slate-800 p-3 rounded'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-200 dark:bg-slate-800 p-3 rounded flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-200 dark:bg-slate-800 p-3 rounded flex'>
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder='enter confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>

                                <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                            <p className='my-3'>Already have account ? <Link to={"/login"} className=' text-gray-100 bg-blue-700 hover:bg-blue-800 dark:text-gray-100 dark:hover:bg-blue-800 dark:bg-blue-700 px-1 py-0.5 rounded-md hover:underline'>Login</Link></p>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full  rounded-md  transition-all mx-auto block '>Sign Up</button>

                    </form>
            </div>


        </div>
    </section>
  )
}

export default SignUp;