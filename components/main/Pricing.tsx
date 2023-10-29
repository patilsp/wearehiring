import React from 'react'

const Pricing = () => {
  return (
       <section className="relative z-50 py-20">
        <div className="container">
            <div className="mx-auto max-w-2xl sm:text-center">
                <span className="font-medium tracking-widest text-gray-400">our price</span>
                <h2 className="mt-7 text-3xl font-medium tracking-tight md:text-5xl">Price Plans</h2>
                <div className="mx-auto mt-5 h-[2px] w-10 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.</p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-28">

                <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                    <div className="pt-10 text-center">
                        <h5 className="text-xl font-semibold">Basic</h5>
                        <h2 className="mb-3 mt-8 items-center align-middle text-5xl">
                            <sup className="align-middle text-2xl">$</sup>49
                        </h2>
                        <span>per user, per month</span>
                    </div>

                    <div className="p-10">
                        <ul className="mb-10 text-center">
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                            </li>
                            <li>
                                <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                            </li>
                            <li>
                                <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">Audience Date</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">Premium templates</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">White Labelling</h5>
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <a href="#" className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 transition-all duration-500 hover:bg-purple-500 hover:text-white">Get Basic</a>
                        </div>
                    </div>
                </div>

                <div className="relative z-20">
                    <div className="absolute inset-x-0 top-0">
                        <div className="flex justify-center">
                            <span className="-mt-3 rounded-md border border-gray-700 bg-black px-2 py-1 text-xs font-medium uppercase text-white">most popular</span>
                        </div>
                    </div>
                    <div className="group">
                        <div className="rounded-xl border border-gray-300 bg-white dark:border-gray-700 dark:bg-neutral-900">
                            <div className="text-center">
                                <div className="flex flex-col">
                                    <div className="pt-10 text-center">
                                        <h5 className="text-xl font-semibold">Professional</h5>
                                        <h2 className="mb-3 mt-8 items-center align-middle text-5xl">
                                            <sup className="align-middle text-2xl">$</sup>69
                                        </h2>
                                        <span>per user, per month</span>
                                    </div>

                                    <div className="p-10">
                                        <ul className="mb-10 text-center">
                                            <li className="my-4">
                                                <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                                            </li>
                                            <li>
                                                <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                                            </li>
                                            <li className="my-4">
                                                <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                                            </li>
                                            <li>
                                                <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                                            </li>
                                            <li className="my-4">
                                                <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                                            </li>
                                            <li className="my-4">
                                                <h5 className="font-medium dark:text-gray-300">Audience Date</h5>
                                            </li>
                                            <li className="my-4">
                                                <h5 className="font-medium dark:text-gray-300">Premium templates</h5>
                                            </li>
                                            <li className="my-4">
                                                <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">White Labelling</h5>
                                            </li>
                                        </ul>
                                        <div className="flex justify-center">
                                            <a href="#" className="hover:bg-purple-500-800 rounded-md border border-purple-500 bg-purple-500 px-6 py-3 font-medium text-white">Get Pro</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-0 top-0 -z-10 h-full w-full translate-x-2 translate-y-2 rounded-xl bg-neutral-300/30 dark:bg-neutral-700"></div>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                    <div className="pt-10 text-center">
                        <h5 className="text-xl font-semibold">Ultimate</h5>
                        <h2 className="mb-3 mt-8 items-center align-middle text-5xl">
                            <sup className="align-middle text-2xl">$</sup>89
                        </h2>
                        <span>per user, per month</span>
                    </div>

                    <div className="p-10">
                        <ul className="mb-10 text-center">
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                            </li>
                            <li>
                                <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                            </li>
                            <li>
                                <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">Audience Date</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">Premium templates</h5>
                            </li>
                            <li className="my-4">
                                <h5 className="font-medium dark:text-gray-300">White Labelling</h5>
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <a href="#" className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 transition-all duration-500 hover:bg-purple-500 hover:text-white">Get Ultimate</a>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="mt-14 text-center font-medium">lnterested in a custom plan? <a href="#" className="text-purple-500">Get in touch</a></h5>
        </div>
    </section>

  )
}

export default Pricing
