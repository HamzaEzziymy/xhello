import React, { useState } from 'react';
import { BsArrowBarLeft, BsThreeDotsVertical } from 'react-icons/bs';
import { IoCloseSharp } from "react-icons/io5";

function HeaderMsAr(props) {
  const current_cnt = props.current_cnt_infosP;

  const mode = props.modeP;
  const language = props.languageP;

  const [hiddMenu, setHiddMenu] = useState("none")
  const [isHidd, setIsHidd] = useState(true) 

  const menuFunc = ()=>{
      if(isHidd){
        setHiddMenu("block");
        setIsHidd(false);
      }else{
        setHiddMenu("none");
        setIsHidd(true);
      }
  }

  return (
    <div style={{backgroundColor:mode==="dark"&&"#121212",borderLeft:"solid #ffffff 1px", color:mode==="dark"&&"#ffffff"}} className='flex justify-between bg-slate-200'>
        <BsArrowBarLeft style={{color:mode==="dark"&&"#ffffff"}} className='mt-5 text-2xl text-slate-800 sm:hidden block' onClick={props.hiddenMessageAreaP}/>
        <div className='flex justify-between'>
            <img src={current_cnt.photoProfile}
                alt="profile"
                className='border-2 w-10 h-10 m-2 mt-3 rounded-full'
            />
            <h3 style={{color:mode==="dark"&&"#ffffff"}} className='text-slate-950 mt-5'>{current_cnt.fullname}</h3>
        </div>
        <div>
          {isHidd?
          <BsThreeDotsVertical onClick={menuFunc} className='mt-4 text-2xl cursor-pointer hover:bg-slate-400 p-1 hover:text-slate-200 hover:rounded-full'/>
          :<IoCloseSharp onClick={menuFunc} className='mt-4 text-2xl cursor-pointer hover:bg-slate-400 hover:text-slate-200 hover:rounded-full'/>
          }
          <div style={{border:"solid 2px white",display:hiddMenu, zIndex:3}} className="sm:w-[40%] h-72 w-[80%] ms-[-77%] sm:ms-[-38%] border-4 rounded-md fixed bg-slate-200 shadow-xl shadow-slate-100/50">
            <h1 className='text-center'>hello welcom to the right menu</h1>
          </div>
        </div>
    </div>
  )
}

export default HeaderMsAr;