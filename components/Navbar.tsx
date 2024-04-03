"use client"
import Link from "next/link"
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';

import { useState } from "react";
import NavLink from "./NavLink";
import { root } from "postcss";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
 const  links = [
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/contact",title:"Contact"},
    {url:"/porfolio",title:"Porfolio"},
]
const NavBar =() =>{
    const[isOpenMenu,setIsOpenMenu]=useState(false)
    const topVariants = {
        open: {
            rotate:45,
            backgroundColor:"rgb(255,255,255)",
          
        },
        closed: {
          rotate: 0,
        },
    }
    const centerVariants = {
        open: {
            opacity:0,
        },
        closed: {
          rotate: 0,
        },
    }
    const botVariants = {
        open: {
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
          
        },
        closed: {
          rotate: 0,
        },
    }
    const listVariants = {
        opened: {
            x:0,
            transition:{
               when: "afterChildren",
               staggerChildren:0.2,
           }
        },
        closed: {
            x: "100vw",
        },
    }
    const listItemVariants = {
        closed: {
            x:-10,
            opacity:1,
  
        },
        open: {
            x:0,
            opacity:0,
        },
    }
 
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="hidden  md:flex gap-2 w-1/3  justify-start">
                {links.map((link)=>(
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* <div>Logo</div> */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md font-semibold p-1">
                    <span className="text-white ">Lama</span>
                    <span className="bg-white text-black rounded-md px-1">.Dev</span>
                </Link>
            </div>
            <div className="hidden md:flex flex-row gap-4 w-1/3  justify-end">
               <Link href={"#"} >
                 <GitHubIcon />
               </Link>
               <Link href={"#"} >
                 <Image src="/images/facebook.png" alt="facebook" width={24} height={24}></Image>
               </Link>
               <Link href={"#"} >
                    <Image src="/images/youtube.png" alt="youtube" width={24} height={24}></Image>
               </Link>
            </div>
            {/* <div>Search</div> */}
            <div className="md:hidden w-1/3  z-40">
            <button className={`z-50 w-10 h-8 flex flex-col relative justify-between text-sm ${isOpenMenu ? 'text-white' : 'text-black'}`} onClick={() => setIsOpenMenu((prev) => !prev)}>
                <motion.div
                variants={topVariants}
                animate={isOpenMenu ? "open" : "closed"}
                className=" w-10 h-1 rounded-lg bg-white origin-left"
                ></motion.div>
                <motion.div variants={centerVariants} animate={isOpenMenu ? "open" : "closed"} className="  w-10 h-1 rounded-lg bg-white "> </motion.div>
                <motion.div variants={botVariants} animate={isOpenMenu ? "open" : "closed"} className="   w-10 h-1 rounded-lg bg-white  origin-left"></motion.div>
            </button>
                {
                    isOpenMenu ? (
                        <motion.div variants={listVariants} initial="closed" animate="opened" className=" absolute flex flex-col top-0 left-0 w-screen h-screen bg-black text-white justify-center items-center">
                    {links.map((link)=>(
                        <motion.div variants={listItemVariants} initial="closed" animate="opened" key={link.title} className="flex flex-col gap-2">
                            <Link href={link.url} className="text-sm p-1">{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                        
                    ):null
                }
            </div>
        </div>
    )
}
export default NavBar