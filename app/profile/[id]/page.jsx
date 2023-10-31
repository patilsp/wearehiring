"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@/components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/api/users/${params?.id}/jobs`);
      const data = await response.json();

      setUserJobs(data);
    };

    if (params?.id) fetchJobs();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional jobs and be inspired by the power of their imagination`}
      data={userJobs}
    />
  );
};

export default UserProfile;
