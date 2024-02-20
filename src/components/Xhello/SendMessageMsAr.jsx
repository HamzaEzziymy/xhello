import React, { useEffect, useRef, useState } from 'react';
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { Arb, Eng, Fr } from './database/language';

function SendMessageMsAr(props) {

  const mode = props.modeP;
  const language = props.languageP;
  const myInfo = props.myInfoP;
  const contactId = props.current_cnt_infosP.id
  const[messageInput, setMessageInput] = useState("");
  const[display_send_icon, setDisplay_send_icon] = useState("none");
  const currentdate = new Date();
  var datetime = currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + "  " + currentdate.getHours() + ":" + currentdate.getMinutes();


  const txtmessageinput = useRef();

  const sendIocnFunc = ()=>{
    if(messageInput.length>0 && messageInput !== " "){
      setDisplay_send_icon("block");
    }else{
      setDisplay_send_icon("none");
    }
  }

  useEffect(sendIocnFunc
  ,[messageInput])

  const sendMessageFunc = async()=>{
    await axios.post('http://localhost:8080/conversationDB/', {"from":myInfo.id, "to":contactId, "message":txtmessageinput.current.value, "time":datetime});
    props.chargerMessageP();
    txtmessageinput.current.value = "";
    setDisplay_send_icon("none");
  }


  return (
    <div style={{backgroundColor:mode==="dark"&&"#121212"}} className='flex bg-slate-300'>
        {/* <div className='w-1/12 sm:w-1/12 bg-transparent'> */}
        {/* </div> */}
        <div className='w-10/12 bg-transparent' onKeyDown={e => (e.key==="Enter"&&sendMessageFunc())}>
          <input style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} type='text' ref={txtmessageinput} onInput={(event)=>setMessageInput(event.target.value)}  placeholder={language==="eng"&&Eng.typeMsgPlaceholder || language==="arb"&&Arb.typeMsgPlaceholder || language==="fr"&&Fr.typeMsgPlaceholder} className='w-[95%] mt-3 mb-3 ps-3 ms-2 text-lg h-10 rounded-lg outline-none border-none bg-slate-50'/>
        </div>
        <div className='ms-5 mt-1 sm:mt-0  bg-transparent'>
          <IoMdSend style={{display:display_send_icon, color:mode==="dark"&&"#ffffff"}} onClick={sendMessageFunc} className='w-[95%] cursor-pointer text-slate-600 mt-4 mb-3 hover:text-slate-800 text-3xl'/>
        </div>
    </div>
  )
}

export default SendMessageMsAr;