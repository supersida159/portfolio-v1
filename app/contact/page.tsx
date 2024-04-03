'use client'

import { motion } from "framer-motion"

const Contact =() =>{
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1, ease:"easeOut"}}>

        <div className="">Contact</div>
        </motion.div>
    )
}
export default Contact