import React, { useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  MdAccountBalance,
  MdFeaturedPlayList,
  MdMessage,
} from "react-icons/md";
import { TfiBlackboard } from "react-icons/tfi";
import DashboardCard from "./DashboardCard";
import { GrUserWorker } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import ComplaintsBarGraph from "./ComplaintsBarGraph";

const Dashboard = () => {
  const [otpReceived, setOtpReceived] = useState("");
  const [credential, setCredential] = useState<Credential | null>(null);
  useEffect(() => {
    if ("OTPCredential" in window) {
      /* const input = document.querySelector(
        'input[autocomplete="one-time-code"]'
      ) as HTMLInputElement;
      console.log("coming inside"); */
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          setCredential(otp);
          setOtpReceived(otp?.code || "not received");
          //input.value = otp?.code || "not recevived";
          alert(otp?.code);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("WebOTP not supported!.");
    }
  }, []);
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="font-semibold text-lg md:text-2xl">Admin Dashboard</div>

      {/* <input type="text" inputMode="numeric" autoComplete="one-time-code" /> */}
      <div className="text-4xl">This is the otp - {otpReceived}</div>

      <div className="text-2xl">This is credential - {String(credential)}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 ">
        <div className="">
          <DashboardCard
            bg="red"
            buttonTitle="Add New Member"
            icon={<BsFillPeopleFill size={60} color="white" />}
            quantity={26}
            title="Add Society Member"
          />
        </div>
        <div className="">
          <DashboardCard
            bg="blue"
            buttonTitle="Manage Member List"
            icon={<MdFeaturedPlayList size={60} color="white" />}
            quantity={16}
            title="Member List"
          />
        </div>
        <div className="">
          <DashboardCard
            bg="yellow"
            buttonTitle="Open Complaint Box"
            icon={<MdMessage size={60} color="white" />}
            quantity={26}
            title="Complaint Box"
          />
        </div>
        <div className="">
          <DashboardCard
            bg="purple"
            buttonTitle="Manage Notice Board"
            icon={<TfiBlackboard size={60} color="white" />}
            quantity={26}
            title="Manage Notice Board"
          />
        </div>
        <div className="">
          <DashboardCard
            bg="blue"
            buttonTitle="Manage Worker List"
            icon={<FaTools size={60} color="white" />}
            quantity={26}
            title="Manage Worker"
          />
        </div>

        <div className="">
          <DashboardCard
            bg="green"
            buttonTitle="Manage Account"
            icon={<MdAccountBalance size={60} color="white" />}
            quantity={26}
            title="Society Account"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-4 py-2 bg-blue-500 text-white font-semibold w-full">
          Complaint Reports
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded shadow">
            <ComplaintsBarGraph />
          </div>
          <div className="flex flex-col mt-4">
            <div className="px-4 py-2 bg-blue-500 text-white font-semibold w-full">
              Events
            </div>
            <div className="flex w-full overflow-scroll h-[85%]">
              <table className="w-full overflow-x-scroll">
                <thead className="bg-white overflow-x-scroll">
                  <tr>
                    <th className="text-start px-2 py-2">Title</th>
                    <th className="text-start px-2 py-2">Date</th>
                    <th className="text-start px-2 py-2">Time</th>
                    <th className="text-start px-2 py-2">Host by</th>
                    <th className="text-start px-2 py-2">Venue</th>
                  </tr>
                </thead>
                <tbody className="border-t border-gray-600 [&>*:nth-child(even)]:bg-white overflow-x-scroll">
                  <tr>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        X-MAS celebration
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        25/12/2023
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        10.00pm-2.00am
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Shubham
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Club House
                      </span>
                    </td>
                  </tr>
                  {/* 2 row */}
                  <tr>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        X-MAS celebration
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        25/12/2023
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        10.00pm-2.00am
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Shubham
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Club House
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        X-MAS celebration
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        25/12/2023
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        10.00pm-2.00am
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Shubham
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Club House
                      </span>
                    </td>
                  </tr>
                  {/* 2 row */}
                  <tr>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        X-MAS celebration
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        25/12/2023
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        10.00pm-2.00am
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Shubham
                      </span>
                    </td>
                    <td className="text-start px-2 py-2">
                      <span className="line-clamp-1 font-medium text-gray-700">
                        Club House
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
