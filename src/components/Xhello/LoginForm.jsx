import React, { useState,useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from 'axios';

function LoginForm(props) {
    
    const txtnumberphone = useRef("");
    const txtpasssowrd = useRef("");
    
    const history = useNavigate();

    const [incorectInfo, ssetIncorectInfo] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const showpasswordfunc = ()=>{
        if(showpassword){
            setShowpassword(false);
        }else{
            setShowpassword(true);
        }
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("userInfo"))){
            if(Object.keys(JSON.parse(localStorage.getItem("userInfo"))).length>0){
                history("/Xhello");
            }
        }
    }, []);

    const handleLogin =async (event)=>{
        event.preventDefault();
        try {
            await axios.get("http://localhost:8080/usersDB/"+txtnumberphone.current.value)
            .then(res=>{
                if(txtpasssowrd.current.value===res.data.password){
                    localStorage.setItem('userInfo', JSON.stringify({userId:txtnumberphone.current.value, fullname:res.data.fullname}));
                    //-------------------------------------
                    localStorage.mode = "light";
                    localStorage.language = "eng";
                    //-------------------------------------
                    if(Object.keys(JSON.parse(localStorage.getItem("userInfo"))).length>0){
                        history("/Xhello")
                    }
                }else{
                    ssetIncorectInfo(true);
                }
            })
        } catch (error) {
            ssetIncorectInfo(true);
        }
    }

    return (
        <div className='grid justify-items-center'>
            <div className=' bg-zinc-700 grid justify-items-center border-2 border-solid border-blue-600 rounded-xl sm:w-[40%]'>
                <form onSubmit={(event)=>handleLogin(event)} className='text-slate-300 grid justify-items-center sm:w-[90%]'>
                    <h1 className='mb-2'>Login</h1>
                    <hr className='w-[70%] mt-0 mb-5'/>
                    Your Number Phone<br/>
                    <input ref={txtnumberphone}  className='w-[80%] h-9 rounded-lg border-none ps-3 text-xl outline-none' placeholder='0612345678' type='text'/><br/>
                    Password<br/>
                    <div className='w-[85%] flex h-10 rounded-lg bg-white'>
                        <input ref={txtpasssowrd} className='ms-2 text-xl w-10/12 border-none outline-none' type={showpassword?"text":"password"} placeholder='password'/>
                        <div className='text-zinc-800 cursor-pointer ms-3 mt-3 me-2 rounded-full' onClick={showpasswordfunc}>
                            {showpassword?<FaEye/>:<FaEyeSlash/>}
                        </div>
                    </div>
                    {incorectInfo?<span className='text-red-500'>Incorect password or number phone !</span>:""}
                    <br/>
                    <button className='border-none text-lg bg-blue-700 w-[85%] h-10 cursor-pointer rounded-xl'>Login</button>
                    <Link to="https://cdn.quotesgram.com/img/25/30/76752612-quotes3.jpg" className='text-blue-500'>Forget password</Link>
                    <hr className='w-[85%] mt-5 mb-5'/>
                </form>
                <button onClick={props.creactAccountfuncP} className='border-none text-lg bg-green-500 w-[65%] h-10 cursor-pointer rounded-xl mb-2'>Create an Acount</button>
            </div>
        </div>
    )
}

export default LoginForm;