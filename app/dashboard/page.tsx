"use client"
import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
import { Overview } from "@/app/dashboard/components/overview"
import { RecentSales } from "@/app/dashboard/components/recent-sales"
import { Search } from "@/app/dashboard/components/search"
import TeamSwitcher from "@/app/dashboard/components/team-switcher"

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();


  return (
    <>
    <div className="">
      <div className="m-2 rounded bg-pink-200 p-2">
        <h1 className="text_primary">Hi, User</h1>
        <p className="text-slate-400"> Looking for job? you come to the right place. Lets find the best job for you. </p>
      </div>
      <div className="flex-col md:flex">
        <div className="mb-2 gap-2 border-b">
          {/* <div className="flex h-16 items-center px-4 pr-2">
            <TeamSwitcher />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
            </div>
          </div> */}
        </div>
        <div className="flex-1 space-y-4 p-1 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            {/* <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div> */}
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports">
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications">
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex w-full justify-between gap-2">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Applicant History
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Upcoming Interview
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Applications Target</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                
                </div>
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                  
                  <Card className="hidden md:block">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0  pb-2">
                      <CardTitle className="text-sm font-medium">My Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="wrapper">
                      <div className="profile-card js-profile-card">
                        <div className="profile-card__img">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                          />
                        </div>

                        <div className="profile-card__cnt js-profile-cnt">
                          <div className="profile-card__name">{session?.user.name}</div>
                          <h3 className="mb-3">{session?.user.email}</h3>
                          <div className="profile-card__txt">Front-end Developer from <strong>Bangalore</strong></div>
                          <div className="profile-card-loc">
                            <span className="profile-card-loc__icon">
                              <svg className="icon"></svg>
                            </span>

                            <span className="profile-card-loc__txt rounded border p-1 px-2">
                              Edit Profile
                            </span>
                          </div>

                          <div className="profile-card-inf">
                            <div className="profile-card-inf__item">
                              <div className="profile-card-inf__title">1598</div>
                              <div className="profile-card-inf__txt">Followers</div>
                            </div>

                            <div className="profile-card-inf__item">
                              <div className="profile-card-inf__title">65</div>
                              <div className="profile-card-inf__txt">Following</div>
                            </div>

                            <div className="profile-card-inf__item">
                              <div className="profile-card-inf__title">85</div>
                              <div className="profile-card-inf__txt">Applications</div>
                            </div>
                          </div>

                          <div className="profile-card-social">
                            <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item facebook" target="_blank" rel="noreferrer">
                              <span className="icon-font">
                                  <svg className="icon">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="h-4 w-4 text-muted-foreground"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                  </svg>
                              </span>
                            </a>

                            <a href="https://twitter.com/iaMuhammedErdem" className="profile-card-social__item twitter" target="_blank" rel="noreferrer">
                              <span className="icon-font">
                                  <svg className="icon">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="h-4 w-4 text-muted-foreground"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                  </svg>
                              </span>
                            </a>

                            <a href="https://www.instagram.com/iamuhammederdem" className="profile-card-social__item instagram" target="_blank" rel="noreferrer">
                              <span className="icon-font">
                                  <svg className="icon">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="h-4 w-4 text-muted-foreground"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                  </svg>
                              </span>
                            </a>

                          

                            <a href="https://github.com/muhammederdem" className="profile-card-social__item github" target="_blank" rel="noreferrer">
                              <span className="icon-font">
                                  <svg className="icon">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="h-4 w-4 text-muted-foreground"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                  </svg>
                              </span>
                            </a>


                          </div>

                          <div className="profile-card-ctr">
                            <button className="profile-card__button button--blue js-message-btn">Message</button>
                            <button className="profile-card__button button--orange">Follow</button>
                          </div>
                        </div>
                      </div>

                    </div>

                 
                    </CardContent>
                  </Card>
                
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 hidden pl-2 md:block">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    </>
  )
}
