import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdAccountBalance, MdFeaturedPlayList, MdMessage } from 'react-icons/md'
import { TfiBlackboard } from "react-icons/tfi";
import DashboardCard from './DashboardCard'
import { GrUserWorker } from "react-icons/gr";
import { FaTools } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
         <div className='font-semibold text-lg md:text-2xl'>
            Admin Dashboard
        </div>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 '>
       
        <div className=''>
        <DashboardCard bg='red' buttonTitle='Add New Member' icon={<BsFillPeopleFill size={60} color="white"/>} quantity={26} title="Add Society Member"/>
        </div>
        <div className=''>
        <DashboardCard bg='blue' buttonTitle='Manage Member List' icon={<MdFeaturedPlayList size={60} color="white"/>} quantity={16} title="Member List"/>
        </div>
        <div className=''>
        <DashboardCard bg='yellow' buttonTitle='Open Complaint Box' icon={<MdMessage size={60} color="white"/>} quantity={26} title="Complaint Box"/>
        
            </div>
            <div className=''>
        <DashboardCard bg='purple' buttonTitle='Manage Notice Board' icon={<TfiBlackboard size={60} color="white"/>} quantity={26} title="Manage Notice Board"/>
        </div>
        <div className=''>
        <DashboardCard bg='blue' buttonTitle='Manage Worker List' icon={<FaTools size={60} color="white"/>} quantity={26} title="Manage Worker"/>
        </div>

        
        <div className=''>
        <DashboardCard bg='green' buttonTitle='Manage Account' icon={<MdAccountBalance size={60} color="white"/>} quantity={26} title="Society Account"/>
    </div>
    </div>
    </div>
  )
}

export default Dashboard