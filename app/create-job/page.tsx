"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import JobForm from "@/components/JobForm";

const CreateJob = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [job, setJob] = useState({
    company_name: "",
    job_title: "",
    description: "",
    salary: "",
    status: "",
    createddate: "",
    job_type: "",
  });

  const createJob = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job/new", {
        method: "POST", // Corrected "job" to "POST"
        body: JSON.stringify({
          userId: session.id, // Use session.id to access the user's ID
          company_name: job.company_name,
          job_title: job.job_title,
          description: job.description,
          salary: job.salary,
          status: job.status,
          createddate: job.createddate,
          job_type: job.job_type,
        }),
      });

      if (response.ok) {
        router.push("/jobs-dashboard");
        toast.success("Job has been created! 🔥");
      } else {
        toast.error("An error occurred while creating the job.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <JobForm
      type='Create'
      job={job}
      setJob={setJob}
      submitting={submitting}
      handleSubmit={createJob}
    />
  );
};

export default CreateJob;
