import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { IoCloseSharp, IoInvertModeSharp, IoLanguage } from 'react-icons/io5';
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router';
import { Arb, Eng, Fr } from './database/language';

function MyMenu(props) {
    const[displayEdit, setDisplayEdit] = useState("none");
    const[displayLang, setdisplayLang] = useState("none");
    const[displayMode, setDisplayMode] = useState("none");

    const [lang, setLang] = useState(localStorage.language);
    const [mode, setMode] = useState(localStorage.mode)
    const language = props.languageP;

    //---------------------------------------------------------------
    const editFunc = ()=>{
        if(displayEdit === "none"){
            setDisplayEdit("block");
            setdisplayLang("none");
            setDisplayMode("none");
        }
    }

    const langFunc = ()=>{
        if(displayLang === "none"){
            setDisplayEdit("none");
            setdisplayLang("block");
            setDisplayMode("none");
        }
    }

    const modeFunc = ()=>{
        if(displayMode === "none"){
            setDisplayEdit("none");
            setdisplayLang("none");
            setDisplayMode("block");
        }
    }

    const smallMenuClose = ()=>{
            setDisplayEdit("none");
            setdisplayLang("none");
            setDisplayMode("none");
    }

     
    const history = useNavigate();
    const logaoutfunc = ()=>{
        if(window.confirm("do you want realy to logout?")){
            localStorage.setItem('userInfo', JSON.stringify({}));
            history("/")
        }
    }
    //---------------------------------------------------------------

    //---------------------------------------------------------------
    const changePhP = (event) => {
        // const newFileName = event.target.files[0]?.name;
        console.log("hello");
      };

    //--------------------------------
    const choseLangFunc = (lg)=>{
        setLang(lg);
        props.setLanguageP(lg);
        localStorage.language = lg;
    }
    //--------------------------------

    //--------------------------------
    const choseModeFunc = (md)=>{
        setMode(md);
        props.setModeP(md);
        localStorage.mode = md;
    }
    //--------------------------------
   
  return (
    <div>
        {props.isHiddP?
            <BiMenuAltRight style={{color:mode==="dark"&&"#ffffff"}} onClick={props.menuFuncP} className='mt-4 text-2xl me-2 cursor-pointer hover:bg-slate-400 hover:rounded-full p-1 hover:text-slate-200'/>
            :<IoCloseSharp style={{color:mode==="dark"&&"#ffffff"}} onClick={props.menuFuncP} className='mt-4 text-2xl me-2 cursor-pointer hover:bg-slate-400 hover:rounded-full p-1 hover:text-slate-200'/>
        }
        <div style={{border:"solid 2px white",zIndex:99,backgroundColor:mode==="dark"?'#121212':'#ffffff', display:props.hiddMenuP}} className="sm:w-[40%] w-[80%] sm:ms-0 ms-[-80%] rounded-md fixed shadow-xl shadow-slate-100/50">
            <h1 className='text-center mt-0'>Menu</h1>
            <hr/>

            <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} className='flex bg-slate-200 ps-1 cursor-pointer hover:bg-slate-300' onClick={editFunc}>
                <FaEdit className='text-xl mt-3 me-6'/>
                <h3 className='mt-3'>{language==="eng"&&Eng.editProfile || language==="arb"&&Arb.editProfile || language==="fr"&&Fr.editProfile}</h3>
                <div style={{display:displayEdit}} className='fixed cursor-default ms-10 p-1 w-50 bg-blue-400 rounded-lg'>
                    <IoCloseSharp onClick={smallMenuClose} className='text-2xl me-2 hover:bg-slate-400 hover:rounded-full p-1 hover:text-blue-300'/>
                    <div className='bg-zinc-400 flex justify-between rounded-md p-2'>
                        <input type='text' className='w-5/6 outline-none border-none bg-transparent' placeholder="Hamza Ezziymy"/><FaPencil className='text-black'/>
                    </div>
                    <div className='bg-yellow-500 text-slate-400 rounded-md p-2 mt-1'>
                        <CgProfile onClick={changePhP} className='w-10 h-10'/>
                        <input  className='w-20' type='file'/>
                    </div>
                </div>
            </div>

            <hr className='w-[75%]'/>

            <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} className='flex bg-slate-200 ps-1 cursor-pointer hover:bg-slate-300' onClick={langFunc}>
                <IoLanguage className='text-xl mt-3 me-6'/>
                <h3 className='mt-3'>{language==="eng"&&Eng.changeLng || language==="arb"&&Arb.changeLng || language==="fr"&&Fr.changeLng}</h3>
                <div style={{display:displayLang}} className='fixed ms-10 p-1 w-40 bg-blue-400 rounded-lg'>
                    <IoCloseSharp onClick={smallMenuClose} className='text-2xl me-2 cursor-pointer hover:bg-slate-400 hover:rounded-full p-1 hover:text-blue-300'/>
                    <div onClick={()=>choseLangFunc("arb")} className='flex justify-between bg-zinc-300 text-zinc-800 rounded-md p-2 hover:bg-zinc-800 hover:text-zinc-300'>
                        عربي{lang==="arb"?<IoMdCheckmark className='text-green-500 text-lg text-end'/>:null}
                    </div>
                    <div onClick={()=>choseLangFunc("eng")} className='flex justify-between bg-zinc-300 text-zinc-800 mt-1 rounded-md p-2 hover:bg-zinc-800 hover:text-zinc-300'>
                        English{lang==="eng"?<IoMdCheckmark className='text-green-500 text-lg text-end'/>:null}
                    </div>
                    <div onClick={()=>choseLangFunc("fr")} className='flex justify-between bg-zinc-300 text-zinc-800 mt-1 rounded-md p-2 hover:bg-zinc-800 hover:text-zinc-300'>
                        French{lang==="fr"?<IoMdCheckmark className='text-green-500 text-lg text-end'/>:null}
                    </div>
                </div>
            </div>

            <hr className='w-[75%]'/>

            <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} className='flex bg-slate-200 ps-1 cursor-pointer hover:bg-slate-300' onClick={modeFunc}>
                <IoInvertModeSharp className='text-xl mt-3 me-6'/>
                <h3 className='mt-3'>{language==="eng"&&Eng.mode || language==="arb"&&Arb.mode || language==="fr"&&Fr.mode}</h3>
                <div style={{display:displayMode}} className='fixed ms-10 p-1 w-40 bg-blue-400 rounded-lg'>
                    <IoCloseSharp onClick={smallMenuClose} className='text-2xl me-2 cursor-pointer hover:bg-slate-400 hover:rounded-full p-1 hover:text-blue-300'/>
                    <div onClick={()=>choseModeFunc("dark")} className='flex justify-between bg-zinc-700 text-zinc-700 rounded-md p-2 hover:bg-zinc-500 hover:text-zinc-700'>
                        <MdDarkMode className='bg-slate-100 rounded-full' />{mode==="dark"?<IoMdCheckmark className='text-green-700 text-sm text-end'/>:null}
                    </div>
                    <div onClick={()=>choseModeFunc("light")} className='flex justify-between bg-yellow-500 text-slate-400 rounded-md p-2 mt-1 hover:bg-yellow-300 hover:text-yellow-300'>
                        <MdLightMode className='bg-zinc-200 rounded-full' />{mode==="light"?<IoMdCheckmark className='text-green-700 text-sm text-end'/>:null}
                    </div>
                </div>
            </div>

            <hr className='w-[75%]'/>

            <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ff0000"}} onClick={logaoutfunc} className='flex bg-slate-200 ps-1 cursor-pointer hover:bg-slate-300'>
                <MdLogout className='text-red-500 text-xl mt-3 me-6'/>
                <h3 className='text-red-500 mt-3'>{language==="eng"&&Eng.logOut || language==="arb"&&Arb.logOut || language==="fr"&&Fr.logOut}</h3>
            </div>
        </div>
    </div>
  )
}

export default MyMenu;