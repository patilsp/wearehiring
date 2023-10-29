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
  const [post, setPost] = useState({ company_name:"", job_title: "", description:"", salary: "", status:"", createddate:"", job_type:"" });

  const createJob= async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job/new", {
        method: "POST",
        body: JSON.stringify({
          company_name: post.company_name,
          job_title: post.job_title,
          description: post.description,
          salary: post.salary,
          status:post.status,
          createddate: post.createddate,      
          job_type:post.job_type,
          userId: session?.user.id,
          
        }),
      });

      if (response.ok) {
        router.push("/jobs-dashboard");
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
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createJob}
    />
  );
};

export default CreateJob;
