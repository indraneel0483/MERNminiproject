import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      name : "",
      email : "",
      password : "",
      confirmPassword : "",
      profilePic : ""

  })

  const handleOnChange = (e) => {
      const { name , value } = e.target

      setData((previous)=> {
          return{
              ...previous,
              [name] : value
          }
      })
  }

  const handleUploadPic = async(e) =>{
        const  file = e.target.files[0]
        const imagePic = await imageTobase64(file)
        setData((previous)=>{
            return{
                ...previous,
                profilePic : imagePic
            }
        })

        
  }

  const handleSubmit = (e) => {
        e.preventDefault()
  }

  console.log("data login",data)

  return (
    <section id='signup'> 
      <div className='mx-auto container p-5'>
          <div className='bg-white p-5 w-full max-w-sm mx-auto '>
              <div className='w-20 h-20  mx-auto relative overflow-hidden rounded-full'>
                  <div>
                        <img src={ data.profilePic || loginIcons} alt='login icons'/>
                  </div>

                  <form>
                        <label>
                        <div className='text-xs bg-slate-200 bg-opacity-80 pb-4 pt-2  cursor cursor-pointer text-center absolute bottom-0 w-full'>
                            Upload Photo
                        </div>
                        <input  type='file' className='hidden' onChange={handleUploadPic}/>
                        </label>
                  </form>
              </div>


              <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
              <div className='grid'>
                      <label> Username : </label>
                      <div className='bg-slate-200 p-2'>
                          <input 
                                type='text' 
                                placeholder='Enter your Username' 
                                name='name'
                                value={data.name}
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                      </div>
                  </div>
                  <div className='grid'>
                      <label> Email : </label>
                      <div className='bg-slate-200 p-2'>
                          <input 
                                type='email' 
                                placeholder='Enter Email' 
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                      </div>
                  </div>

                  <div>
                      <label> Password : </label>
                      <div className='bg-slate-200 p-2 flex'>
                          <input 
                                type={showPassword ? "text" : "password"}
                                 placeholder='Enter Password' 
                                 name='password'
                                 value={data.password}
                                 onChange={handleOnChange}
                                 required
                                 className='w-full h-full outline-none bg-transparent'/>
                          <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((previous)=>!previous) }>
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
                      <div className='bg-slate-200 p-2 flex'>
                          <input 
                                type={showConfirmPassword ? "text" : "password"}
                                 placeholder='Re-Enter Password' 
                                 name='confirmPassword'
                                 value={data.confirmPassword}
                                 onChange={handleOnChange}
                                 required
                                 className='w-full h-full outline-none bg-transparent'/>
                          <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((previous)=>!previous) }>
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

                  <button className='bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Sign Up</button>

              </form>
              <p className='my-5'>
                Already have an Account? <Link to={'/login'} className=' text-red-600 hover:underline hover:text-blue-500'>Login</Link>
              </p>


          </div>




      </div>
    </section>
  )
}

export default SignUp
