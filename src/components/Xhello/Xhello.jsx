import React, { useState, useEffect } from 'react'
import ContactsArea from './ContactsArea';
import MessageArea from './MessageArea';
import bg_network_world from "../../images/bg_network_world.jpg"
import axios from 'axios';
import { Eng, Arb, Fr } from './database/language';
import { useNavigate } from 'react-router';

function Xhello() {

  const history = useNavigate();
  const [myInfo, setMyInfo] = useState("");

  //----------------------------
  const [mode, setMode] = useState(localStorage.mode);
  const [language, setLanguage] = useState(localStorage.language);
  //----------------------------
  // const [lg, setLg] = useState("eng");
  // if(language==="eng"){
  //   setLg(Eng);
  // }else if(language==="arb"){
  //   setLg(Arb);
  // }else{
  //   setLg(Fr);
  // }

  const [mycontacts, setMycontacts] = useState([]);
  const [classNameContactsArea, setClassNameContactsArea] = useState("sm:w-2/6");
  const [classNameMessageArea, setClassNameMessagesArea] = useState("sm:w-4/6 sm:block hidden");
  const [current_cnt, setCurrent_cnt] = useState({});
  const [i, setI] = useState("");
  const [start_conv, setStart_conv] = useState(false);

  const hiddenContactsArea = (contact, i)=>{
    setClassNameContactsArea("sm:w-2/6 sm:block hidden");
    setClassNameMessagesArea("sm:w-4/6 block");
    setCurrent_cnt(contact);
    setI(i);
    setStart_conv(true);
  }

  const hiddenMessageArea = ()=>{
    setClassNameContactsArea("sm:w-2/6 block");
    setClassNameMessagesArea("sm:w-4/6 hidden");
  }


  const funct = ()=>{
    setClassNameContactsArea("sm:hidden");
    setClassNameMessagesArea("w-[100%]");
  }

  const getMyInfo = ()=>{
    if(JSON.parse(localStorage.getItem("userInfo"))){
      if(Object.keys(JSON.parse(localStorage.getItem("userInfo"))).length<=0){
        history("/");
      }else{
        axios.get("http://localhost:8080/usersDB/"+JSON.parse(localStorage.getItem("userInfo")).userId)
        .then(res=>{
          setMyInfo(res.data);
          setMycontacts(res.data.contacts);
        });
      }
    }else{
      history("/");
    }
  }

  useEffect(getMyInfo, []);

  
  return (
    <div className='sm:flex m-0'>
      <div className={classNameContactsArea}>
        <ContactsArea modeP={mode} setModeP={setMode} languageP={language} setLanguageP={setLanguage} myInfoP={myInfo} functP={funct} iP={i} hiddenContactsAreaP={hiddenContactsArea} mycontactsP={mycontacts}/>
      </div>
      <div className={classNameMessageArea} style={{ backgroundImage: `url(${bg_network_world})`, backdropFilter: "sepia(90%)"}} id='messagearea'>
        <MessageArea modeP={mode} languageP={language} myInfoP={myInfo} hiddenMessageAreaP={hiddenMessageArea} start_convP={start_conv} current_cntP={current_cnt}/>
      </div>
    </div>
  )
}

export default Xhello;