
"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select";
import { Textarea } from "@/registry/new-york/ui/textarea";

const JobForm = ({ type, job, setJob, submitting, handleSubmit }) => {
  return (
    <section className="m-auto flex max-w-4xl flex-col items-center justify-center p-10">
      <h1 className="hero-heading text-center text-4xl font-bold">{type} Job</h1>
      {/* <p className="desc max-w-2xl text-center">
        {type} and share all the details of the job with the world, and let your imagination run wild with any AI-powered platform
      </p> */}

      <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-2xl flex-col gap-2">
        <div className="w-full">
          <Label htmlFor="title">Job Title</Label>
          <Input
            value={job.job_title}
            onChange={(e) => setJob({ ...job, job_title: e.target.value })}
            placeholder="Enter job title"
            required
            className="input"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="title">Link to apply</Label>
          <Input
            value={job.link}
            onChange={(e) => setJob({ ...job, link: e.target.value })}
            placeholder="Link to apply"
            required
            className="input"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="name">Company</Label>
          <Input
            value={job.company_name}
            onChange={(e) => setJob({ ...job, company_name: e.target.value })}
            placeholder="Enter Company Name"
            required
            className="input"
          />
        </div>
       

        <div className="w-full">
          <Label htmlFor="title">Job Location</Label>
          <Input
            value={job.location}
            onChange={(e) => setJob({ ...job, location: e.target.value })}
            placeholder="Enter job location"
            required
            className="input"
          />
        </div>


        <div className="w-full">
          <Label htmlFor="Salary">Salary</Label>
          <Input
            value={job.salary}
            onChange={(e) => setJob({ ...job, salary: e.target.value })}
            placeholder="Enter salary"
            required
            className="input"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="date">Created Date</Label>
          <Input
            value={job.createddate}
            onChange={(e) => setJob({ ...job, createddate: e.target.value })}
            placeholder="Enter Created Date"
            required
            className="input"
          />
        </div>

        

        {/* <div className="w-full">
          <Label htmlFor="job_type">Job Type</Label>
          <Select>
            <SelectTrigger
              value={job.job_type}
              onChange={(e) => setJob({ ...job, job_type: e.target.value })}
              className="line-clamp-1 truncate"
            >
              <SelectValue placeholder="Select Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full_time">Full Time</SelectItem>
              <SelectItem value="part_time">Part Time</SelectItem>
              <SelectItem value="workfromhome">Work From Home</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* <div className="w-full">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger
              value={job.status}
              onChange={(e) => setJob({ ...job, status: e.target.value })}
              className="line-clamp-1 truncate"
            >
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Close">Close</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full">
          <Label htmlFor="status">Location</Label>
          <Select>
            <SelectTrigger
              value={job.location}
              onChange={(e) => setJob({ ...job, location: e.target.value })}
              className="line-clamp-1 truncate"
            >
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        
        <div className="w-full">
          <Label htmlFor="description">Job Description</Label>
          <Textarea
            value={job.description}
            onChange={(e) => setJob({ ...job, description: e.target.value })}
            placeholder="Enter job description"
            required
            className="form_textarea"
          />
        </div>
        <div className="col-span-2 flex justify-end gap-4">
          <Link href="/" className="btn-default">
            Cancel
          </Link>
          <Button type="submit" disabled={submitting} className="text-xs">
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default JobForm;
