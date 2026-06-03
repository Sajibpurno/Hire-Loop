'use client';

import { BoltIcon } from "lucide-react";
import DashboardStats from "../../../components/dashboard/DashboardStats";
import { authClient } from "../../../lib/auth-client";
import { FileText, Persons, CircleCheck } from "@gravity-ui/icons";

const RecruiterHomePage = () => {
    const { data: session, isPending } = authClient.useSession();
    if(isPending){
        return <div>Loading...</div>
    }
    const myDashboardData = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: <FileText className="w-4 h-4 text-zinc-400" />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <Persons className="w-4 h-4 text-zinc-400" />,
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: <BoltIcon className="w-4 h-4 text-zinc-400" />,
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: <CircleCheck className="w-4 h-4 text-zinc-400" />,
    },
  ];

    const user = session?.user
    console.log('User data:', user);
    
    return (
        <div className="ml-4">
            <h2 className='text-3xl  font-bold mt-5'>Welcome back, {user?.name}</h2>
            <DashboardStats items={myDashboardData} />
        </div>
    );
};

export default RecruiterHomePage;