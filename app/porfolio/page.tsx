"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "E-Commerce With Golang and NexJS",
    desc: "Simple E-commerce with Golang and Next.js with basic feature like login, register, order. Developed on digital ocean server with docker and nginx.Image saved in aws s3 with aws cloudfront",
    img: "https://s3.ap-southeast-1.amazonaws.com/g04.images/img/1715074235247409200.png",
    link: "https://front-end.tungdev1996.online"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Online wedding invitations",
    desc: "A simple website for online wedding invitations",
    img: "/images/wedding.png",
    link:"https://tungthamwedding.tungdev1996.online/?name=Ch%E1%BB%8B%20Th%E1%BA%AFm%20v%C3%A0%20gia%20%C4%91%C3%ACnh"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Ayumi School Project(Happy House kindergarten)",
    desc: "Develop an app for managing a kindergarten, featuring student and parent check-in/check-out with face detection, notifications, messaging and chat, student reviews, and compatibility with website, iOS, and Android platforms.",
    img: "/images/happyHouse.png",
    link: "porfolio/Ayumi-School-Project",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Catfish Management System",
    desc: "Developed a digital data management system for Pangasius fish farms to address the inefficiencies of manual processes involving paper and Excel. Key functions include: proposal submissions by technicians, approvals by regional directors, confirmations by warehouse managers, quantity adjustments due to weather, medication proposals, dead fish reporting, inventory management, and harvesting. The system utilizes microservices architecture, Pub/Sub messaging, and Firebase Cloud Messaging (FCM).",
    img: "/images/BAOMI.png",
    link:"https://baomi.vn"
  },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[700px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end mr-6">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded mr-16">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-white text-black">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl text-white">
                Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;