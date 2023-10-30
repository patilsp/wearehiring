"use client";

import { useState, useEffect } from "react";

import JobCard from "./JobCard";

const JobCardList = ({ data, handleTagClick }) => {
  return (
    <div className='job_layout'>
      {data.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const JobFeed = () => {
  const [allJobs, setAllJobs] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/job");
    const data = await response.json();

    setAllJobs(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allJobs.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.job_title) ||
        regex.test(item.tag)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed '>
      <form className='relative mb-2 flex w-full justify-end md:top-[-50px]'>
        <input
          type='text'
          placeholder='Search for a title or a location'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <JobCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <JobCardList data={allJobs} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default JobFeed;
