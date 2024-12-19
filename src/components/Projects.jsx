import { PROJECTS } from "../constants"
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-4">
                <h2 className="h-1">Projects</h2>

                <div className="">{PROJECTS.map((project) => {
                    return (
                        <div key={project.id} className="mb-8  flex flex-wrap lg:justify-center ">
                            <div className="w-full lg:w-1/4">
                                <motion.img

                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}


                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className="mb-6 rounded" />

                            </div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.5 }}


                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                                {project.technologies.map((technology) => {
                                    return (
                                        <span key={technology} className="mr-2 text-sm text-purple-300 bg-neutral-900 px-2 py-1 rounded-md">{technology}</span>
                                    )
                                })}

                            </motion.div>
                        </div>
                    );
                })}</div>

            </div>
        </div>
    )
}

export default Projects
