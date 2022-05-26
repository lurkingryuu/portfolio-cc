import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaPython, FaReact} from "react-icons/fa";
import {SiJupyter} from "react-icons/si";

const Projects = () => {
    return(
        <VerticalTimeline lineColor={"#282828"}>
            <VerticalTimelineElement className="" contentStyle={{ background: '#fff', color: '#000' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="March 2022" dateClassName={"font-bold"} iconStyle={{ background: '#282828', color: '#fff' }} icon={<FaPython className={"text-yellow-300"}/>}>
                <h3 className="vertical-timeline-element-title text-xl underline underline-offset-1 font-bold">Video Calling Web App</h3>
                <p>
                    Application for video Conferencing via the web. Used in DIY project in first-semester at my College.
                </p>
                <div className={"flex space-x-2 mt-4"}>
                    <a href="https://github.com/lurkingryuu/VideoCallingWeb" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Source Code</a>
                    <a href="https://video-chat-lurkingryuu.herokuapp.com/" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Website</a>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="" contentStyle={{ background: '#fff', color: '#000' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="March 2022" dateClassName={"font-bold"} iconStyle={{ background: '#282828', color: '#fff' }} icon={<FaPython className={"text-yellow-300"}/>}>
                <h3 className="vertical-timeline-element-title text-xl underline underline-offset-1 font-bold">Flappy Bird</h3>
                <p>
                    Flappy Bird Game made in Python using Pygame library
                </p>
                <div className={"flex space-x-2 mt-4"}>
                    <a href="https://github.com/lurkingryuu/flappy-bird" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Source Code</a>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="" contentStyle={{ background: '#fff', color: '#000' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="April 2022" dateClassName={"font-bold"} iconStyle={{ background: '#282828', color: '#fff' }} icon={<SiJupyter className={"text-orange-500"}/>}>
                <h3 className="vertical-timeline-element-title text-xl underline underline-offset-1 font-bold">Mask Detection</h3>
                <p>
                    This Project is a Computer Vision Project, where the machine detects if a person present in the video or in front of the screen wears a mask or not.
                </p>
                <div className={"flex space-x-2 mt-4"}>
                    <a href="https://github.com/lurkingryuu/Mask-Detection" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Source Code</a>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="" contentStyle={{ background: '#fff', color: '#000' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="April 2022" dateClassName={"text-blue-500 text-4xl font-[900]"} iconStyle={{ background: '#282828', color: '#fff' }} icon={<FaReact className={"text-blue-300"}/>}>
                <h3 className="vertical-timeline-element-title text-xl underline underline-offset-1 font-bold">Portfolio Site</h3>
                <p>
                    Basic portfolio site, which provides information about my skills and experiences.
                </p>
                <div className={"flex space-x-2 mt-4"}>
                    <a href="https://github.com/lurkingryuu/Mask-Detection" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Source Code</a>
                    <a href="https://lurkingryuu.github.io/portfolio-cc" className={"bg-blue-400 px-2 py-1 rounded-full"} target="blank">Website</a>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Projects;