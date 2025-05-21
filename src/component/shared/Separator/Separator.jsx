import React from 'react';
import separator from '@/app/assets/Separator.png'
import separator1 from '@/app/assets/Separator1.png'
import Image from 'next/image';

const Separator = ({textColor , text ="Creative solution"}) => {
    return (
        <div>
             <div className="justify-end  items-center gap-4 hidden lg:flex">
                <h3 className={`tracking-widest uppercase text-[14px] ${textColor == "white" ? "text-white":"text-black"}`}>{text} </h3>
                <div><Image src={textColor == "white" ? separator: separator1 } alt="separator" width={100} height={1}></Image></div>
            </div>
            
        </div>
    );
};

export default Separator;