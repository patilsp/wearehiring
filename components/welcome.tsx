"use client"

import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { motion } from "framer-motion";
import Lottie from"lottie-react";
import animationData from "@/assets/animation3.json";

export default function Welcome() {
  return (
    <>
  
          <section 
            className="relative flex h-full flex-col items-center justify-center gap-3  overflow-hidden bg-[#040015]"
            style={{ transform: "scale(0.9" }}
          >
          
          <div className=" item-center flex max-w-full justify-center">
            <div className="relative isolate">
                
                <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-36">
                <div className="mb-8 flex justify-center">
                    <div className="hero-badge relative hidden rounded-full text-sm leading-6 md:block">
                    Announcing our next round of funding.  <a href="#" className="ml-2 font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Transforming job <br /> <p className="gradient_blue"> search experience.</p></h1>
                    <h3 className="mt-6 text-lg leading-8 text-gray-200">Explore an extensive database of jobs from top companies with help of AI </h3>
                    <p className="mt-6 text-lg leading-8 text-slate-400">Join the best tech startups in the industry</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                  
                    </div>
                </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
                </div>
            </div>
          </div>

          {/* <div className=" item-center flex max-w-full justify-center">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="image" />
                </div>
                <div className="slide">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="image" />
                </div>
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
              </div>
            </div>
          </div> */}
        </section>






        <section
        className="container space-y-6  bg-[#040015] py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Easy way to get your next job
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Register An account</h3>
                <p className="text-sm text-muted-foreground">
                  First you have to create an account here.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Search Your Job</h3>
                <p className="text-sm">
                  You select which positions you wish to apply.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Apply For Job</h3>
                <p className="text-sm text-muted-foreground">
                  Finally you apply your job and enjoy your work.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">
                  UI components built using Radix UI and styled with Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication using NextAuth.js and middlewares.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
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


    <div className="relative h-full w-full mt-10  flex-col items-center justify-center">

      <div className="relative p-2">
        <motion.div
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1, delay: 1 }}  
          >
        <div className="relative m-auto w-full max-w-screen-sm overflow-hidden rounded-3xl bg-neutral-900 p-8 font-light text-white shadow-xl">
          <div className="absolute -left-[40%] top-0 h-[800px] w-[800px] -translate-y-[600px] rounded-full bg-green-800 opacity-100 blur-3xl"></div>

          <div className="absolute left-0 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 opacity-100 blur-3xl"></div>

          <div className="absolute left-0 top-[75px] h-[250px] w-[200px] -translate-x-1/2 transform rounded-[100%] bg-gradient-to-b from-yellow-200 via-amber-400 to-orange-700 opacity-90 blur-3xl"></div>

          <div className="relative z-10 flex justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white p-2 text-neutral-900">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-8 w-8">
                  <path fill="currentColor" d="M36.293 53.875a27.936 27.936 0 0 1 26.85-25.961c.289-.009.576-.013.864-.013a27.761 27.761 0 0 1 27.756 27.763 27.909 27.909 0 0 1-13.576 23.859 7.833 7.833 0 0 0-3.825 6.683v3.032a.086.086 0 0 1-.085.086h-2.99l4.2-23.706v-.005l1.364-7.7a2 2 0 1 0-3.938-.7L71.677 64.2c-1.616 1.256-3.29.536-6.637-1.38-2.612-1.5-5.976-3.408-9.346-2.179l-.607-3.422a2 2 0 1 0-3.938.7l1.135 6.4 4.432 25h-2.99a.086.086 0 0 1-.085-.086v-3.028a7.764 7.764 0 0 0-3.778-6.653 27.71 27.71 0 0 1-13.57-25.677zm38.842 39.449a2.021 2.021 0 0 1 0 4.041h-22.27a2.021 2.021 0 0 1 0-4.041h22.27zm2.021 10.062a2.023 2.023 0 0 1-2.021 2.021h-22.27a2.021 2.021 0 0 1 0-4.042h22.27a2.023 2.023 0 0 1 2.021 2.021zM60.777 89.324l-4.36-24.6c1.644-1.07 3.372-.306 6.635 1.563 2 1.145 4.447 2.547 6.981 2.546a6.581 6.581 0 0 0 .833-.059l-3.643 20.55zm4.058 30.106h-1.669a3.984 3.984 0 0 1-3.442-1.982h8.554a3.984 3.984 0 0 1-3.444 1.983zm10.3-5.982h-22.27a2.021 2.021 0 1 1 0-4.041h22.27a2.021 2.021 0 1 1 0 4.041zM66 16.858V6.569a2 2 0 1 0-4 0v10.289a2 2 0 1 0 4 0zm-38.758 46.58a2 2 0 0 0-2-2H14.953a2 2 0 0 0 0 4h10.289a2 2 0 0 0 2-2zM32.291 33.5a2 2 0 0 0 0-2.828L25.016 23.4a2 2 0 0 0-2.828 2.828l7.275 7.272a2 2 0 0 0 2.828 0zm82.756 29.937a2 2 0 0 0-2-2h-10.289a2 2 0 0 0 0 4h10.289a2 2 0 0 0 2-1.999zM98.537 33.5l7.275-7.275a2 2 0 0 0-2.828-2.828l-7.275 7.275a2 2 0 1 0 2.828 2.828z" />
                </svg>
              </div>
              <div className="text-xl opacity-75">Insight</div>
            </div>

            <div className="flex items-center gap-4">
              <form>
                <label for="when" className="sr-only">when</label>
                <div className="relative">
                  <select id="when" name="when" autocomplete="when" className="block w-full cursor-pointer appearance-none rounded-3xl border-0 bg-transparent px-6 py-3 pr-10 shadow-sm outline-none ring-1 ring-inset ring-slate-400 focus:ring-green-400">
                    <option>This Week</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 mr-5 flex items-center">
                    <svg className="h-3 w-3" viewBox="0 0 407.437 407.437">
                      <polygon fill="currentColor" points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
                    </svg>
                  </div>
                </div>
              </form>
              <div className="h-full">
                <button className="relative h-full rounded-full px-6 outline-none ring-1 ring-inset ring-slate-400 focus:ring-green-400">
                  <div className="sr-only">Menu</div>
                  <svg className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 my-20 flex text-8xl text-green-400">
            <div className="font-light text-white">89%</div>
            <svg className="h-16 w-16" viewBox="0 0 24 24">
              <path fillRule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="currentColor" />
            </svg>
          </div>

          <p className="relative z-10 text-2xl font-light">
            increase in your revenue
            <span className="opacity-50">by the end of this month is forecasted.</span>
          </p>

          <p className="relative z-10 mt-4 text-lg font-light leading-tight opacity-50">
            Harver is about to receive 15K new customers <br />
            which results in 78% increase in revenue.
          </p>

          <nav aria-label="cards" className="relative z-10 mt-24 flex items-center justify-between">
            <button>
              <svg className="h-8 w-8" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" />
              </svg>
            </button>

            <div className="flex flex-wrap justify-center gap-2">
              <div className="h-2 w-16 rounded-xl bg-white opacity-25"></div>
              <div className="h-2 w-16 rounded-xl bg-white opacity-100"></div>
              <div className="h-2 w-16 rounded-xl bg-white opacity-25"></div>
              <div className="h-2 w-16 rounded-xl bg-white opacity-25"></div>
              <div className="h-2 w-16 rounded-xl bg-white opacity-25"></div>
    </div>

    <button>
      <svg className="h-8 w-8" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z" />
      </svg>
    </button>
  </nav>
</div>



          </motion.div>

        </div>
      </div>
      </section>
    </>
  )
}
