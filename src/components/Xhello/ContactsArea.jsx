import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";
import MyProfileArea from './MyProfileArea';
import axios  from 'axios';
import { Arb, Eng, Fr } from './database/language';



function ContactsArea(props) {
    const mycontacts = props.mycontactsP;

    const [serachinputvalue, setSerachinputvalue] = useState("");

    const mode = props.modeP;
    const language = props.languageP;
    
    // const [allusers, setAllusers] = useState([]);
    // useEffect(()=>
    //     axios.get("http://localhost:8080/usersDB/?fullname="+toString(serachinputvalue))
    //     .then(res=>{
    //     setAllusers(res.data);
    //     })
    // ,[])


    const handleInputsearch = (e)=>{
        setSerachinputvalue(e.target.value.toLowerCase());
    }
    
  return (
        <div className="bg-slate-100" style={{backgroundColor:mode==="dark"&&"#121212"}}>
            {/* <button onClick={()=>props.functP()}>X</button> */}
            <MyProfileArea myInfoP={props.myInfoP}  modeP={mode} setModeP={props.setModeP} languageP={language} setLanguageP={props.setLanguageP}/>
            <hr className='mt-0'/>
            <div className='shadow-slate-900 drop-shadow'>
                <div className='flex justify-center'>
                    <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} className='flex w-[95%] border-solid border-2 rounded-lg border-zinc-400'>
                        <AiOutlineSearch className='pt-2 text-2xl'/>
                        <input style={{color:mode==="dark"&&"#ffffff"}} type='search' onInput={(e)=>handleInputsearch(e)} placeholder={language==="eng"&&Eng.searchPlaceholder || language==="arb"&&Arb.searchPlaceholder || language==="fr"&&Fr.searchPlaceholder} className='w-[90%] text-lg h-10 rounded-lg outline-none border-none bg-transparent'/>
                    </div>
                </div>
                <hr/>
                <div className='overflow-y-scroll h-[75Vh]'>

                    {mycontacts.map((contact,i)=>(
                        (contact.fullname.toLowerCase().search(serachinputvalue) !== -1)?
                        <div key={i} onClick={()=>props.hiddenContactsAreaP(contact, i)}>
                            <div style={{backgroundColor:mode==="dark"&&"#323232", color:mode==="dark"&&"#ffffff"}} className='flex place-content-between cursor-pointer hover:bg-slate-400 bg-slate-200 pb-[-13px]'>
                                <div className='flex'>
                                    <img src={contact.photoProfile}
                                        alt="profile"
                                        className='border-2 w-10 h-10 m-2 rounded-full'
                                    />
                                    <h3 style={{color:mode==="dark"&&"#ffffff"}} className='text-black'>{contact.fullname}</h3>
                                </div>
                                {i===props.iP?
                                    <BsArrowBarRight className='pt-5 text-2xl hidden sm:block'/>
                                 :""} 
                            </div>
                            <hr className='w-60'/>
                        </div>
                        :""
                    ))}
                    {/* {allusers.map((contact,i)=>(
                        (contact.fullname.toLowerCase().search(serachinputvalue) !== -1)?
                        <div key={i}>
                            <div className='flex place-content-between bg-green-500 pb-[-13px]'>
                                <div className='flex'>
                                    <img src={contact.photoProfile}
                                        alt="profile"
                                        className='border-2 w-10 h-10 m-2 rounded-full'
                                    />
                                    <h3 className='text-black'>{contact.fullname}</h3>
                                </div>
                                <FaPlus className='mt-2 hover:text-green-500 cursor-pointer p-2 text-black text-2xl me-10 bg-white rounded-full sm:block'/>
                            </div>
                            <hr className='w-60'/>
                        </div>
                        :""
                    ))} */}

                </div>
            </div>
        </div>
    )
}

export default ContactsArea;