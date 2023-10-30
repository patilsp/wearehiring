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
import Lottie from"lottie-react";
import animationData from "@/assets/animation3.json";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Icons } from "@/components/icons"
import { FaCheck, FaSearch, FaShieldAlt, FaToggleOn, FaUserLock, FaWallet, FaRegSun, FaRegistered } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="h-full w-full ">
       <motion.div
        initial="hidden"
        animate="visible"
        className="z-[20] flex w-full flex-col items-center justify-center"
      >
        <section
          className="space-y-2 py-2"
        >
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
                  <p className="text_primary text-left text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl lg:text-6xl">Lets Find Your <br /> Dream Job Here </p>
                  <p className="mt-6 text-lg leading-8 text-slate-700">Join the best tech startups in the industry</p>
                 
                  <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="mb-5 max-w-[600px] text-lg text-slate-500"
                  >
                    Explore an extensive database of jobs from top companies with help of AI
                    Join the best tech startups in the industry.
                </motion.p>
                  <div className="items-left justify-left mt-10 flex gap-x-6">
                  <Link href="/jobs-dashboard" className="btn-primary">Get started</Link>
                  <a href="#" className="mt-2 text-sm font-semibold leading-6 text-slate-900">Learn more <span aria-hidden="true">→</span></a>
                  </div>
              </div>
        
            </div>
           
            {/* <p className="px-8 text-left text-sm text-muted-foreground">
              We Are Trusted By 
            </p> */}
            <div className="trusted-partners">
              <div className="flex justify-between gap-10">

              </div>
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
            <div className="flex justify-center"> 
              <Lottie animationData={animationData} />                     
            </div>            
          </div>   
          </motion.div>     
        </div>

        </div>
        </section>

        <section 
            className="relative flex h-full w-full flex-col items-center justify-center gap-3  overflow-hidden">
          <motion.div
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}    
              transition={{ duration: 1, delay: 1 }} 
            >
          <div className=" item-center flex max-w-full justify-center">
            <div className="relative isolate">
                
                <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-36">
                <div className="mb-8 flex justify-center">
                    <div className="hero-badge relative hidden rounded-full bg-primary px-10 py-1 text-sm leading-6 text-white dark:text-slate-900 md:block">
                    Announcing our next round of funding.  <a href="#" className="ml-2 font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-display mt-6 block max-w-5xl text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] dark:text-white sm:text-6xl">Transforming job <br /> <p className="gradient_blue"> search experience.</p></h1>
                    <h3 className="mt-3 text-lg leading-8 text-slate-700">Explore an extensive database of jobs from top companies with help of AI </h3>
                    <p className="mt-1 text-lg leading-6 text-slate-600">Join the best tech startups in the industry</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                    <div className="input-box">
                      <i className="uil uil-search"></i>
                      <input type="text" placeholder="Try Software Developer, Tester..." />
                      <button className="button">Search</button>
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
          </div>


          <div className="mb-4 flex w-full justify-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              Our Partners
            </h2>
          </div>
          <div className="item-center flex max-w-full flex-row justify-center">
          
            <div className="slider">           
              <div className="slide-track flex">
               
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="image" />
                </div>
               
               
              </div>
            </div>
          </div>
          </motion.div>
        </section>


        <section
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
      <motion.div
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1, delay: 1 }} 
        >
        <div className="mx-auto mb-4 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Easy way to get your next job
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern job application works, with features
            like auth, subscriptions.
          </p>
        </div>


        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          
          <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {/* <FaLogin className="h-12 w-12 fill-current" /> */}
              <FaRegistered className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Register An account</h3>
                <p className="text-sm text-muted-foreground">
                  First you have to create an account here.
                </p>
              </div>
            </div>
          </div>

          <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <FaSearch className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Search Your Job</h3>
                <p className="text-sm">
                  You select which positions you wish to apply.
                </p>
              </div>
            </div>
          </div>

          <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <FaUserLock className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Apply For Job</h3>
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
                <h3 className="font-bold">Companies</h3>
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
                <h3 className="font-bold">Authentication</h3>
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
                <h3 className="font-bold">Subscriptions</h3>
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


      <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
        <div className="flex w-full justify-center">
          <h1 className="sub-heading"> Get Access </h1>
        </div>
      <div className="mx-auto flex w-full flex-col gap-4">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        We like keeping things simple, <p className="heading">One plan one price </p>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited jobs for your application.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg p-10 shadow-md hover:border-blue-500 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Unlimited Jobs
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div >
            <h4 className="mb-2 text-7xl font-bold">$10</h4>
            <p className="text-sm font-medium text-muted-foreground">
              (if billed annually)
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          This is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>



      </motion.div>
    </div>


  );
}


  