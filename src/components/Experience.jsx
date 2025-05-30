import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-2">
            <h2 className="h-1">Experience</h2>
            <div>
                {EXPERIENCES.map((experience) => {
                    return (
                        <div key={experience.id} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <motion.p
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}


                                    className="mb-2 text-sm text-neutral-400 ">{experience.year}</motion.p>
                            </div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.5 }}


                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2  font-semibold">
                                    {experience.role} -  <span className="text-purple-100">{experience.company}</span>
                                </h6>

                                <p className="mb-4 text-neutral-400">
                                    {experience.description}
                                </p>
                                {experience.technologies.map((technology) => {

                                    return (
                                        <span key={technology} className="mr-2 text-sm text-purple-300 bg-neutral-900 px-2 py-1 rounded-md">{technology}</span>
                                    )
                                })}

                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Experience
