"use client"
import Brain from "@/components/Brain"
import { Console } from "console"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react"

const About =() =>{

    const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef =useRef<HTMLHeadingElement>(null);
  const isSkillInView = useInView(skillRef, {margin:"-100px"});


  const experienceRef =useRef<HTMLDivElement>(null);
  const isExperienceInView = useInView(experienceRef, {margin:"-100px"});
  
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1, ease:"easeOut"}}>

        {/* Container  */}
        <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
            {/* Text Container  */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-20 md:gap-24 lg:gap-32 xl:gap-48  lg:w-2/3 xl:1/2 lg:pr-0">
                {/* biography container  */}
            <div className="flex flex-col gap-12 justify-center"> 
                <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin et nisl eu ultrices. Quisque consectetur vitae nunc quis tincidunt. Vivamus ullamcorper orci vel pharetra pretium. Etiam sollicitudin egestas pretium. Etiam pellentesque euismod augue eget placerat. Nam facilisis lectus tempus sapien auctor scelerisque. Quisque vehicula sem nec feugiat vehicula.
                </p>
                <span className="italic"> Lorem ipsum dolor sit a met, consectetur adipiscing elit.</span>
                <div className="self-end">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="245.000000pt" height="60.000000pt" viewBox="0 0 820.000000 200.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3235 1581 c-152 -69 -133 -256 44 -432 62 -61 123 -99 186 -115 44
-11 22 11 -46 47 -74 40 -188 159 -223 234 -27 57 -34 131 -16 166 6 10 30 29
53 41 38 21 55 23 167 22 135 -1 211 -18 381 -85 l77 -31 -15 -52 c-109 -376
-232 -639 -329 -705 -77 -53 -177 -29 -235 56 -34 49 -69 139 -69 177 0 33
-16 42 -24 12 -8 -32 11 -132 34 -176 36 -69 101 -109 191 -117 49 -5 67 -2
113 21 131 64 211 209 322 586 28 96 55 174 60 173 5 -1 38 -15 74 -30 110
-46 230 -33 230 25 0 12 -4 12 -25 -2 -13 -9 -41 -16 -62 -16 -45 1 -205 51
-210 66 -2 5 3 19 11 29 12 16 17 18 27 8 31 -30 40 1 13 42 -27 41 -58 33
-78 -20 -10 -25 -19 -45 -21 -45 -2 0 -66 24 -142 54 -76 30 -173 61 -216 70
-105 22 -221 21 -272 -3z"/>
<path d="M5027 1250 c-3 -13 -14 -20 -29 -20 -84 0 -188 -156 -188 -284 0 -84
47 -108 129 -66 65 33 112 99 131 186 6 26 18 53 26 59 14 10 14 12 1 24 -11
8 -14 23 -10 45 3 18 0 43 -6 55 -15 27 -47 27 -54 1z m3 -100 c6 -27 9 -64 5
-82 -10 -47 -49 -110 -90 -147 -93 -81 -118 10 -45 166 33 71 70 113 99 113
15 0 22 -11 31 -50z"/>
<path d="M4705 1241 c-43 -26 -112 -103 -179 -198 -32 -46 -59 -83 -62 -83 -6
0 36 108 77 198 l38 82 -28 0 c-15 0 -35 -8 -44 -18 -22 -24 -46 -83 -51 -125
-3 -19 -28 -101 -56 -182 -28 -81 -49 -149 -46 -152 12 -13 49 24 75 75 61
119 261 384 261 344 0 -6 -16 -51 -36 -99 -61 -146 -84 -224 -84 -280 0 -63
14 -74 66 -50 35 17 49 45 17 32 -35 -13 -38 -10 -36 36 3 61 52 195 120 327
29 58 53 107 53 109 0 11 -60 0 -85 -16z"/>
<path d="M4321 1231 c-11 -11 -25 -39 -32 -63 -19 -65 -94 -175 -166 -245 -64
-62 -83 -74 -83 -52 0 9 72 195 137 357 8 20 -52 14 -71 -7 -20 -22 -49 -110
-42 -128 6 -15 -20 -91 -68 -200 -55 -124 -45 -152 37 -96 36 25 165 170 203
229 9 13 19 23 21 20 6 -6 -55 -234 -72 -266 -7 -14 -21 -32 -29 -39 -21 -18
-20 -31 2 -31 10 0 31 14 47 30 16 17 58 49 93 72 36 23 59 44 53 46 -7 2 -30
-8 -51 -22 -22 -14 -44 -26 -49 -26 -16 0 57 248 118 403 14 37 14 37 -9 37
-11 0 -29 -9 -39 -19z"/>
<path d="M4793 823 c-4 -11 1 -22 16 -31 l22 -15 -25 -26 c-52 -55 -136 -224
-150 -304 -6 -32 -3 -41 19 -63 24 -24 32 -26 83 -21 80 7 166 44 220 92 45
41 46 44 46 97 -2 86 -67 201 -148 260 -44 32 -74 36 -83 11z m112 -120 c65
-90 85 -194 43 -233 -58 -54 -209 -97 -248 -71 -20 13 -16 69 8 124 30 67 135
227 149 227 7 0 28 -21 48 -47z"/>
</g>
</svg>
                </div>
            </div>
                 {/* skill container  */}
            <div className="flex flex-col gap-12 justify-center" 
            ref={skillRef}
            
            > 
            <motion.h1 className="font-bold text-2xl"
            initial={{x:"-500px"}}
            animate={isSkillInView ? {x:0}:{} } 
            transition={{delay:0.2}}
            
            > SKILLS</motion.h1>
                <motion.div className="flex gap-4 flex-wrap"
                 initial={{x:"-500px"}}
                 animate={isSkillInView ? {x:0}:{} } 
                 transition={{delay:0.2}}
                >
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">NextJS</div>
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Golang</div>
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Tailwind</div>
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">TypeScript</div>
                    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">MySQL</div>
                </motion.div>
                {/* SKILL SCROLL SVG */}
            <motion.svg
            //   initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: [0.2,1,0.2], y: [0,"10px",0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
               {/* experience container  */}
               <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}> 
                 
                {/* experience title  */}
                <motion.h1 className="font-bold text-2xl" 
                 initial={{x:"-500px"}}
                 animate={isExperienceInView ? {x:0}:{} } 
                 transition={{delay:0.2}}
                > Experience</motion.h1>
                 {/* experience list */}
                 <motion.div 
                  initial={{x:"-500px"}}
                  animate={isExperienceInView ? {x:0}:{} } 
                  transition={{delay:0.2}}
                 >
                    {/* experience list item  */}
                    {/* first Job  */}
                    <div className="flex flex-row justify-between">
                        {/* Left  */}
                        <div className="w-1/3">
                            {/* job titlte */}
                            <div className="bg-white p-3 rounded-s-lg rounded-b-lg font-semibold">Fullstack FreeLancer Engineer</div>
                            {/* Job Desc  */}
                            <div className="p-3 text-sm italic">Hanlde FullStack for my friend</div>
                             {/* Job Data  */}
                             <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>
                              {/* Job Company  */}
                            <div className="p-3 rounded-md bg-white text-sm font-semibold w-fit">Freelancer</div>
                        </div>
                        {/* Center  */}
                        <div className="w-1/6 ">
                            {/* line */}
                           <div className="w-1 h-full bg-gray-600 rounded relative">
                             {/* Line Circle  */}
                             <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                           </div>
                        </div>
                        {/* Right  */}
                        <div className="w-1/3"></div>
                    </div>

                    {/* Second Job */}
                     <div className="flex flex-row justify-between">
                        {/* Left  */}
                        <div className="w-1/3">
                       
                        </div>
                        {/* Center  */}
                        <div className="w-1/6 ">
                            {/* line */}
                           <div className="w-1 h-full bg-gray-600 rounded relative">
                             {/* Line Circle  */}
                             <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                           </div>
                        </div>
                        {/* Right  */}
                        <div className="w-1/3">
                                 {/* job titlte */}
                                 <div className="bg-white p-3 rounded-s-lg rounded-b-lg font-semibold">Fullstack FreeLancer Engineer</div>
                            {/* Job Desc  */}
                            <div className="p-3 text-sm italic">Hanlde FullStack for my friend</div>
                             {/* Job Data  */}
                             <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>
                              {/* Job Company  */}
                            <div className="p-3 rounded-md bg-white text-sm font-semibold w-fit">Freelancer</div>
                        </div>
                    </div>


                    {/* Third Job */}
                    <div className="flex flex-row justify-between">
                        {/* Left  */}
                        <div className="w-1/3">
                            {/* job titlte */}
                            <div className="bg-white p-3 rounded-s-lg rounded-b-lg font-semibold">Fullstack FreeLancer Engineer</div>
                            {/* Job Desc  */}
                            <div className="p-3 text-sm italic">Hanlde FullStack for my friend</div>
                             {/* Job Data  */}
                             <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>
                              {/* Job Company  */}
                            <div className="p-3 rounded-md bg-white text-sm font-semibold w-fit">Freelancer</div>
                        </div>
                        {/* Center  */}
                        <div className="w-1/6 ">
                            {/* line */}
                           <div className="w-1 h-full bg-gray-600 rounded relative">
                             {/* Line Circle  */}
                             <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                           </div>
                        </div>
                        {/* Right  */}
                        <div className="w-1/3"></div>
                    </div>

  
                 </motion.div>
            </div>
            </div>
            {/* SVG container  */}
            <div className="hidden lg:block sticky z-30 top-0 w-1/3 xl:1/2">
                <Brain scrollYProgress={scrollYProgress} />
            </div>
        </div>
        </motion.div>
    )
}
export default About