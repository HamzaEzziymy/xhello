import React, { useEffect, useState } from 'react';
import HeaderMsAr from './HeaderMsAr';
import ConversationMsAr from './ConversationMsAr';
import SendMessageMsAr from './SendMessageMsAr';
import axios from 'axios';
import { Arb, Eng, Fr } from './database/language';


function MessageArea(props) {
  const start_conv = props.start_convP;
  const [conversation, setConversation] = useState([]);

  const language = props.languageP;

  const chargerMessage = ()=>{
    axios.get("http://localhost:8080/conversationDB")
    .then(res=>{
    setConversation(res.data);
    })
  }

    
  useEffect(
    chargerMessage
  ,[])

  return (
    <div className=''>
      {start_conv
      ?
      <div>
          <div>
            <HeaderMsAr modeP={props.modeP} languageP={language} current_cnt_infosP={props.current_cntP} hiddenMessageAreaP={props.hiddenMessageAreaP}/>
          </div>
          <div>
            <ConversationMsAr modeP={props.modeP} languageP={language} myInfoP={props.myInfoP} current_cnt_infosP={props.current_cntP} conversationP={conversation}/>
          </div>
          <div className='h-16 pb-[2px] w-[100%]'>
            <SendMessageMsAr modeP={props.modeP} languageP={language} myInfoP={props.myInfoP} chargerMessageP={chargerMessage} current_cnt_infosP={props.current_cntP}/>
          </div>
      </div>
      :
      <div className='justify-items-center text-center'>
        <h1>{language==="eng"&&Eng.welcomMsg || language==="arb"&&Arb.welcomMsg || language==="fr"&&Fr.welcomMsg}</h1>
      </div>
      }
    </div>
  )
}

export default MessageArea;