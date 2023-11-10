"use client";
import "@/styles/main.css" 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { BriefcaseIcon, UserIcon,CurrencyDollarIcon, HomeIcon } from "@heroicons/react/24/solid";

import React from 'react' 
import { myFunction } from '@/components/myJavaScriptFile.js'
import { FaUserFriends } from "react-icons/fa" 


const JobCard = ({ job, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (job.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${job.creator?._id}?name=${job.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(job.job_title);
    navigator.clipboard.writeText(job.tag);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="job-cards">
    <div className="job-card">
        <div className="job-card-header" >
          <div className="job-card-title" onClick={handleProfileClick}>{job.job_title}</div>
            <FaUserFriends className="h-4 w-4" />
            <div className="menu-dot"></div>
        </div>
        <div className="flex w-full justify-between gap-10">
            <h1 className="sp">{job.job_company} company</h1>
            <h1 className="py-1 text-sm">{job.job_location} Updated  28 Mar 2023 </h1>
          </div>
    
        <div className="job-card-subtitle">
          {job.description}
        </div>
        <div className="job-detail-buttons">
            <button className="search-buttons detail-button">{job.job_type} Full Time</button>
            <button className="search-buttons detail-button">{job.job_exp} Min. 1 Year</button>
            <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
            <button className="search-buttons card-buttons">Apply Now</button>
            <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
    </div>
    
    
</div>
  );
};

export default JobCard;
