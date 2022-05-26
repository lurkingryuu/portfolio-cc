import React from "react";

const SkillCard = (props) => {
    return(
        <div className={`flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52 ${props.className}`}>
            {props.icon}
            <p className="mt-5 text-xl sm:text-2xl font-semibold text-center">{props?.text}</p>
        </div>
    );
}

export default SkillCard;