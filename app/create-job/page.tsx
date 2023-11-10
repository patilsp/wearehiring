"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import JobForm from "@/components/JobForm";
import { Button } from "@/registry/new-york/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from "@/registry/new-york/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Textarea } from "@/registry/new-york/ui/textarea"


const CreateJob = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [job, setJob] = useState({ company_name:"", job_title: "", description:"", salary: "", status:"", createddate:"", job_type:"" });

  const createJob= async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job/new", {
        method: "job",
        body: JSON.stringify({
          company_name: job.company_name,
          job_title: job.job_title,
          description: job.description,
          salary: job.salary,
          status:job.status,
          createddate: job.createddate,      
          job_type:job.job_type,
          userId: session?.user.id,
          
        }),
      });

      if (response.ok) {
        router.push("/user-dashboard");
        toast.success("Job has been created! 🔥");
      }
      
    } catch (error) {
      toast.error(error);
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
