import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdArrowForward } from 'react-icons/md'

interface DashboardCardProps{
bg: string;
icon: React.ReactNode;
quantity: number;
title: string;
buttonTitle: string;
}

const DashboardCard = ({bg,buttonTitle,icon,quantity,title}:DashboardCardProps) => {
  return (
    <div className='flex flex-col w-full hover:scale-[1.01] z-[0] duration-500'>
        <div className={`flex items-start gap-2 w-full ${bg === 'red' ? 'bg-red-500' : (bg === 'blue' ?'bg-blue-500':(bg==='yellow'? 'bg-yellow-500':(bg==='green' ? 'bg-green-500' : (bg === 'purple' && 'bg-purple-500'))) )} p-4 text-white rounded-t`}>
            <div>
                {icon}
                
            </div>
            <div className='ml-auto flex flex-col items-end'>
                <span className=' font-semibold'>{quantity}</span>
                <span className='font-medium overflow-hidden whitespace-nowrap text-ellipsis'>{title}</span>
            </div>
        </div>
        <div className={`bg-gray-100 p-2 flex items-center w-full border ${bg === 'red' ? 'border-red-500' : (bg === 'blue' ?'border-blue-500':(bg==='yellow'? 'border-yellow-500':(bg==='green' ? 'border-green-500' : 'border-purple-500')) )}  rounded-b cursor-pointer`}>
            <span className='p-2 border border-gray-400 text-sm font-medium'>{buttonTitle}</span>
            <span className={`ml-auto flex items-center justify-center p-1 ${bg === 'red' ? 'bg-red-500' : (bg === 'blue' ?'bg-blue-500':(bg==='yellow'? 'bg-yellow-500':(bg==='green' ? 'bg-green-500' : 'bg-purple-500')) )} rounded-full text-white`}>
                <MdArrowForward/>
            </span>

        </div>
    </div>
  )
}

export default DashboardCard