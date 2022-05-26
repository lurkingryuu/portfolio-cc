import React from 'react';

const Social = (props) => {
    return(
        <div className='flex flex-col justify-center items-center'>
            <a href={props.link} className={`${props.class}`} target="blank">
                {props.icon}
            </a>
            <span className='text-sm text-black'>{props?.text}</span>
        </div>
    );
}

export default Social;