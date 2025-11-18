import Image from 'next/image'
import React from 'react'

const LevelsCard = ({title , desc, icon}) => {
    return (
        <div data-aos="img-gutter-only"   
  data-aos-duration="1000" className='bg-[#263f5e57] rounded-[14px] '>

            <div className='px-9 py-10 flex justify-between flex-col gap-7'>
                <div className='flex items-center'>
                    <Image src={`${icon}`} width={90} height={90} alt={"icon"}></Image>
                </div>

                <div className=''>
                    <h1 className="text-[#ebebeb] font-bold mb-3  text-[24px]  leading-[32px] tracking-[0.4px]">
                        {title}
                    </h1>

                    <p className='text-[#ebebeb] font-Manrope text-[15.5px] tracking-[0.5px] font-[500] leading-[22px] '>
                        {desc}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default LevelsCard