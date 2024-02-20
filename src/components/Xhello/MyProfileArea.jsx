import React, { useState } from 'react';
import MyMenu from './MyMenu';

function MyProfileArea(props) {
  const myInfo = props.myInfoP;

  const mode = props.modeP;
  const language = props.languageP;


  const [isHidd, setIsHidd] = useState(true);
  const [hiddMenu, setHiddMenu] = useState("none");
  const [hiddNotificationMenu, setHiddNotificationMenu] = useState("none");
  const [notification, setNotification] = useState(0)

  const menuFunc = ()=>{
    if(isHidd){
      setHiddMenu("block");
      setIsHidd(false);
    }else{
      setHiddMenu("none");
      setIsHidd(true);
    }
  }

  const shownotificationfunc = ()=>{
    if(hiddNotificationMenu === "none"){
      setHiddNotificationMenu("block");
      setNotification("X");
    }else{
      setHiddNotificationMenu("none");
      setNotification(0);
    }
  }

  return (
    <div className='flex place-content-between pb-[-13px]'>
        <div className='flex'>
            <img src={myInfo.photoProfile}
                alt="profile"
                className='border-2 w-10 h-10 m-2 rounded-full'
            />
            <div className='absolute h-5 w-5 bg-green-500 rounded-full mt-8 ms-8 text-center'>
              <div onClick={shownotificationfunc} className='cursor-pointer text-black hover:bg-green-600 hover:text-white rounded-full'>
                <i className='text-xs'>{notification}</i>
              </div>
              <div style={{display:hiddNotificationMenu}} className='w-52 h-52 bg-white shadow-slate-100/50 border-2 border-white border-solid rounded-lg'>

              </div>
            </div>
            <h3 style={{color:mode==="dark"&&"#ffffff"}} className='text-black'>{myInfo.fullname}</h3>
        </div>
        <MyMenu isHiddP={isHidd} menuFuncP={menuFunc} hiddMenuP={hiddMenu} modeP={mode} setModeP={props.setModeP} languageP={language} setLanguageP={props.setLanguageP}/>
    </div>
  )
}

export default MyProfileArea