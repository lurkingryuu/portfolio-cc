import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-5 border-t-2'>
            <div className="flex space-x-10 items-center justify-center mt-4">
                <div className='flex flex-col justify-center items-center'>
                    <a href='https://github.com/lurkingryuu' className="text-3xl p-1 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300" target="blank">
                        <FaGithub />
                    </a>
                    <span className='text-sm text-black'>GitHub</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <a href='https://www.linkedin.com/in/lurkingryuu/' className="text-3xl p-1 text-blue-800 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300" target="blank">
                    <FaLinkedin />
                </a>
                <span className='text-sm text-black'>LinkedIn</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <a href='https://www.facebook.com/surya.karthik.33821/' className="text-3xl p-1 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300" target="blank">
                    <FaFacebook />
                </a>
                <span className='text-sm text-black'>Facebook</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <a href='https://www.instagram.com/karthikeya_05052003/' className="text-3xl p-1 text-pink-600 hover:bg-pink-600 hover:text-white rounded-full transition-colors duration-300" target="blank">
                    <FaInstagram />
                </a>
                <span className='text-sm text-black'>Instagram</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
