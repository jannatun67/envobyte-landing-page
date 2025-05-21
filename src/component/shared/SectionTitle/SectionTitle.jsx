import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div>
            <div className="text-center mb-10 space-y-4  mx-3">
                <p className="text-[#0C89FF] tracking-widest font-semibold text-sm uppercase">
                   {subTitle}
                </p>
                <h2 className="lg:text-5xl text-4xl font-bold text-gray-900">{title}</h2>
            </div>

        </div>
    );
};

export default SectionTitle;