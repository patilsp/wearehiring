"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import JobForm from "@/components/JobForm";

const UpdateJob = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  const [job, setJob] = useState({ job_title:"",  description: ""});
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/job/${jobId}`);
      const data = await response.json();

      setJob({
        job_title: data.job_title,
        description: data.description,
      });
    };

    if (jobId) getPromptDetails();
  }, [jobId]);

  const updateJob = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!jobId) return alert("Missing jobId!");

    try {
      const response = await fetch(`/api/job/${jobId}`, {
        method: "PATCH",
        body: JSON.stringify({
          job_title:job.job_title,
          description: job.description,
        }),
      });

      if (response.ok) {
        router.push("/jobs-dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <JobForm
      type='Edit'
      job={job}
      setJob={setJob}
      submitting={submitting}
      handleSubmit={updateJob}
    />
  );
};

export default UpdateJob;
