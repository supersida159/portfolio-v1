'use client'
import Light from "@/components/Light";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1, ease:"easeOut"}}>
      
    <div className="flex flex-col h-full lg:flex-row">
      {/* Image Container */}
      <div className=" h-1/2 relative lg:h-full lg:w-1/2">
        {/* <Light/> */}
        <Image src={"/images/portfolio_image_2.png"} alt={"self-img"} fill className="object-contain"/>
      </div>
      {/* Text Container  */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
        <h1 className="text-4xl font-bold text-black">Crafting Digital experience, Designing tomorrow</h1>
        <p className="text-black">Welcome to my portfolio</p>
        <div className="flex gap-4">
          <a className="p-4 rounded-lg bg-black text-white ring-1 ring-black" href="/contact">
              Contact Me
          </a>
          <a className="p-4 rounded-lg  ring-1 ring-black" href="/porfolio">View My Work</a>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
