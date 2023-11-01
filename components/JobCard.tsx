"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div>

      <div className="job-card rounded-xl border bg-card text-card-foreground shadow">
        <div className="info  cursor-pointer " onClick={handleProfileClick}>
          <div className="avatar">
            <Image 
              src="/images/wallet.png"
              width={60}
              height={60}
              alt="company logo"
            />
            
          </div>
          <div className="details">
            <div className="flex w-full justify-between gap-10">
              <div className="name text-capitalize">{job.job_title}</div>
              <div className="rounded bg-green-400 px-4 text-sm text-white">Tag</div>
            </div>
              <div className="flex w-full justify-between gap-10">
                <h1 className="sp">{job.job_company} company</h1>
                <h1 className="py-1 text-sm">{job.job_location} Updated  28 Mar 2023 </h1>
              </div>
          </div>
        
        </div>
          <div className="flex w-full justify-between gap-10 px-4">
              <div className="flex w-full justify-start gap-10">
                  <h1> full time </h1>
                  <h1> 1-2 year</h1>
                  <h1>{job.job_location} location </h1>

              </div>
              <div className="flex w-full justify-end gap-10">
                
              </div>
          </div>



        <div className="locations">
          {job.description}
        </div>

      

        <div className="actions">
        
          <div className="comments">
            <h1 className="comment-count">$30K - 40K <span>/ Month </span></h1>
          </div>
          <div className="consultation">
            <span className="fee">100 Applied</span>
          </div>
          <div className="appo">
            <Link href="#" className="btn-primary">Apply Now</Link>
          </div>
        </div>
      
    
      {session?.user.id === job.creator._id && pathName === "/profile" && (
          <div className='mt-5 flex items-center justify-end gap-4 rounded-xl border bg-slate-100 p-2'>
            <p
              className='font-inter btn-green cursor-pointer text-sm'
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className='font-inter btn-danger cursor-pointer text-sm'
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
