"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/jobs`);
      const data = await response.json();

      setMyJobs(data);
    };

    if (session?.user.id) fetchJobs();
  }, [session?.user.id]);

  const handleEdit = (job) => {
    router.push(`/update-job?id=${job._id}`);
  };

  const handleDelete = async (job) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this job?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/job/${job._id.toString()}`, {
          method: "DELETE",
        });

        const filteredJobs = myJobs.filter((item) => item._id !== job._id);

        setMyJobs(filteredJobs);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    
    <Profile
      name='My'
      desc='Explore your personalized profile page. Unleash your creativity by sharing remarkable prompts and igniting inspiration in others through the magic of your imagination.'
      data={myJobs}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
