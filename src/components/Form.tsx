import { useState,useEffect } from "react";
import { UseEmailContext } from "../context/EmailContext";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { setEmail,email } = UseEmailContext();
  const navigate = useNavigate();

  const [typingEmail, setTypingEmail] = useState("");

  const settingTypingEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypingEmail(e.target.value);
    return e.target.value;
  };

  useEffect(()=>{
    if(email != ""){
        navigate('/thanks')
    }
  },[email])

  return (
    <div>
      <form className="flex flex-col gap-3" action="">
        <label className="text-xs font-medium" htmlFor="email">
          Email address
        </label>
        <input
          autoComplete="off"
          onChange={(e) => settingTypingEmail(e)}
          className="text-xs border border-gray-500 rounded-md outline-none py-3 px-2"
          type="email"
          id="email"
          placeholder="company@gmail.com"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setEmail(typingEmail);
          }}
          className="text-xs bg-[#010101] text-white font-semibold h-[3.5em] rounded-md"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default Form;
