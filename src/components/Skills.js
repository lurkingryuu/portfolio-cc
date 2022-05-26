import React from 'react'
import {FaReact,FaPython} from 'react-icons/fa'
import { SiTailwindcss,SiJavascript,SiFlask } from "react-icons/si";

const Skills = () => {
    return (
        <div id="tech" className='max-w-4xl mx-auto justify-center py-12'>
            <p className='text-2xl text-black sm:text-4xl text-center font-bold pt-5'>
                The Tech I use
            </p>
            <div className="flex flex-wrap justify-center pt-4">
                 <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                        <FaReact className='text-[#2196f3] mx-auto text-4xl' />
                        <p className="mt-5 text-xl sm:text-2xl font-semibold text-center">React</p>
                    </div>
                 </div>
                 <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                        <SiTailwindcss className='text-[#38bdf8] mx-auto text-4xl' />
                        <p className="mt-5 text-lg sm:text-xl font-semibold text-center">TailwindCSS</p>
                    </div>
                 </div>
                 <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                        <SiJavascript className='text-[#f0db4f] mx-auto text-4xl' />
                        <p className="mt-5 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
                    </div>
                 </div>
                 <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                        <FaPython className='text-[#306998] mx-auto text-4xl' />
                        <p className="mt-5 text-xl sm:text-2xl font-semibold text-center">Python</p>
                    </div>
                 </div>
                 <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                        <SiFlask className='text-black mx-auto text-4xl' />
                        <p className="mt-5 text-xl sm:text-2xl font-semibold text-center">Flask</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Skills
