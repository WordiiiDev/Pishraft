"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/src/components/ui/navigation-menu";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import {motion, AnimatePresence} from "motion/react"
  
export function Navbar() {
  
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky z-20 top-0 min-h-[56px]">
      <div className="hidden xl:grid grid-cols-3 gap-24 items-center border-b h-14 px-32 backdrop-blur-lg align-middle select-none">
        <div className="flex flex-row justify-center">
          <Image src={"/Logo.svg"} alt="Logo" width={125} height={125} />
        </div>

        <div className="flex flex-row justify-center text-sm text-neutral-500 font-medium">
          <NavigationMenu>
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-12 p-0 m-0 text-nowrap divide-x">
                  <div className="p-6 px-8 flex flex-col gap-6 w-56 m-0">
                    <p className="text-sm text-neutral-500 px-4">
                      Core Features
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Management</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Make progress with you project, daily life and ...
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Plan</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Easily plan and shape your future
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="py-6 flex flex-col gap-6 w-[32rem] m-0">
                    <p className="text-sm text-neutral-500 px-4">More</p>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Security</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Advanced encryption for your plans
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Help & Support</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Get assistance and FAQs
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Feedback</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Send suggestions or report bugs
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Integrations</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Connect with other productivity tools.
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Themes</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Customize app colors and appearance
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Changelog</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          See the latest app updates
                        </p>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-12 p-0 m-0 text-nowrap">
                  <div className="p-6 px-8 flex flex-col gap-6 w-56 m-0">
                    <p className="text-sm text-neutral-500 px-4">
                      Main Resources & Company
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>API Documentation</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Technical info for developers
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>About</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Meet the team
                        </p>
                      </li>
                      <li>
                        <div className="flex flex-col gap-1 px-4 py-2 rounded-md w-52 mt-4 h-24 border bg-neutral-950">
                          <p className="text-base z-20">Webinar 2025</p>
                          <p className="text-wrap z-20 text-neutral-400">
                            We are waiting for you on July 26th.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Separator orientation="vertical" className="h-[22rem]" />
                  <div className="py-6 flex flex-col gap-6 w-[32rem] m-0">
                    <p className="text-sm text-neutral-500 px-4">Explore</p>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>User Guide</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Step-by-step instructions to get started
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Video Tutorials</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Watch quick how-to videos
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Community Forum</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Join discussions and share ideas
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Webinars</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Live and recorded sessions
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Product Roadmap</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          Future features and plans
                        </p>
                      </li>
                      <li className="flex flex-col gap-1 duration-150 hover:bg-gradient-to-br hover:from-neutral-500/50 px-4 py-2 rounded-md w-52">
                        <p>Accessibility</p>
                        <p className="text-wrap text-[0.8rem] text-neutral-400">
                          App features for all users
                        </p>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <Button variant={"ghost"} size={"sm"}>
            Log In
          </Button>
          <Button variant={"default"} size={"sm"}>
            Sign Up
          </Button>
        </div>
      </div>
      <div className="xl:hidden sticky top-0 z-10 backdrop-blur-lg grid grid-cols-2 items-center px-4 h-12 border-b">
        <Image src={"/Logo.svg"} alt="Logo" width={125} height={125} />
        <Menu size={16} className="justify-self-end" onClick={() => setOpen(!open)} />

        {open && (
          <AnimatePresence>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute flex flex-col rounded-md gap-4 border bg-neutral-950 p-2 px-4 left-10/14 top-14">
              <div>Pricing</div>
              <div>Community</div>
              <div>Blog</div>
              <div>Contact</div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
