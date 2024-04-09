'use client'

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact =() =>{
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const text = "Sey Hello"
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID||""
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID||""
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY||""

    const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    console.log("serviceID:",serviceID)

    emailjs
      .sendForm( serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
            form.current.reset();
            setSuccess(true)
          console.log('SUCCESS!');
        },
        (error) => {
            setError(true)
          console.log('FAILED...', error);
        },
      );
  };
  
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1, ease:"easeOut"}}>

        <div className="h-[calc(100vh-6rem)] w-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Text Container  */}
            <div className="flex h-1/2 w-full lg:h-full lg:w-1/2 items-center justify-center text-6xl">
                <div className="text-black ">
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 2, delay: index * 0.1,repeat:Infinity }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                    😊
                </div>
            </div>
            {/* Form Container  */}
            <form ref={form} className="flex flex-col h-1/2 w-full lg:h-full lg:w-1/2 text-black  justify-center bg-red-50 text-2xl rounded-xl gap-8 p-24" onSubmit={sendEmail}>
                <span>Dear Tung,</span>
                <textarea rows={6} className="bg-transparent border-b-2 border-black outline-none resize-none" name="user_message"/>
                <span>My mail address is:</span>
                <input type="text" className="bg-transparent border-b-2 border-black outline-none" name="user_email"/>
                <span>Regards</span>
                <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
                {success ? <span className="text-green-500">Sent</span>:null}
                {error ? <span className="text-red-500">Error</span> :null}
            </form>
        </div >
        </motion.div>
    )
}
export default Contact