import React from 'react';
import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Social from "./Social";

const Profile = () => {
    return (
        <div className='w-full max-h-full'>
            <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5">
                <div>
                    <img src={profile} alt="profile pic" className="w-32 mx-auto shadow-xl rounded-full drop-shadow-lg" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl text-gray-900 sm:text-2xl">Karthikeya</p>
                    <p className="text-sm text-gray-900 pt-2 pb-4 px-5 w-auto inline-block border-b-2 sm:text-base">
                        Full Stack Developer | AI-ML Enthusiast
                    </p>
                    <div className="flex space-x-4 items-center justify-center mt-4">
                        <Social link={"https://github.com/lurkingryuu"} class={"text-xl p-1 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300"} icon={<FaGithub />}/>
                        <Social link='https://www.linkedin.com/in/lurkingryuu/' class={"text-xl p-1 text-blue-800 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300"} icon={<FaLinkedin/>}/>
                        <Social link='https://www.facebook.com/surya.karthik.33821/' class="text-xl p-1 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300" icon={<FaFacebook/>}/>
                        <Social link='https://www.instagram.com/karthikeya_05052003/' class="text-xl p-1 text-pink-600 hover:bg-pink-600 hover:text-white rounded-full transition-colors duration-300" icon={<FaInstagram />}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
