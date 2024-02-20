import React from 'react';
// import '../../App.css';

function ConversationMsAr(props) {

  const mode = props.modeP;
  const language = props.languageP;
  const contactId = props.current_cnt_infosP.id;
  const conversation = props.conversationP;
  const myInfo = props.myInfoP;
  const myID = myInfo.id;

  return (
    <div id='conver' className='will-change-scroll overflow-y-scroll h-[76Vh]'>
      <div id='conv'>
        {conversation.map((msg, i)=>{
          if(msg.from===myID && msg.to===contactId){return(
            <div key={i} className='grid justify-items-end mt-1 ms-4'>
              <div id='flech' className='h-4 w-4 bg-sky-500 relative -mb-5 me-5'></div>
              <div id='conarea' className='grid justify-items-end bg-sky-500 w-max max-w-xs mb-1 me-5 rounded-md'>
                <p className='p-[2px] m-0'>
                  {msg.message}
                  <br/><span className='text-zinc-600 text-xs'>{msg.time}</span>
                </p>
              </div>
            </div>)}

          else if(msg.to===myID && msg.from===contactId){return(
            <div key={i} className='mt-1'>
              <div id='flech2' style={{zIndex:1, backgroundColor:mode==="dark"&&"#222222"}} className='h-4 w-4 bg-slate-100 relative -mb-4 ms-4'></div>
              <div id='conarea2' style={{backgroundColor:mode==="dark"&&"#222222", color:mode==="dark"&&"#dddddd"}} className='bg-slate-100 grid w-max max-w-xs -mt-3 m-5 rounded-md'>
                <p className='p-[2px] mt-[-3px] mb-[-3px]' style={{zIndex:2}}>
                  {msg.message}
                  <br/><span style={{color:mode==="dark"&&"#999999"}} className='text-zinc-600 text-xs'>{msg.time}</span>
                </p>
              </div>
            </div>)}
          })
        }
      </div>
    </div>
  )
}

export default ConversationMsAr;