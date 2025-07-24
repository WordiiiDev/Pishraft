"use client";

import {
  MoveRight,
  MoveLeft,
  Clock,
  Circle,
  ChevronDown,
  ChevronRight,
  Search,
  SquarePen,
  Inbox,
  AlarmClock,
  FileQuestionMark,
  Box,
  Layers,
  Users,
  Folder,
  Smartphone,
  Monitor,
  PencilRuler,
  Filter,
  SlidersHorizontal,
  Bug,
  CircleCheck,
  DraftingCompass,
  Badge,
  Bot,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Hero() {
  const markdown = `
### 🐞 Bug Report: API Timeout

**Description:**  
The '/users/profile' API intermittently times out after 10 seconds.

**Steps to Reproduce:**
1. Call 'GET /users/profile' during peak hours.
2. Observe timeout error.

**Expected Behavior:**  
The endpoint should respond within 1–2 seconds.

**Actual Behavior:**  
Request fails with a '504 Gateway Timeout'.

**Environment:**  
- API Version: v1.2.3  
- Region: US-East  
- Client: Web App (Chrome 115)

**Notes:**  
Happens more often when user has > 1000 followers.

{
  "error": "Gateway Timeout",
  "status": 504,
  "message": "The server didn't respond in time."
}`;
  return (
    <div>
      <div className="xl:px-72 py-24 flex flex-col gap-12 overflow-hidden mx-auto">
        <motion.h1
          transition={{ duration: 0.5, delay: 0.25 }}
          initial={{ translateY: 25, opacity: 0, filter: "blur(25px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
          className="xl:text-6xl text-2xl tracking-tight font-semibold text-wrap xl:w-[60rem]"
        >
          Pishraft is a purpose-built tool for planning and building products
        </motion.h1>
        <motion.p
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ translateY: 25, opacity: 0, filter: "blur(25px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
          className="text-wrap text-xl font-semibold text-neutral-500 w-[30rem] hidden xl:block"
        >
          Meet the system for modern software development. Streamline issues,
          projects, and product roadmaps.
        </motion.p>
        <div className="flex flex-row gap-8">
          <motion.div
            transition={{ duration: 0.5, delay: 1.1 }}
            initial={{ translateY: 25, opacity: 0, filter: "blur(25px)" }}
            animate={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
          >
            <Button className="w-[8rem]">Start Managing</Button>
          </motion.div>

          <motion.div
            transition={{ duration: 0.5, delay: 1.15 }}
            initial={{ translateY: 25, opacity: 0, filter: "blur(25px)" }}
            animate={{ translateY: 0, opacity: 1, filter: "blur(0px)" }}
          >
            <Button className="w-[16rem]" variant={"ghost"}>
              <div className="flex flex-row gap-4 items-center justify-center group">
                Introducing Pishraft Agents{" "}
                <MoveRight className="duration-150 group-hover:translate-x-2" />
              </div>
            </Button>
          </motion.div>
        </div>

        <div className="border-t border-l w-[80rem] h-[50rem] rounded-md p-6 px-8 dashboard select-none relative z-10">
          <div className="absolute shadow-dashboard w-full h-full z-20 -translate-x-8 -translate-y-6 rounded-md"></div>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col gap-8 perspective-near">
              <motion.div
                transition={{ duration: 0.6, delay: 2.85 }}
                initial={{
                  translateZ: 70,
                  translateY: -75,
                  translateX: 100,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateZ: 0,
                  translateY: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  translateX: 0,
                }}
                className="flex gap-16 items-center"
              >
                <div className="flex gap-3">
                  <div className="rounded-full bg-neutral-800 size-3.5"></div>
                  <div className="rounded-full bg-neutral-800 size-3.5"></div>
                  <div className="rounded-full bg-neutral-800 size-3.5"></div>
                </div>
                <div className="flex gap-10">
                  <div className="gap-5 flex">
                    <MoveLeft size={16} className="text-neutral-400" />
                    <MoveRight size={16} className="text-neutral-600" />
                  </div>
                  <Clock size={16} className="text-neutral-400" />
                </div>
              </motion.div>
              <motion.div
                transition={{ duration: 0.6, delay: 2.8 }}
                initial={{
                  translateZ: 70,
                  translateY: -75,
                  translateX: 100,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateZ: 0,
                  translateY: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  translateX: 0,
                }}
              >
                <div className="flex gap-14">
                  <div className="flex gap-4 text-sm justify-center items-center">
                    <Circle strokeWidth={4} />
                    <p className="font-semibold">Pishraft</p>
                    <ChevronDown className="text-neutral-400" size={16} />
                  </div>
                  <div className="flex gap-6 justify-center items-center">
                    <Search size={16} className="text-neutral-400" />
                    <SquarePen
                      size={24}
                      className="text-neutral-400 bg-neutral-800 p-1 rounded-md border"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.div
                  transition={{ duration: 0.6, delay: 2.75 }}
                  initial={{
                    translateZ: 70,
                    translateY: -75,
                    translateX: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    translateZ: 0,
                    translateY: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    translateX: 0,
                  }}
                >
                  <Button
                    variant={"secondary"}
                    className="w-full flex gap-32 h-8"
                  >
                    <div className="flex items-center gap-2">
                      <Inbox /> Inbox
                    </div>
                    <div className="flex justify-center items-center text-xm text-neutral-400">
                      1
                    </div>
                  </Button>
                </motion.div>
                <motion.div
                  transition={{ duration: 0.6, delay: 2.7 }}
                  initial={{
                    translateZ: 70,
                    translateY: -75,
                    translateX: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    translateZ: 0,
                    translateY: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    translateX: 0,
                  }}
                >
                  <Button
                    variant={"ghost"}
                    className="w-full flex gap-28 justify-start h-8"
                  >
                    <div className="flex items-center gap-2 ml-1">
                      <AlarmClock /> Events
                    </div>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                transition={{ duration: 0.6, delay: 2.65 }}
                initial={{
                  translateZ: 70,
                  translateY: -75,
                  translateX: 100,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateZ: 0,
                  translateY: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  translateX: 0,
                }}
                className="flex flex-col gap-3"
              >
                <div className="text-[0.75rem] ml-5 text-neutral-400 flex flex-row gap-3 items-center">
                  <p>Workspace</p>
                  <ChevronDown size={16} />
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <FileQuestionMark size={16} className="text-neutral-400" />
                  <p>Issues</p>
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Box size={16} className="text-neutral-400" />
                  <p>Projects</p>
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Layers size={16} className="text-neutral-400" />
                  <p>Views</p>
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Users size={16} className="text-neutral-400" />
                  <p>Teams</p>
                </div>
              </motion.div>
              <motion.div
                transition={{ duration: 0.6, delay: 2.6 }}
                initial={{
                  translateZ: 70,
                  translateY: -75,
                  translateX: 100,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateZ: 0,
                  translateY: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  translateX: 0,
                }}
                className="flex flex-col gap-3"
              >
                <div className="text-[0.75rem] ml-5 text-neutral-400 flex flex-row gap-3 items-center">
                  <p>Favorites</p>
                  <ChevronDown size={16} />
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Smartphone size={16} className="text-neutral-400" />
                  <p>Mobile App</p>
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Monitor size={16} className="text-neutral-400" />
                  <p>Landing Page</p>
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Folder size={16} className="text-neutral-400" />
                  <p>Projects</p>
                  <ChevronRight size={16} className="text-neutral-400" />
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <Folder size={16} className="text-neutral-400" />
                  <p>Plans</p>
                  <ChevronRight size={16} className="text-neutral-400" />
                </div>
              </motion.div>
              <motion.div
                transition={{ duration: 0.6, delay: 2.55 }}
                initial={{
                  translateZ: 70,
                  translateY: -75,
                  translateX: 100,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateZ: 0,
                  translateY: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  translateX: 0,
                }}
                className="flex flex-col gap-3"
              >
                <div className="text-[0.75rem] ml-5 text-neutral-400 flex flex-row gap-3 items-center">
                  <p>Teams</p>
                  <ChevronDown size={16} />
                </div>
                <div className="ml-5 flex flex-row gap-3 items-center justify-start text-[0.9rem]">
                  <PencilRuler size={16} className="text-sky-500" />
                  <p>Products</p>
                  <ChevronDown size={16} />
                </div>
                <div className="ml-11 flex flex-row gap-3 items-center justify-start text-[0.9rem] text-neutral-400">
                  <p>Issues</p>
                </div>
                <div className="ml-11 flex flex-row gap-3 items-center justify-start text-[0.9rem] text-neutral-400">
                  <p>Insight</p>
                </div>
                <div className="ml-11 flex flex-row gap-3 items-center justify-start text-[0.9rem] text-neutral-400">
                  <p>Plans</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              transition={{ duration: 0.6, delay: 2.9 }}
              initial={{
                translateZ: 70,
                translateY: -75,
                translateX: 100,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                translateZ: 0,
                translateY: 0,
                opacity: 1,
                filter: "blur(0px)",
                translateX: 0,
              }}
              className="bg-neutral-900 border rounded-md w-[60rem] h-[45.55rem] flex flex-row divide-x mx-auto"
            >
              <div className="w-[20rem] flex flex-row">
                <div className="flex flex-col divide-y w-full">
                  <div className="p-2 px-4 h-10 flex flex-row items-center text-[0.9rem] gap-49">
                    <p>Inbox</p>
                    <div className="flex flex-row gap-4 items-center text-neutral-600 ">
                      <Filter size={16} />
                      <SlidersHorizontal size={16} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-2 px-4 text-[0.9rem]">
                    <div className="flex flex-row bg-neutral-800 px-3 h-14 gap-18 items-center rounded-md">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src={"/profile/1.jpg"}
                          alt="Profile 1"
                          width={16}
                          height={16}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[0.8rem]">
                            Kyle Issued A New Error
                          </p>
                          <p className="text-xs text-neutral-500">
                            New Error Issued
                          </p>
                        </div>
                      </div>
                      <Bug size={18} className="text-rose-500" />
                    </div>

                    <div className="flex flex-row px-3 h-14 gap-24 items-center rounded-md">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src={"/profile/2.jpg"}
                          alt="Profile 1"
                          width={16}
                          height={16}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[0.8rem]">Sarah Finished Task</p>
                          <p className="text-xs text-neutral-500">
                            Task: Redesign UI
                          </p>
                        </div>
                      </div>
                      <CircleCheck size={18} className="text-lime-500" />
                    </div>

                    <div className="flex flex-row px-3 h-14 gap-23 items-center rounded-md">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src={"/profile/3.jpg"}
                          alt="Profile 1"
                          width={16}
                          height={16}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[0.8rem]">Mohammad Started</p>
                          <p className="text-xs text-neutral-500">
                            Started New: Pricing
                          </p>
                        </div>
                      </div>
                      <DraftingCompass size={18} className="text-sky-500" />
                    </div>

                    <div className="flex flex-row px-3 h-14 gap-29 items-center rounded-md">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src={"/profile/4.jpg"}
                          alt="Profile 1"
                          width={16}
                          height={16}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[0.8rem]">Ali Started</p>
                          <p className="text-xs text-neutral-500">
                            Started New: API
                          </p>
                        </div>
                      </div>
                      <DraftingCompass size={18} className="text-sky-500" />
                    </div>

                    <div className="flex flex-row px-3 h-14 gap-26 items-center rounded-md">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src={"/profile/5.jpg"}
                          alt="Profile 1"
                          width={16}
                          height={16}
                          className="w-7 h-7 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[0.8rem]">Sign Up Page</p>
                          <p className="text-xs text-neutral-500">
                            New Sign Up Page
                          </p>
                        </div>
                      </div>
                      <Badge size={18} className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col divide-y w-[40rem]">
                <div className="h-10 px-6 p-2 flex flex-row gap-1 items-center">
                  <div className="flex flex-row gap-1 items-center">
                    <PencilRuler size={16} className="text-sky-500" />
                    <p className="text-xs">Engineering</p>
                  </div>
                  <ChevronRight size={16} className="text-neutral-600" />
                  <div className="flex flex-row gap-1 items-center">
                    <Bot size={16} className="text-indigo-500" />
                    <p className="text-xs">API</p>
                  </div>
                  <ChevronRight size={16} className="text-neutral-600" />
                  <div className="flex flex-row gap-1 items-center">
                    <Bug size={16} className="text-rose-500" />
                    <p className="text-xs">Issue #127</p>
                  </div>
                </div>
                <div className="text-xs p-2 px-4 flex flex-col gap-6">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
