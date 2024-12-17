import { HERO_CONTENT } from '../constants/index';
import profile_pic from "../assets/jey.jpg";
import { Typewriter } from 'react-simple-typewriter'
const hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-4xl font-thin tracking-tight text-center sm:text-left sm:text-6xl lg:mt-16 lg:text-8xl">
                            <Typewriter words={['Hello, I am jey']} loop={0} cursor={true} cursorStyle='_' />
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center sm:text-left sm:text-4xl">
                            Software Engineer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-center sm:text-left">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className='rounded-xl' src={profile_pic} alt="zaidaan" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;