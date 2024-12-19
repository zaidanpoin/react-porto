import { HERO_CONTENT } from '../constants/index';
import profile_pic from "../assets/jey.jpg";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'


const container = (delay) => {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    };
}



const hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'

                            className="pb-16 text-4xl font-thin tracking-tight text-center sm:text-left sm:text-6xl lg:mt-16 lg:text-8xl">
                            <Typewriter words={['Hello, I am jey']} loop={0} cursor={true} cursorStyle='_' />
                        </motion.h1>
                        <motion.span variants={container(0.5)}
                            initial='hidden'
                            animate='visible' className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center sm:text-left sm:text-4xl">
                            Software Engineer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'


                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center sm:text-left">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 relative">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}


                            className='rounded-xl w-full lg:w-auto' src={profile_pic} alt="zaidaan" />

                    </div>
                </div>
            </div>
        </div >
    );
}

export default hero;