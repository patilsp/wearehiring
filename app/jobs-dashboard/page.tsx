import "@/styles/main.css" 
import React from 'react' 
import  myFunction  from '@/components/myJavaScriptFile.js'
import { FaUserFriends } from "react-icons/fa" 

import JobFeeds from "@/components/JobFeed"


const Page = () => { return (

        <div className="job">
            <div className="wrapper">
                <div className="search-menu border">
                    <div className="search-bar">
                        <input type="text" className="search-box"  />
                        <div className="search item">
                            UI/UX Designer
                            <FaUserFriends className="h-4 w-4" />
                        </div>
                        <div className="search item">
                            UI Designer
                            <FaUserFriends className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="search-location">
                        <FaUserFriends className="h-4 w-4" />
                        Pune
                    </div>
                    <div className="search-job">
                        <FaUserFriends className="h-4 w-4" />
                        <input type="text" placeholder="Job Type" />
                    </div>
                    <div className="search-salary">
                        <FaUserFriends className="h-4 w-4" />
                        <input type="text" placeholder="Salary Range" />
                    </div>
                    <button className="search-button">Find Job</button>
                </div>
                <div className="main-container ">
                    <div className="search-type ">
                        <div className="alert bg-blue-400">
                            <div className="alert-title">Create Job Alert</div>
                            <div className="alert-subtitle text-zinc-600">Create a job alert now and never miss a job</div>
                            <input type="text" placeholder="Enter job keyword" />
                            <button className="search-buttons">Create Job Alerts</button>
                        </div>
                        <div className="job-time">
                            <div className=" font-semibold text-zinc-600">Type of Employment</div>
                            <div className="job-wrapper">
                                <div className="type-container">
                                    <input type="checkbox" id="job1" className="job-style" checked />
                                    <label htmlFor="job1">Full Time Jobs</label>
                                    <span className="job-number">56</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job2" className="job-style" />
                                    <label htmlFor="job2">Part Time Jobs</label>
                                    <span className="job-number">43</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job3" className="job-style" />
                                    <label htmlFor="job3">Remote Jobs</label>
                                    <span className="job-number">24</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job4" className="job-style" />
                                    <label htmlFor="job4">Internship Jobs</label>
                                    <span className="job-number">27</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="job-time">
                            <div className=" font-semibold text-zinc-600">Seniority Level</div>
                            <div className="job-wrapper">
                                
                                <div className="type-container">
                                    <input type="checkbox" id="job8" className="job-style" />
                                    <label htmlFor="job8">Entry Level</label>
                                    <span className="job-number">44</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job9" className="job-style" checked />
                                    <label htmlFor="job9">Mid Level</label>
                                    <span className="job-number">35</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job10" className="job-style" checked />
                                    <label htmlFor="job10">Senior Level</label>
                                    <span className="job-number">29</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="job-time">
                            <div className=" font-semibold text-zinc-600">Salary Range</div>
                            <div className="job-wrapper">
                                <div className="type-container">
                                    <input type="checkbox" id="job1" className="job-style" />
                                    <label htmlFor="job1">$700 - $1000</label>
                                    <span className="job-number">49</span>
                                </div>
                              
                                <div className="type-container">
                                    <input type="checkbox" id="job4" className="job-style" />
                                    <label htmlFor="job4">$1500 - $1800</label>
                                    <span className="job-number">27</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job5" className="job-style" checked />
                                    <label htmlFor="job5">$2000 - $3000</label>
                                    <span className="job-number">76</span>
                                </div>
                                <div className="type-container">
                                    <input type="checkbox" id="job6" className="job-style" checked />
                                    <label htmlFor="job6">$3000 - $4000</label>
                                    <span className="job-number">22</span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="searched-jobs">
                        <div className="searched-bar">
                            <div className="searched-show">Showing 46 Jobs</div>
                            <div className="searched-sort">Sort by: <span className="post-time">Newest Post </span><span className="menu-icon">▼</span></div>
                        </div>
                        <div className="job-cards">
                          <JobFeeds />
                        </div>
                        <div className="job-overview">
                            <div className="job-overview-cards">
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <FaUserFriends className="h-4 w-4" />
                                            <div className="overview-detail">
                                                <div className="job-card-title">UI / UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    2972 Westheimer Rd. Santa Ana.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <FaUserFriends className="h-4 w-4" />
                                            <div className="overview-detail">
                                                <div className="job-card-title">Sr. Product Designer</div>
                                                <div className="job-card-subtitle">
                                                    1901 Thornridge Cir.Shiloh, Hawaii.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <FaUserFriends className="h-4 w-4" />
                                            <div className="overview-detail">
                                                <div className="job-card-title">User Experience Designer</div>
                                                <div className="job-card-subtitle">
                                                    414 Parker Rd. Allentown, New york
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                                <path
                                                    d="M24 7.6c0-.3 0-.5-.4-.6C12.2.2 12.4-.3 11.6 0 3 5.5.6 6.7.2 7.1c-.3.3-.2.8-.2 8.3 0 .9 7.7 5.5 11.5 8.4.4.3.8.2 1 0 11.2-8 11.5-7.6 11.5-8.4V7.6zm-1.5 6.5l-3.9-2.4L22.5 9zm-5.3-3.2l-4.5-2.7V2L22 7.6zM12 14.5l-3.9-2.7L12 9.5l3.9 2.3zm-.8-12.4v6L6.8 11 2.1 7.6zm-5.8 9.6l-3.9 2.4V9zm1.3 1l4.5 3.1v6l-9-6.3zm6 9.1v-6l4.6-3.1 4.6 2.8z"
                                                />
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">Product Designer</div>
                                                <div className="job-card-subtitle">
                                                    4517 Washington Ave. Syracuse.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 9.3l-.7 2h1.4z" />
                                                <path
                                                    d="M12 1C5.4 1 0 5.2 0 10.4c0 3.4 2.2 6.3 5.6 8-1.3 4.4-1.3 4.4-1 4.6.2.1.5 0 5.3-3.4l2.1.2c6.6 0 12-4.2 12-9.4S18.6 1 12 1zM6 13c0 .4-.3.7-.6.7s-.7-.3-.7-.7V9H3.6c-.4 0-.7-.4-.7-.7s.3-.7.7-.7H7c.4 0 .7.3.7.7s-.3.6-.7.6h-1zm5.4.7c-.7 0-.6-.6-.9-1.2h-2c-.4.6-.3 1.2-1 1.2s-.8-.4-.6-1.1l1.6-4.3a1 1 0 011-.7c.4 0 .8.3.9.7 1 3.4 2.6 5.4 1 5.4zm4-.1h-2.2c-1.2 0-.5-1.6-.7-5.3 0-.4.3-.7.7-.7s.7.3.7.7v4h1.5c.3 0 .6.3.6.6 0 .4-.3.7-.6.7zm5.4-.5l-.3.4c-1 .7-1.6-1.4-2.6-2.3l-.2.3V13c0 .4-.3.7-.7.7a.7.7 0 01-.7-.7V8.3a.7.7 0 011.4 0v1.5c1.3-1 2-2.7 2.8-2 .8.9-.9 1.6-1.5 2.5 1.6 2.2 1.9 2.3 1.8 2.8z"
                                                />
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">UI / UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    2711 Ash Dr. San Jose, South Dark.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">UI Developer</div>
                                                <div className="job-card-subtitle">
                                                    1725 Preston Rd. Inglewood.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#fff">
                                                    <path
                                                        d="M3.6 21.2h14.2l-.6-2.2 5.8 5V2.5C23 1 21.8 0 20.4 0H3.6A2.6 2.6 0 001 2.5v16.2c0 1.4 1.2 2.5 2.6 2.5zM14 5.7zM6.5 7C8.3 5.6 10 5.7 10 5.7l.2.1c-2.3.6-3.3 1.6-3.3 1.6.1 0 4.6-2.7 10.1 0 0 0-1-1-3.1-1.5l.2-.2c.3 0 1.8 0 3.5 1.3 0 0 1.8 3.1 1.8 7 0 0-1.1 1.6-4 1.7l-.7-1a4 4 0 002.2-1.4c-3.2 2-6 1.7-9.3.3h-.1l-.4-.2s.6 1 2.2 1.4l-.8 1c-2.8 0-3.8-1.8-3.8-1.8 0-3.9 1.8-7 1.8-7z"
                                                    />
                                                    <path d="M14.3 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7zM9.7 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7z" />
                                                </g>
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">User Interface Designer</div>
                                                <div className="job-card-subtitle">
                                                    2972 Westheimer Rd. Santa Ana.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                                <path
                                                    d="M16.4 23.2C28.6 18.2 25.2 0 12 0a12 12 0 104.4 23.2zM5.3 20c.8-1.5 3.6-5.5 8.3-7 1 2.6 1.7 5.5 1.7 8.8-3.5 1.2-7.3.4-10-1.8zm11.5 1.2a27 27 0 00-1.7-8.4c2-.4 4.5-.2 7.2 1-.6 3.2-2.6 6-5.5 7.4zm5.7-9c-3-1.1-5.7-1.3-8-.8a28 28 0 00-1.1-2.3 20 20 0 006.5-4c1.7 1.9 2.7 4.3 2.6 7zM18.9 4c-.9.8-2.9 2.4-6.3 3.8A28 28 0 008 2.3C11.6.8 15.8 1.4 19 4zM6.6 3c.8.7 2.7 2.5 4.5 5.3a33 33 0 01-9.4 1.5c.6-3 2.4-5.4 4.9-6.9zm-5 8.3c4.2-.1 7.6-.8 10.3-1.7l1.1 2.1A17.4 17.4 0 004.2 19c-1.8-2-2.8-4.7-2.7-7.6z"
                                                />
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">UI / UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    1976 Thornide Joshua. Andr Maria.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-overview-card">
                                    <div className="job-card overview-card">
                                        <div className="overview-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M113.5 309.4L95.6 376l-65 1.4A254.9 254.9 0 010 256c0-42.5 10.3-82.5 28.6-117.7l58 10.6 25.4 57.6a152.2 152.2 0 001.5 103z" fill="#fbbb00" />
                                                <path d="M507.5 208.2a256.3 256.3 0 01-91.2 247.4l-73-3.7-10.4-64.5c29.9-17.6 53.3-45 65.6-78H261.6V208.3h246z" fill="#518ef8" />
                                                <path d="M416.3 455.6a256 256 0 01-385.8-78.3l83-67.9a152.2 152.2 0 00219.4 78l83.4 68.2z" fill="#28b446" />
                                                <path d="M419.4 59l-83 67.8A152.3 152.3 0 00112 206.5l-83.4-68.2a256 256 0 01390.8-79.4z" fill="#f14336" />
                                            </svg>
                                            <div className="overview-detail">
                                                <div className="job-card-title">UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    2972 Westheimer Rd. Santa Ana.
                                                </div>
                                            </div>
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div className="job-overview-buttons">
                                            <div className="search-buttons time-button">Full Time</div>
                                            <div className="search-buttons level-button">Senior Level</div>
                                            <div className="job-stat">New</div>
                                            <div className="job-day">4d</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="job-explain">
                                <img className="job-bg" alt="image" />
                                <div className="job-logos">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121"></path>
                                        <path xmlns="http://www.w3.org/2000/svg" d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe" data-original="#f4511e"></path>
                                    </svg>
                                </div>
                                <div className="job-explain-content">
                                    <div className="job-title-wrapper">
                                        <div className="job-card-title">UI /UX Designer</div>
                                        <div className="job-action">
                                            <svg
                                                className="heart"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="feather feather-heart"
                                            >
                                                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                <circle cx="18" cy="5" r="3" />
                                                <circle cx="6" cy="12" r="3" />
                                                <circle cx="18" cy="19" r="3" />
                                                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="job-subtitle-wrapper">
                                        <div className="company-name">Patreon <span className="comp-location">Londontowne, MD.</span></div>
                                        <div className="posted">Posted 8 days ago<span className="app-number">98 Application</span></div>
                                    </div>
                                    <div className="explain-bar">
                                        <div className="explain-contents">
                                            <div className="explain-title">Experience</div>
                                            <div className="explain-subtitle">Minimum 1 Year</div>
                                        </div>
                                        <div className="explain-contents">
                                            <div className="explain-title">Work Level</div>
                                            <div className="explain-subtitle">Senior level</div>
                                        </div>
                                        <div className="explain-contents">
                                            <div className="explain-title">Employee Type</div>
                                            <div className="explain-subtitle">Full Time Jobs</div>
                                        </div>
                                        <div className="explain-contents">
                                            <div className="explain-title">Offer Salary</div>
                                            <div className="explain-subtitle">$2150.0 / Month</div>
                                        </div>
                                    </div>
                                    <div className="overview-text">
                                        <div className="overview-text-header">Overview</div>
                                        <div className="overview-text-subheader">
                                            We believe that design (and you) will be critical to the companys success. You will work with our founders and our early customers to help define and build our product functionality, while
                                            maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset.
                                            You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.
                                        </div>
                                    </div>
                                    <div className="overview-text">
                                        <div className="overview-text-header">Job Description</div>
                                        <div className="overview-text-item">3+ years working as a product designer.</div>
                                        <div className="overview-text-item">A portfolio that highlights your approach to problem solving, as well as you skills in UI.</div>
                                        <div className="overview-text-item">Experience conducting research and building out smooth flows.</div>
                                        <div className="overview-text-item">Excellent communication skills with a well-defined design process.</div>
                                        <div className="overview-text-item">Familiarity with design tools like Sketch and Figma</div>
                                        <div className="overview-text-item">Up-level our overall design and bring consistency to end-user facing properties</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); }; export default Page;
    