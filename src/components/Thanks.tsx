import { UseEmailContext } from "../context/EmailContext";
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Thanks = () => {
  const { email } = UseEmailContext();
  const navigate = useNavigate()

  useEffect(()=>{
    if(email == ""){
        navigate('/')
    }
  },[email])

  return (
    <div className="flex  items-center justify-center h-[100vh]">
      <div className="lg:border lg:shadow-2xl border-gray-300 rounded-lg w-[80%]  lg:w-[30%] m-auto lg:p-10 flex flex-col gap-6">
        <h2 className="text-4xl font-semibold">Thanks for subscribing!</h2>

        <p className="text-xs">
          A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>

        <button className="text-xs bg-[#010101] text-white font-semibold h-[3em] w-full rounded-md">
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Thanks;
