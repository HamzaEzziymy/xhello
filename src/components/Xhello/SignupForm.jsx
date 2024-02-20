import React, { useRef, useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from 'axios';

function SignupForm(props) {
    const [showpassword, setShowpassword] = useState(false);
    const [showConfpassword, setShowConfpassword] = useState(false);

    const [confirmpasswordborder, setConfirmpasswordborder] = useState("");
    const [propleminput, setPropleminput] = useState("");
    
    const txtnumberphone = useRef("");
    const txtpassword = useRef("");
    const txtconfirpassword = useRef("");

    const showpasswordfunc = ()=>{
        if(showpassword){
            setShowpassword(false);
        }else{
            setShowpassword(true);
        }
    }
    const showConfpasswordfunc = ()=>{
        if(showConfpassword){
            setShowConfpassword(false);
        }else{
            setShowConfpassword(true);
        }
    }


    const confirpasswordfunc = (e)=>{
        if(e.target.value !== txtpassword.current.value){
            setConfirmpasswordborder("solid red 2px");
        }else{
            setConfirmpasswordborder("");
        }
    }

    const handleSignup =async (event)=>{
        event.preventDefault();
        if(/^06\d{8}$/.test(txtnumberphone.current.value) && /^\d{6}$/.test(txtpassword.current.value) && txtpassword.current.value === txtconfirpassword.current.value){
            try {
                await axios.get('http://localhost:8080/usersDB/'+txtnumberphone.current.value)
                .then(()=>setPropleminput("Number a really used!"));
            } catch (error) {
                props.setNumberphoneP(txtnumberphone.current.value);
                setPropleminput("");
                await axios.post('http://localhost:8080/usersDB/', {"id":txtnumberphone.current.value, "fullname":txtnumberphone.current.value, "password":txtpassword.current.value, "lasttime":"", "photoProfile":"https://www.pinclipart.com/picdir/big/73-739007_icon-profile-picture-circle-png-clipart.png", contacts:[]});
                setConfirmpasswordborder("");
                props.haveAccountfuncP();
            }
        }else{
            setPropleminput("incoret info or no save password");
        }
    }

    return (
        <div className='grid justify-items-center'>
            <div className='bg-zinc-700 grid justify-items-center border-2 border-solid border-blue-600 rounded-xl sm:w-[40%]'>
                <form onSubmit={(event)=>handleSignup(event)} className='text-slate-300 grid justify-items-center sm:w-[90%]'>
                    <h1 className='mb-2 mt-0'>Create an Acount</h1>
                    <hr className='w-[70%] mt-0 mb-5'/>
                    Your Number Phone<br/>
                    <input ref={txtnumberphone} className='w-[80%] h-9 rounded-lg border-none ps-3 text-xl outline-none' placeholder='0612345678' type='text'/><br/>
                    Password<br/>
                    <div className='w-[85%] flex mb-[-10px] h-10 rounded-lg bg-white'>
                        <input ref={txtpassword} className='ms-2 text-xl w-10/12 border-none outline-none' type={showpassword?"text":"password"} placeholder='password'/>
                        <div className='text-zinc-800 cursor-pointer ms-3 mt-3 me-2 rounded-full' onClick={showpasswordfunc}>
                            {showpassword?<FaEye/>:<FaEyeSlash/>}
                        </div>
                    </div><br/>
                    Confirm Password
                    <div style={{border:confirmpasswordborder}} className='w-[85%] flex h-10 rounded-lg bg-white'>
                        <input on onInput={(e)=>confirpasswordfunc(e)} ref={txtconfirpassword} className='ms-2 text-xl w-10/12 border-none outline-none' type={showConfpassword?"text":"password"} placeholder='Confirm Password'/>
                        <div className='text-zinc-800 cursor-pointer ms-3 mt-3 me-2 rounded-full' onClick={showConfpasswordfunc}>
                            {showConfpassword?<FaEye/>:<FaEyeSlash/>}
                        </div>
                    </div>
                    <span className='text-red-500 mb-[-13px]'>{propleminput}</span>
                    <br/>
                    <button className='border-none text-lg bg-blue-700 w-[85%] h-10 cursor-pointer rounded-xl'>SignUp</button>
                    <hr className='w-[85%] mt-5 mb-5'/>
                </form>
                <button onClick={props.haveAccountfuncP} className='border-none text-lg bg-green-500 w-[70%] h-10 cursor-pointer rounded-xl mb-2'>i have an account</button>
            </div>
        </div>
    )
}

export default SignupForm;