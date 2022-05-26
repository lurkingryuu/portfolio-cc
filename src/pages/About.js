import React from 'react';
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const About = () => {
    return (
        <div id="about" className="">
            <div id="tech" className='w-[80vw] mx-auto justify-center py-12'>
                <p className='text-2xl text-black sm:text-4xl text-center font-bold pt-5'>
                    The Tech I use
                </p>
                <Skills />
            </div>
            <div id="projects">
                <p className='text-2xl text-black sm:text-4xl text-center font-bold pt-5'>
                    Projects
                </p>
                <Projects />
            </div>
        </div>
    )
}

export default About;
