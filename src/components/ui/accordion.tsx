"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("font-text border rounded-xl px-7 xs:px-5 border-[#017373] m-4 xs:m-6 data-[state=open]:bg-white data-[state=open]:text-[#017373] data-[state=open]:font-semibold data-[state=closed]:bg-black data-[state=closed]:text-white", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-semibold text-lg font-text transition-all duration-300 ease-in-out transform [&[data-state=open]>svg]:rotate-45",
        className
      )}
      {...props}
    >
      {children}
      <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // fill="#000000"
                  fillOpacity={0}
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-2"
                >
                  <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#017373" />
                  <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#017373" fillOpacity={1} />
                  <path
                    d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                    fill="#017373" fillOpacity={1}
                  />
                </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className=" overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
