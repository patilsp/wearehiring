
"use client"

import React from 'react';
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Textarea } from "@/registry/new-york/ui/textarea"

const JobForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='flex w-full max-w-full flex-col items-center justify-center p-10'>

      <h1 className='blue_gradient text-center text-4xl font-bold'>{type} Job</h1>
      <p className='desc max-w-md text-center'>
        {type} and share all the details of the job with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
        
      <form
        onSubmit={handleSubmit}
        className='glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7 md:w-1/2'
      >
        <div className="grid gap-2">
          <Label htmlFor="title">Job Title</Label>
          <Input
            value={post.job_title}
            onChange={(e) => setPost({ ...post, job_title: e.target.value })}
            placeholder='Enter job title'
            required
            className='input'
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Company</Label>
          <Input
            value={post.company_name}
            onChange={(e) => setPost({ ...post, company_name: e.target.value })}
            placeholder='Enter Company Name'
            required
            className='input '
          />
        </div>
     
        <div className="grid gap-2">
          <Label htmlFor="title">Job Location</Label>
          <Input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            placeholder='Enter job location'
            required
            className='input'
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">job Description</Label>
          <Textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Enter job description'
            required
            className='form_textarea '
          />
        </div>

        
        <div className="grid gap-2">
          <Label htmlFor="Salary">Salary</Label>
          <Input
            value={post.salary}
            onChange={(e) => setPost({ ...post, salary: e.target.value })}
            placeholder='Enter salary'
            required
            className='input'
          />
        </div>

      <div className="flex justify-between gap-2">
        <div className="grid gap-2">
          <Label htmlFor="date">Created Date</Label>
          <Input
            value={post.createddate}
            onChange={(e) => setPost({ ...post, createddate: e.target.value })}
            placeholder='Enter Created Date'
            required
            className='input '
          />
        </div>

        <div className="grid gap-2">
            <Label htmlFor="status">Job Type</Label>
            <Select>
              <SelectTrigger
               value={post.job_type}
               onChange={(e) => setPost({ ...post, job_type: e.target.value })}
               className="line-clamp-1 w-[160px] truncate"
              >
                <SelectValue placeholder="Select Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full_time">Full Time</SelectItem>
                <SelectItem value="part_time">Part Time</SelectItem>
                <SelectItem value="workfromhome">Work From Home</SelectItem>
              </SelectContent>
            </Select>
         
        </div>

       
        </div>
        <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger
               value={post.status}
               onChange={(e) => setPost({ ...post, status: e.target.value })}
               className="line-clamp-1 w-[160px] truncate"
              >
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Close">Close</SelectItem>
              </SelectContent>
            </Select>
          </div>

        <div className='mx-3 mb-5 mt-3 flex justify-end gap-4'>
          <Link href='/customers' className='mr-2 mt-2 text-sm text-gray-500'>
            Cancel
          </Link>

          <Button
            type='submit'
            disabled={submitting}
            className='text-xs'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default JobForm;

