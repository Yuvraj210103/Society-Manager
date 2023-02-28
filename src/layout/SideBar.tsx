import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa'
import { ImTicket } from 'react-icons/im'
import { MdDashboard, MdNote, MdPeopleAlt } from 'react-icons/md'

const SideBar = () => {
  return (
    <div
        className={` md:flex flex-col bg-gray-800 text-white  shadow justify-start h-[calc(100vh-0px)] overflow-y-auto sticky top-0 w-[230px] hidden`}
      >
        <div className="py-4">
        <i
                className="block h-[44px] w-48 cursor-pointer invert"
                style={{
                  backgroundImage: "url('/assets/images/logoSVG.svg')",
                  backgroundSize: '192px',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <MdDashboard size={25} />
          </span>
          <span className="font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <FaBuilding size={25} />
          </span>
          <span className="font-medium">Manage Society</span>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <MdPeopleAlt size={25} />
          </span>
          <span className="font-medium">Members</span>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <ImTicket size={25} />
          </span>
          <span className="font-medium">Complaint Ticket</span>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <MdNote size={25} />
          </span>
          <span className="font-medium">Maintainance Master</span>
        </div>
        <div className="flex items-center gap-4 py-4 hover:bg-gray-900 px-4 w-full cursor-pointer">
          <span>
            <AiFillSetting size={25} />
          </span>
          <span className="font-medium">Settings</span>
        </div>
      </div>
  )
}

export default SideBar