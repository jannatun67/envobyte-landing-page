import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button className="lg:px-26 cursor-pointer lg:py-4 px-12 py-3  uppercase  text-white bg-[#FF693B] rounded-lg hover:bg-[#FF693B] transition">
                {text}
              </button>
        </div>
    );
};

export default Button;