import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandGolang } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'
import { SiTypescript } from "react-icons/si";
import { SiMariadb } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }

})


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="h-1">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 ">

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><RiReactjsLine className="text-7xl text-cyan-400" /></motion.div>


                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><SiMariadb className="text-7xl text-blue-400" /></motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><SiExpress className="text-7xl text-green-400" /></motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><TbBrandGolang className="text-7xl text-cyan-400" /></motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><SiMongodb className="text-7xl text-green-800" /></motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><BiLogoPostgresql className="text-7xl text-blue-400" /></motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><FaNodeJs className="text-7xl text-green-400" /></motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><SiTypescript className="text-7xl text-blue-400" /></motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-400 p-4"><FaLaravel className="text-7xl text-red-400" /></motion.div>

            </div>

        </div >
    )
}

export default Technologies
