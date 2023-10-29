'use client';

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function CustomerPage() {  
  const [allCustomers, setAllCustomers] = useState([]);

  const fetchCustomers = async () => {
    const response = await fetch("/api/customer");
    const data = await response.json();


    const transformedCustomers = data.map((customer, index) => ({
      ...customer,
      id: customer._id.toString(),
      id: `cust-${index + 1}`, 
    }));

    setAllCustomers(transformedCustomers);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your customers for this month!
          </p>
        </div>
        <div className="ml-auto">
          <Link href='create-customer' className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add Customer
          </Link>           
        </div>
      </div>
      <DataTable data={allCustomers} columns={columns} />
    </div>
  );
}
