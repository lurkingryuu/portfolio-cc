import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Social from "./Social";

const Footer = () => {
    return (
        <div className='py-5 border-t-2'>
            <div className="flex space-x-10 items-center justify-center mt-4">
                <Social link={"https://github.com/lurkingryuu"} class={"text-3xl p-1 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300"} icon={<FaGithub />} text={"GitHub"}/>
                <Social link="https://www.linkedin.com/in/lurkingryuu/" class={"text-3xl p-1 text-blue-800 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300"} icon={<FaLinkedin />} text={"Linkedin"}/>
                <Social link="https://www.facebook.com/surya.karthik.33821/" class={"text-3xl p-1 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300"} icon={<FaFacebook />} text={"Facebook"}/>
                <Social link="https://www.instagram.com/karthikeya_05052003/" class={"text-3xl p-1 text-pink-600 hover:bg-pink-600 hover:text-white rounded-full transition-colors duration-300"} icon={<FaInstagram />} text={"Instagram"}/>
            </div>
        </div>
    )
}

export default Footer;
