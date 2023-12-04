"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/assets/animation3.json";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/new-york/ui/button";
import { Icons } from "@/components/icons";


import {
  FaCheck,
  FaSearch,
  FaShieldAlt,
  FaToggleOn,
  FaUserLock,
  FaWallet,
  FaRegSun,
  FaRegistered,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <motion.div
        initial="hidden"
        animate="visible"
        className="z-[20] flex w-full flex-col items-center justify-center"
      >
       
       <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="#"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            We are your feature
          </Link>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Get Your Desired <br /> <span className="text_primary">job with Talent Hub.</span> 
          </h1>
          <p className="mt-4 max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
           Get Jobs, Create trackable resumes and enrich your application.
          </p>
          <div className="mt-10 space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Know More 
            </Link>
          </div>
        </div>
      </section>


        <section className="space-y-2 py-2">
          <div className="relative h-full  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            
          <div className="relative mt-4 flex-col text-white lg:flex">
              <div className="absolute inset-0 " />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="text-card-foreground">
                  <div className="flex justify-center">
                  <Lottie animationData={animationData} />                  
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative p-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[555px]">
                  <div className="flex flex-col space-y-2 text-center">
                    <div className="text-left">
                      <p className="text-left text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                        Search, Apply & <br /> Get <span className="text_primary">Your Dream Job</span>
                      </p>
                      <p className="mt-6 text-xl leading-8 text-zinc-800">
                        Join the best tech startups in the industry
                      </p>

                      <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="mb-5 max-w-[600px] text-lg text-slate-500"
                      >
                        Explore an extensive database of jobs from top companies
                        with help of AI Join the best tech startups in the
                        industry.
                      </motion.p>
                      <div className="items-left justify-left mt-10 flex gap-x-6">
                        <Link href="/login" className="btn-primary">
                          Get started
                        </Link>
                        <a
                          href="#"
                          className="mt-2 text-sm font-semibold leading-6 text-slate-900"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="trusted-partners">
                    <div className="flex justify-between gap-10"></div>
                  </div>
                </div>
              </motion.div>
            </div>

         
          </div>
        </section>

   
        <section className="space-y-2 py-2">
          <div className="relative h-full  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative p-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[555px]">
                  <div className="flex flex-col space-y-2 text-center">
                    <div className="text-left">
                      <p className="text-left text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                        Project-based freelance work 
                      </p>
                      <p className="mt-6 text-lg leading-8 text-slate-700">
                        Join the best tech startups in the industry
                      </p>

                      <motion.div
                        variants={slideInFromLeft(0.8)}
                        className="mb-5 mt-2 max-w-[600px] text-lg text-slate-500"
                      >
                       <ul className="grid gap-3 text-sm text-muted-foreground">
                          <li className="flex items-center">
                            <FaCheck className="mr-2 h-4 w-4" /> Find experts for on-demand code review
                          </li>
                          <li className="flex items-center">
                            <FaCheck className="mr-2 h-4 w-4" /> Build features for your existing product
                          </li>
                          <li className="flex items-center">
                            <FaCheck className="mr-2 h-4 w-4" /> Turn your idea into an MVP
                          </li>                    
                        </ul>
                      </motion.div>
                      <div className="items-left justify-left mt-10 flex gap-x-6">
                        <Link href="/jobs-dashboard" className="btn-primary">
                          FIND A FREELANCER
                        </Link>
                       
                      </div>
                    </div>
                  </div>

                  {/* <p className="px-8 text-left text-sm text-muted-foreground">
              We Are Trusted By 
            </p> */}
                  <div className="trusted-partners">
                    <div className="flex justify-between gap-10"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative mt-4 flex-col text-white lg:flex">
              <div className="absolute inset-0 " />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="text-card-foreground">
                  <div className='flex w-full justify-center'>
                    <Image
                      src='/images/man.png'
                      width={400}
                      height={460}
                      alt='developers'
                      className='object-contain'
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      


        <section className="space-y-2 py-2">
          <div className="relative h-full  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative mt-4 flex-col text-white lg:flex">
              <div className="absolute inset-0 " />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="text-card-foreground">
                <Image 
                      src="/images/hiring.svg"
                      width={500}
                      height={600}
                      alt="users"
                      className="object-contain p-2"
                    />
                </div>
              </motion.div>
            </div>

         
            <div className="relative p-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[555px]">
                  <div className="flex flex-col space-y-2 text-center">
                    <div className="text-left">
                      <p className="text-left text-2xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-4xl">
                        We providing place you <br /> You can get trusted job
                      </p>
                      

                      <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="mb-5 max-w-[600px] text-lg text-slate-500"
                      >
                       It is a long established that a render will be discased by the readable content of page when long at its layout.
                      </motion.p>
                      <div className="mt-2 flex justify-start gap-10">
                        <div className="mt-10 flex flex-col gap-x-6">
                          <h1 className="text-3xl font-bold">
                            10K
                          </h1>
                          <p className=""> Active User </p>
                          <a
                          href="#"
                          className="mt-2 text-sm font-semibold leading-6 text-slate-900"
                        >
                          On Website <span aria-hidden="true">→</span>
                        </a>
                        
                        </div>
                        <div className="mt-10 flex flex-col gap-x-6">
                          <h1 className="text-3xl font-bold">
                            4.5
                          </h1>
                          <p className=""> 100 Rating </p>
                          <a
                          href="#"
                          className="mt-2 text-sm font-semibold leading-6 text-slate-900"
                        >
                          TalentHub Community <span aria-hidden="true">→</span>
                        </a>
                        
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="trusted-partners">
                    <div className="flex justify-between gap-10"></div>
                  </div>
                </div>
              </motion.div>
            </div>


          
         
          </div>
        </section>


     

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mx-auto mb-4 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-xl md:text-6xl">
                Get Hired In <span className="text_primary"> 6 Quick Easy Steps </span>
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                This project is an experiment to see how a modern job
                application works, with features like auth, subscriptions.
              </p>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  {/* <FaLogin className="h-12 w-12 fill-current" /> */}
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegistered className="h-12 w-12 fill-current" />
                      <h3 className="font-bold text-zinc-700">Create An account</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                     Sign-up for the job applicant profile, Mention your qualifications, past experience, and expertise and scope of your interest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  
                  <div className="space-y-2">
                  <div className="flex items-center justify-start gap-2">
                      <FaSearch className="h-12 w-12 fill-current" />
                      <h3 className="font-bold text-zinc-700">Search Your Job</h3>
                    </div>

                    
                    <p className="text-sm">
                      Once you set the job hunting parameters, you will find many openings related to your career interest on the home page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <FaUserLock className="h-12 w-12 fill-current" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-700">Apply For Job</h3>
                    <p className="text-sm text-muted-foreground">
                      Finally you apply your job and enjoy your work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <FaRegSun className="h-12 w-12 fill-current" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-700">Companies</h3>
                    <p className="text-sm text-muted-foreground">
                      Find the companies and apply for the job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <FaShieldAlt className="h-12 w-12 fill-current" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-700">Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Authentication using NextAuth.js and middlewares.
                    </p>
                  </div>
                </div>
              </div>
              <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <FaWallet className="h-12 w-12 fill-current" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-700">Subscriptions</h3>
                    <p className="text-sm text-muted-foreground">
                      Free and paid subscriptions using Stripe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-center md:max-w-[58rem]">
              {/* <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p> */}
            </div>
          </motion.div>
        </section>
       

        
      </motion.div>
    </div>
  );
}
