import React from 'react'
import SkillCard from "./SkillCard";
import {FaPython, FaReact} from "react-icons/fa";
import {SiFlask, SiJavascript, SiTailwindcss} from "react-icons/si";

const Skills = ()=>{
    return(
        <div className="flex flex-wrap justify-center pt-4">
            <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                <SkillCard icon={<FaReact className="text-[#2196f3] mx-auto text-4xl"/>} text={"React"}/>
            </div>
            <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                <SkillCard icon={<SiTailwindcss className='text-[#38bdf8] mx-auto text-4xl' />} text={"TailwindCSS"}/>
            </div>
            <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                <SkillCard icon={<SiJavascript className='text-[#f0db4f] mx-auto text-4xl' />} text={"Javascript"}/>
            </div>
            <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                <SkillCard icon={<FaPython className='text-[#306998] mx-auto text-4xl' />} text={"Python"}/>
            </div>
            <div data-aos='slide-up' data-aos-duration='400' data-aos-delay='00'>
                <SkillCard icon={<SiFlask className='text-black mx-auto text-4xl' />} text={"Flask"}/>
            </div>
        </div>
    );
}

export default Skills;