'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1, ease:"easeOut"}}>
      
    <div className="flex flex-col h-full lg:flex-row">
      {/* Image Container */}
      <div className=" h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={"/images/hero.png"} alt={"self-img"} fill className="object-contain"></Image>
      </div>
      {/* Text Container  */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
        <h1 className="text-4xl font-bold">Crafting Digital experience, Designing tomorrow</h1>
        <p>Welcome to my portfolio</p>
        <div className="flex gap-4">
          <button className="p-4 rounded-lg bg-black text-white ring-1 ring-black">Contact Me</button>
          <button className="p-4 rounded-lg  ring-1 ring-black">View My Work</button>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
