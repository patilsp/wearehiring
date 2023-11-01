"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { toast } from 'react-hot-toast'

const items = [

  {
    id: "All",
    label: "Fresher",
  },
  {
    id: "Full Time",
    label: "1yr +",
  },
  {
    id: "Part Time",
    label: "3 yr +",
  },
  {
    id: "Internship",
    label: "5 yr +",
  },
] as const

const displayFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

type DisplayFormValues = z.infer<typeof displayFormSchema>

// This can come from your database or API.
const defaultValues: Partial<DisplayFormValues> = {
  items: ["recents", "home"],
}

export function FilterTwo() {
  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  })

  function onSubmit(data: DisplayFormValues) {
    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  }

  return (
    <div className="w-full rounded-sm border p-2">
      <div className="flex w-full justify-between border-b p-2">
        <h1 className="font-bold text-slate-700"> Filter </h1>
        <h1 className="font-bold text-pink-500"> Reset All </h1>
      </div>
      {/* <h2 className="m-2 font-bold"> Work Experience </h2> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-8 p-2">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                            <FormLabel className="flex w-full justify-between gap-5 font-normal">
                              {item.label}
                              <h2 className="text-slate-400"> 10 Jobs </h2>
                            </FormLabel>

                            
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
