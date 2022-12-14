import React from 'react';
import Profile from "../components/Profile";
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
    return (
        <>
        <div className='h-[80vh] scroll-smooth md:flex justify-center items-center mt-12 md:my-auto'>
            <div data-aos='fade-down' data-aos-duration='1000' className='md:mr-8'>
                <Profile />
            </div>
            <div data-aos='fade-up' data-aos-duration='400' data-aos-delay='500'>
                <div className='max-w-xl mt-20 mx-auto'>
                    <p className="text-2xl text-black sm:text-3xl md:text-4xl font-bold text-center">
                        Hello o/
                    </p>
                    <p className="text-base mx-auto mt-4 sm:text-xl md:text-2xl text-center max-w-sm sm:max-w-lg">
                        I am Yelisetty Karthikeya
                        I am a Second-year Undergraduate Student of the department of Computer Science and Engineering, Dual degree course.
                    </p>
                </div>
            </div>
        </div>
        <div className='mt-32'>
            <a href='#tech'>
                <FaChevronDown className='animate-bounce hover:cursor-pointer mx-auto text-3xl text-blue-400 absolute left-0 right-0 bottom-10 sm:bottom-10'/>
            </a>
        </div>
        </>
    )
}

export default Home;
