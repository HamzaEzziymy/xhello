import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {motion} from 'framer-motion';


function LoginAndSignUpFrom() {
  const[loginform, setloginform] = useState(true);

  const [numberphone, setNumberphone] = useState();

  const haveAccountfunc = ()=>{
    setloginform(true);
  }

  const creactAccountfunc = ()=>{
    setloginform(false)
  }

  return (
    <motion.div animate={{y:500}} className='pt-3' id='LoginSignupform'>
      {loginform
        ?<LoginForm numberphoneP={numberphone} setNumberphoneP={setNumberphone} creactAccountfuncP={creactAccountfunc}/>
        :<SignupForm numberphoneP={numberphone} setNumberphoneP={setNumberphone} haveAccountfuncP={haveAccountfunc}/>
      }
    </motion.div>
  )
}

export default LoginAndSignUpFrom;