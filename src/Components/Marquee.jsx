"use client";
import React from "react";

const MarqueeList = [
    "Next Intelligence",
    "Future Now",
    "Empowering Innovation",
    "Smarter Tomorrow",
    "Think Forward",
    "Cognitive Shift"
];

const RotatedMarquee = () => {
    return (
        <div className="bg-blue py-14 overflow-hidden">
            {/* TOP MARQUEE */}
            <div className="bg-[#5676f659] py-5 rotate-2 whitespace-nowrap flex">
                <div className="marquee-track">
                    {MarqueeList.concat(MarqueeList).map((item, i) => (
                        <React.Fragment key={i}>
                            <span
                                
                                className="font-Manrope text-white  font-semibold text-6xl tracking-[0.4px] mx-4"
                            >
                                {item}
                            </span>
                            <span   className="font-Manrope text-white  font-semibold text-6xl tracking-[0.4px] mx-4">/</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* BOTTOM MARQUEE */}
            <div className="bg-[#5677F6] -mt-5 py-5 -rotate-1 whitespace-nowrap flex">
                <div className="marquee-track reverse">
                    {MarqueeList.concat(MarqueeList).map((item, i) => (
                         <React.Fragment key={i}>
                            <span
                               
                                className="font-Manrope text-white  font-semibold text-6xl tracking-[0.4px] mx-4"
                            >
                                {item}
                            </span>
                            <span className="font-Manrope text-white  font-semibold text-6xl tracking-[0.4px] mx-4">/</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RotatedMarquee;
