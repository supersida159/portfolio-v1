'use client'
import { AnimatePresence, delay, motion } from "framer-motion";
import NavBar from "./Navbar"; // Assuming Navbar component exists
import { usePathname } from "next/navigation";

interface TransitionProviderProps {
    children: React.ReactNode; // ReactNode can be any JSX element
  }
const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
    const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 flex-col">
            <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{height:"0vh"}}
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease:"easeOut"}}
            />
            <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{opacity:1}}
            animate={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            >{pathName.substring(1)}</motion.div>
            <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{height:"140vh"}}
            animate={{height:"0vh", transition:{delay:0.5}}}
            />
            <header className="h-24">
        <NavBar />
      </header>
      <main className="h-[calc(100vh-6rem)] overflow-y-auto">
        {children}
      </main>
         </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;