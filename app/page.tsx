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


export default function Home() {
  return (
    <main className="h-full w-full">
       <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] flex w-full flex-row items-center justify-center"
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
                  <p className="text-left text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">Lets Find Your <br /> Dream Job Here </p>
                  <p className="mt-6 text-lg leading-8 text-slate-700">Join the best tech startups in the industry</p>
                 
                  <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="mb-5 max-w-[600px] text-lg text-slate-500"
                  >
                    Explore an extensive database of jobs from top companies with help of AI
                    Join the best tech startups in the industry.
                </motion.p>
                  <div className="items-left justify-left mt-10 flex gap-x-6">
                  <Link href="/jobs-dashboard" className="rounded border bg-slate-900 px-4 py-2 font-semibold text-white shadow hover:bg-slate-700 hover:text-white">Get started</Link>
                  <a href="#" className="mt-2 text-sm font-semibold leading-6 text-slate-900">Learn more <span aria-hidden="true">→</span></a>
                  </div>
              </div>
        
            </div>
           
            {/* <p className="px-8 text-left text-sm text-muted-foreground">
              We Are Trusted By 
            </p> */}
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


      
    </motion.div>

    </main>
  );
}
