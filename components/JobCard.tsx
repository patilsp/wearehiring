"use client";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { BriefcaseIcon, UserIcon,CurrencyDollarIcon, HomeIcon } from "@heroicons/react/24/solid";


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
    <div
    className="dark mb-4 space-y-6 rounded-md border-slate-100 bg-primary p-2 pb-4 shadow dark:bg-black sm:space-y-8 sm:p-10 sm:pb-8 lg:space-y-6 lg:p-6 xl:space-y-8 xl:p-10">
      <div className='flex items-start gap-5'>
        <div
          className='flex flex-1 cursor-pointer justify-start gap-3'
          onClick={handleProfileClick}
        >
          <Image
            src='/images/logo31.png'
            alt='company logo'
            width={100}
            height={100}
            className='rounded-full'
          />

          <div className='flex flex-col'>
            <h3 className='text-3xl font-bold text-slate-900'>
              {job.job_title}
            </h3>
            <h3>
              <div className='flex gap-4'>
                <p className="text-sm font-semibold text-pink-400"> {job.job_company} company </p>
                <p className="text-sm font-semibold text-slate-800"> {job.job_location} location</p>
              </div>
            </h3>
          </div>
        </div>
         

         <div>
            <h1 className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800"> 1 Week Left </h1>
            <p className="p-1 text-xs text-slate-400"> Published Feb 10 2023 </p>

          </div>

        <div className='copy_btn mt-1 bg-slate-100' onClick={handleCopy}>
          <Image
            src={
              copied === job.description
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === job.description ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className='flex gap-10'>
        <p className='text-sm font-extrabold tracking-tight text-slate-900'>
          <BriefcaseIcon className="mr-1 inline-block h-4 w-4 text-slate-500" /> Full Time
        </p>
        <p className='text-sm font-extrabold tracking-tight text-slate-900'>
          <UserIcon className="mr-1 inline-block h-4 w-4 text-slate-500" /> 3 Yr Experience
        </p>
        <p className='text-sm font-extrabold tracking-tight text-slate-900'>
          <CurrencyDollarIcon className="mr-1 inline-block h-4 w-4 text-slate-500" /> ${job.salary}/Month
        </p>
        <p className='text-sm font-extrabold tracking-tight text-slate-900'>
          <HomeIcon className="mr-1 inline-block h-4 w-4 text-slate-500" />WFO
          </p>
        <p className='text-sm font-extrabold tracking-tight text-slate-900'>
          <UserIcon className="mr-1 inline-block h-4 w-4 text-slate-500" />100 Application
        </p>

        {/* <p
            className='font-inter blue_gradient cursor-pointer text-sm'
            onClick={() => handleTagClick && handleTagClick(job.job_title)}
          >
            #{job.tag}
          </p> */}
      </div>
      {/* <p className='mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 '>{job.description}</p> */}

  
     {session?.user.id === job.creator._id && pathName === "/profile" && (
        <div className='flex-center mt-5 gap-4 border-t border-slate-100 pt-3'>
          <p
            className='font-inter green_gradient cursor-pointer text-sm'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter orange_gradient cursor-pointer text-sm'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
