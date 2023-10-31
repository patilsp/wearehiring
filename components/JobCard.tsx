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
    <div>

    <div className="job-card rounded-xl border bg-card text-card-foreground shadow">
      <div className="info  cursor-pointer " onClick={handleProfileClick}>
        <div className="avatar">
          <img src="//via.placeholder.com/200" alt="doc name" />
        </div>
        <div className="details">
            <div className="name">{job.job_title}</div>
            <div className="meta-info">
              <span className="sp">{job.job_company} company</span>
              <span className="prac-area"> {job.job_location} location</span>
              <span className="exp-yr">10 years exp.</span>
            </div>
        </div>
       
      </div>
      <div className="locations">
        {job.description}
      </div>
      <div className="actions">
        <div className="ratings">
          <span className="rating-control">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </span>
          <span className="rating-count">000 Ratings</span>
        </div>
        <div className="comments">
          <span className="comment-count"><strong>1K</strong> Applicants</span>
        </div>
        <div className="consultation">
          <span className="fee"><strong>3K</strong>Viewed</span>
        </div>
        <div className="appo">
          <a href="#" className="btn">Apply Now</a>
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
